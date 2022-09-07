import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Select, Spinner, Text, Tooltip ,useDisclosure,Divider,Progress,} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getTodosApi, removeTodo, toggleTodo } from "../Store/Todos/todos.action";
import { Sorting } from "./Sorting";



export const TodoList = () => {
      const  {todos, loading , error , deletLoading ,updateTodoLoading}  = useSelector((state) => state.todo);
      const [SortBy , setSortBy]=useState("none");
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const { isOpen, onOpen, onClose } = useDisclosure()
      const cancelRef = React.useRef()
      //   console.log("todos:", todos);
      const handleRemoveTodo = (id) => {
        console.log(id)
        removeTodo(id, dispatch);
      };
      const toggleTododHandler = (el) => {
        toggleTodo(el, dispatch);
      };
      if(loading) return <>
          <div style={{margin:'80px'}}> <h1> data is loading plz wait....</h1>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
    </div>
    </>
    if(deletLoading) return <>
                      <div style={{margin:'80px'}}> <h1> deleteing  plz wait....</h1>
                      <Progress size='xs' isIndeterminate />

                      </div>
          </>
    if(error) return <>
                   <div  style={{margin:'120px' , fontFamily:'sans-serif', fontSize:'30px'}}><h1>Oooops Failed To Fetch Data Check JSON-SEVER-PORT 404... </h1></div></>
      return (
        <div> 
          
          {
          todos.map((el) => (
            <div  style={{ display: "grid", marginTop: "15px",}}
              key={el.id} >
              <div style={{ border: "0.5px solid rgb(237,242,247)", 
                            width: "fit-content",
                            padding: "20px", boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' , borderRadius:'8px',  margin: "auto"}} 
              >
                <Text
            
                      style={
                        el.status
                          ? { textDecoration: "line-through",fontSize:'16px'}
                          : { textDecoration: "none" , fontSize:'20px' , fontFamily:"sans-serif" }
                      }
                    >
                    <Box>

          
                      <Accordion allowToggle w="sm">
                          <AccordionItem>
                                <h2>
                                  <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                    Task Title : {el.title}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={1} w="fit-content">
                                  <Box>
                                    Task Description 
                                    <Divider />
                                    Creted Date  :{el.CretedAt}
                                    <br />
                                    q Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniamuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                  </Box>
                                </AccordionPanel>
                          </AccordionItem>
                      </Accordion>
                      </Box>
                </Text>
                <div style={{ display: "flex", 
                          gap: "8px", marginTop: "5px" }}>
              
                  <Button  style={el.status ? { background:''}
                                            : {background:'rgb(64,180,255)'}
                  }  onClick={() => toggleTododHandler(el)}>
                    {el.status ? " Task Completed  ✓"   : "Mark as Completed"}
                  </Button>
              
                  <Button colorScheme='red' onClick={()=> handleRemoveTodo(el.id)} ml={3}>  Delete
                  </Button>
                  <Tooltip  bg='green' color='white' label='Edit item' placement='top'>
                  
                  <Button colorScheme='green' leftIcon={<EditIcon />} onClick={()=> navigate(`/todo/${el.id}`)}> edit</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
            // <div key={el.id}>{el.value}</div>
          ))}
        </div>
      );
    };

