import { Box, Button, Divider, Input, Progress, StackDivider, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editTodo, getTodById, getTodosApi } from "../Store/Todos/todos.action";
import {ArrowBackIcon } from '@chakra-ui/icons'


export const TodoId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { todoId  ,todos , editLoading} = useSelector((state) => state.todo);
  const [updatedTitle , setUpdatedTitle]=useState("")
  const { status , CretedAt , title  } = todoId;
  const navigate = useNavigate()

  //FUNC FOR UPDATING THE TODO
  const handleEditTodo =()=>{
    editTodo(id, updatedTitle, dispatch);
    alert("Changes Svaed")
    setUpdatedTitle("")
 }
  
  useEffect(() => {
    getTodById(id, dispatch);
  }, [dispatch, id ]);


  return (
    <div>
      <div>
            <VStack  spacing={4}  align='stretch'   mb="30px"   >
                    <Box h='10px' >  ID: {id}</Box>
                          <Box h='10px' fontSize='20px' >  title: {todoId.title} </Box>
                          <Box h='10px' >      status: {todoId.status ? "Completed" : "Incompleted"} </Box>
                          <Box h='10px' >   Creation date {todoId.CretedAt}
                    </Box>
            </VStack>
            <VStack  spacing={20}  align='stretch'   mb="30px"    >
                     <Box h='10px' >
                           <Input  w="sm"   type="text"   placeholder="Enter task title here"  onChange={(e) => setUpdatedTitle(e.target.value)}  />
                      <Box  p="'10px" >
                     </Box>
                         <Button p="'10px" colorScheme={'green'} onClick={handleEditTodo}>Update Todo</Button>
                     </Box>
                       <Box h='10px' fontSize='20px' >
                       <Button colorScheme={'teal'} leftIcon={<ArrowBackIcon />}  onClick={()=> navigate("/")}>Go To Home</Button>
                      </Box>
           </VStack>
      </div>
    </div>
  );
};
