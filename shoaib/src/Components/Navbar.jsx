import { Box, Button, ButtonGroup, Divider, Flex, Heading, Spacer , Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Avatar, } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../Store/Auth/auth.action";

export const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleLogout = () => {
    logoutAPI(dispatch);
    navigate("/");
  };
  return (
    <div >
      
    <div style={{width:"fit-content" ,margin:'auto' ,  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' , borderRadius:'8px'}}>
    
      <Box  mb="15px" mt="10px">
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box p='2'>
          <Heading size='md' fontFamily={"cursive"} fontSize="30px">Todo App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2' mb="5px">
          <Button marginRight={'15px'}  paddingRight={'3px'}onMouseEnter={onOpen}  color="black" colorScheme='gray'> whats new</Button>
          <Button color="white" bg="red" margin={'left'} onClick={handleLogout}>{isAuth ? "Logout" : "Login"}</Button>
        </ButtonGroup>
      </Flex>
      </Box>












      <Modal
                  isCentered
                  onClose={onClose}
                  isOpen={isOpen}
                  motionPreset='slideInBottom'
                  >
                  <ModalOverlay />
                  <ModalContent>
                  <ModalHeader>More About Shoaib Patel</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                  {/* <Lorem count={2} /> */}

                  <Flex minWidth='max-content' alignItems='center' gap='2' >
                        <Box p='2'>
                        <Avatar
                        size='lg'
                        name='Prosper Otemuyiwa'
                        src='https://cdn.dribbble.com/users/5536359/avatars/small/96d1605009298139df101ca7391c7d87.jpeg?1660014113'
                  />{' '}
                        
                        </Box>
                        <Box>
                        <Heading size='md'>Shoaib Patel</Heading>
                        <Text></Text>
                        <Text>{`${"   "}`}Passionated about frontend</Text>
                        <Text>Full Stack Developer</Text>
                        
                        </Box>
                        <Spacer />
                        
                        </Flex>

                  </ModalBody>
                              <ModalFooter>

                                    <Button bg='rgb(255,0,0)'color="white" mr={3} onClick={onClose}>
                                          Close
                                    </Button>
                                    <Button colorScheme='green'color="white" mr={3} onClick={()=> navigate("/https://spiffy-klepon-58946f.netlify.app/")}>
                                          F0llow
                                    </Button>
                                    
                              </ModalFooter>
                  </ModalContent>
                  </Modal>
    </div>
    </div>
    
  );
};