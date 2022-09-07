import {
  ADD_TODOS,
  DELETE_LOADING,
  EDIT_LOADING,
  EDIT_TODO,
  GET_TODOS,
  GET_TODO_BY_ID,
  REMOVE_TODO,
  SORT_TODO_BY,
  TODO_ERROR,
  TODO_LOADING,
  TOGGLE_TODO,
  UPDATING_TODO,
} from "./todos.actionTypes";
import axios from "axios";
export const addTodoApi = (tasks, dispatch) => {
 
  axios.post("http://localhost:8000/todos", tasks)
       .then((res) => {
           dispatch({ type: ADD_TODOS, payload: res.data });
         })
     
};
export const getTodosApi = (dispatch) => {
  dispatch({type:TODO_LOADING});
  axios.get("http://localhost:8000/todos")
       .then((res) => {
        setTimeout(()=>{
          dispatch({ type: GET_TODOS, payload: res.data })
        },400)
     })
      .catch((error)=>{
          dispatch({type:TODO_ERROR})
     })
  
};
export const getTodById = (id, dispatch) => {
  axios.get(`http://localhost:8000/todos/${id}`).
  then((res) => {
    dispatch({ type: GET_TODO_BY_ID, payload: res.data });
  });
};

export const removeTodo = (id, dispatch) => {
  dispatch({type:DELETE_LOADING})
  axios.delete(`http://localhost:8000/todos/${id}`)
       .then((res) => {
        dispatch({ type: REMOVE_TODO, payload: id });
  });
};
export const toggleTodo = (todo, dispatch) => {

  axios
    .patch(`http://localhost:8000/todos/${todo.id}`, { status: !todo.status })
    .then((res) => {
     setTimeout(()=>{
      dispatch({ type: TOGGLE_TODO, payload: todo });
     },400) 
    });
};
export const editTodo = (id, updatedTitle, dispatch) => {
  dispatch({type:EDIT_LOADING})
  axios
    .put(`http://localhost:8000/todos/${id}`,{ title: updatedTitle , CretedAt: new Date(), RemindAt : new Date() , status:false})
    .then((res) => {
      //console.log(res.data);
      dispatch({ type: EDIT_TODO, payload: res.data });
    });
 };
// export const SortBy =(dispatch)=>{
//    dispatch({type:SORT_TODO_BY , dispatch})
// }