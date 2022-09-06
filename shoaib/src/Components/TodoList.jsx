import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTodo, toggleTodo } from "../Store/Todos/todos.action";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  console.log(todos)
  const dispatch = useDispatch();
  //   console.log("todos:", todos);
  const handleRemoveTodo = (id) => {
    removeTodo(id, dispatch);
  };

  const toggleTododHandler = (el) => {
    toggleTodo(el, dispatch);
  };
  return (
    <div>
      {todos.map((el) => (
         <div  style={{ display: "grid",marginTop: "15px", }}
          key={el.id}>
          <div style={{ border: "1px solid", width: "fit-content",  margin: "auto", padding: "20px", }}>
            <Link to={`/todo/${el.id}`}
                  style={el.status
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }>  {el.title}
            </Link>
            <div style={{ display: "flex", gap: "8px", marginTop: "5px" }}>
              <button onClick={() => toggleTododHandler(el)}>
                {el.status ? "Mark as UnCompleted" : "Mark as Completed"}
              </button>
              <button onClick={() => handleRemoveTodo(el.id)}>Remove</button>
            </div>
          </div>
        </div>
        // <div key={el.id}>{el.value}</div>
      ))}
    </div>
  );
};
