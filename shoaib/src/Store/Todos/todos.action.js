import {
  ADD_TODOS,
  EDIT_TODO,
  GET_TODOS,
  GET_TODO_BY_ID,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./todos.actionTypes";
import axios from "axios";
export const addTodoApi = (tasks, dispatch) => {
  axios.post("http://localhost:8000/todos", tasks)
       .then((res) => {
           dispatch({ type: ADD_TODOS, payload: res.data });
         });
};
export const getTodosApi = (dispatch) => {
  axios.get("http://localhost:8000/todos")
       .then((res) => {
        dispatch({ type: GET_TODOS, payload: res.data });
  });
};
export const removeTodo = (id, dispatch) => {
  axios.delete(`http://localhost:8000/todos/${id}`)
       .then((res) => {
        dispatch({ type: REMOVE_TODO, payload: id });
  });
};
export const toggleTodo = (todo, dispatch) => {
  axios
    .patch(`http://localhost:8000/todos/${todo.id}`, { status: !todo.status })
    .then((res) => {
      dispatch({ type: TOGGLE_TODO, payload: todo });
    });
};
