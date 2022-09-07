import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoApi, getTodosApi } from "../Store/Todos/todos.action";
import { useEffect } from "react";
import {TodoList} from "./TodoList";
import { Box, Button, Input, Spacer } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Home = () => {
  const [tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    let obj = {
      id: new Date(),
      title: tasks,
      status: false,
      CretedAt: new Date(),
      RemindAt : new Date()
    };
    // console.log("obj:", obj);
    addTodoApi(obj, dispatch);
    setTasks("")
    alert("task Addeed Sucessfullly")
  };

  useEffect(() => {
    getTodosApi(dispatch);
  }, [dispatch]);
  return (
    <div>
      <Navbar />
     
     <Input 
         w="xs"
        mr="10px"
        placeholder="add more tasks ..."
        value={tasks}
        onChange={(e) => { setTasks(e.target.value); }}
      />
    
      <Button mb="5px" onClick={handleAddTodo}>ADD</Button>
      <div>
        <TodoList></TodoList>
      </div>
    
     
    </div>
  );
};


