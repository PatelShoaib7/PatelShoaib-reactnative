import {
  ADD_TODOS,DELETE_LOADING, EDIT_LOADING, EDIT_TODO, GET_TODOS, GET_TODO_BY_ID,  REMOVE_TODO,  TODO_ERROR,  TODO_LOADING, TOGGLE_TODO, UPDATING_TODO,} 
from "./todos.actionTypes";

const initialState = {
  todos: [],
  todoId: {},
  loading:false,
  eror:false,
  deletLoading:false,
  editLoading:false,
  updateTodoLoading:false
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS: {
      return { ...state, todos: [...state.todos, payload] };
    }
    case TODO_LOADING : {
      return { 
                 ...state ,
                 loading:true,
                 error:false    
      }
    }
    case TODO_ERROR : {
      return { 
                 ...state ,
                 loading:false,
                 error:true   
      }
    }
    case GET_TODOS: {
      //console.log(payload);
      return { ...state,
               todos: payload,
               loading:false,
               error:false   
              };
    }
    case GET_TODO_BY_ID: {
      return { ...state, todoId: payload };
    }
     case DELETE_LOADING :{
      return {
        ...state,
        deletLoading:true
      }
     }
    case REMOVE_TODO: {
      let newTodo = state.todos.filter((todo) => todo.id !== payload);
      return { ...state, todos: [...newTodo],  deletLoading:false };
    }
    case UPDATING_TODO :{
      return {
        updateTodoLoading:true
      }
    }
    case TOGGLE_TODO: {
      let newTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          el.status = !el.status;
        }
        return el;
      });
      return { ...state,
               todos: newTodo ,
               updateTodoLoading:false};
    }
    case EDIT_LOADING :{
        return {
          editLoading:true
        }
    }
    case EDIT_TODO: {
      return { 
         ...state,
         todos: [...state.todos],
         todoId:payload,
         editLoading:false
        };
    }
    default: {
      return state;
    } }
};
