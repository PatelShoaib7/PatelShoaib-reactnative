import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoApi, getTodosApi } from "../Store/Todos/todos.action";
import { useEffect } from "react";
import {TodoList} from "./TodoList";

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
  };

  useEffect(() => {
    getTodosApi(dispatch);
  }, [dispatch]);
  return (
    <div>
      <input
        type="text"
        placeholder="add something..."
        value={tasks}
        onChange={(e) => {
          setTasks(e.target.value);
          //   setTasks("");
        }}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <div>
        <TodoList></TodoList>
      </div>
    </div>
  );
};


