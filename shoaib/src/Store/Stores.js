import { legacy_createStore, combineReducers, applyMiddleware , compose} from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { todosReducer } from "./Todos/todos.reducer";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  todo: todosReducer,
});
export const store = legacy_createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));
