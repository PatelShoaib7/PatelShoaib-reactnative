import { legacy_createStore, combineReducers } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { todosReducer } from "./Todos/todos.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});
export const store = legacy_createStore(rootReducer);
