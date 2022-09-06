import {
  ADD_TODOS,
  EDIT_TODO,
  GET_TODOS,
  GET_TODO_BY_ID,
  REMOVE_TODO,
  TOGGLE_TODO,
} 
from "./todos.actionTypes";

const initialState = {
  todos: [],
  todoId: {},
};

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS: {
      return { ...state, todos: [...state.todos, payload] };
    }

    case GET_TODOS: {
      //console.log(payload);
      return { ...state, todos: payload };
    }

    case GET_TODO_BY_ID: {
      return { ...state, todoId: payload };
    }

    case REMOVE_TODO: {
      let newTodo = state.todos.filter((todo) => todo.id !== payload);
     // console.log(newTodo);
      return { ...state, todos: [...newTodo] };
    }

    case TOGGLE_TODO: {
      let newTodo = state.todos.map((el) => {
        if (el.id === payload.id) {
          el.status = !el.status;
        }
        return el;
      });
      return { ...state, todos: newTodo };
    }

    case EDIT_TODO: {
      return { ...state, todos: [...state.todos, payload] };
    }

    default: {
      return state;
    }
  }
};
