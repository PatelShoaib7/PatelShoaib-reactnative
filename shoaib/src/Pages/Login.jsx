import { ArrowForwardIcon, EmailIcon, InfoIcon, PhoneIcon, QuestionOutlineIcon, UnlockIcon, ViewIcon, ViewOffIcon  } from "@chakra-ui/icons";
import { Box, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Stack, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../Store/Auth/auth.action";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const { isAuth , loading , error} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const toast = useToast()


  const moveToLogin =()=>{

  }
  const handleLogin = () => {
    const creds = {
      email: email,
      password: password,
    };

    loginAPI(creds, dispatch);
  };
useEffect(()=>{
  moveToLogin()
},[toast])
  if (isAuth) {
    navigate("/");
  }
  
  if(loading) return <><div> <h1> logging in plz wait....</h1>
  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></div></>

 if(error) return <><div><h1>Oooops Something Went Wrong Check JSON-SEVER-PORT 404 ... </h1></div></>
  return (
    <div >
      <Box p="3%"  border="1px solid blk" display={"grid"} w="fix-content" m="auto" marginTop={"50px"}>
      <Box  m="auto">
        <Stack spacing={4}    w="sm"
              m="0.5rem"
              p="1rem">
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<EmailIcon color='gray.300' />}
          />
          <Input type='tel' 
              placeholder="eve.holt@reqres.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
            children={<UnlockIcon  color='gray.300'/>}
          />
          <Input  type="password"
              placeholder="cityslicka"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement children={<ViewIcon color='green.500' />} />
        </InputGroup>
      </Stack>
      <Stack direction='row' spacing={4} ml="7%">
          <Button onClick={handleLogin} rightIcon={<ArrowForwardIcon />} colorScheme='whatsapp' variant='solid'>
            logIn
          </Button>
          <Button onClick={onOpen} rightIcon={<InfoIcon />} colorScheme='red' variant='outline'>
            new user Sign up
         </Button>


       
    
    
    
    
    
    
      </Stack>
     
     
     
     
     
      </Box>
  </Box>
  <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>

          <InputGroup>
          <InputLeftElement pointerEvents='none'
            color='gray.300' fontSize='1.2em' children={<EmailIcon />}
          />

          <Input placeholder='Enter Email' />
          </InputGroup>
          <InputGroup>
          <InputLeftElement pointerEvents='none'
            children={<PhoneIcon color='gray.300' />}/>
          <Input type='tel' placeholder='Phone number' />
          </InputGroup>

          <InputGroup>
          <InputLeftElement pointerEvents='none'
            color='gray.300' fontSize='1.2em' children={<ViewIcon />}
          />
          <Input type="password" placeholder='Enter Password' />
          </InputGroup>
          </ModalBody>

          <ModalFooter>
          <Button colorScheme='blue' mr={3}
            onClick={onClose}> Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </div>
  );
};






