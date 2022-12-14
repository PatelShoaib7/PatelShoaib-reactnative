import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EditTodo } from "./Components/EditTodo";
import { Navbar } from "./Components/Navbar";
import { TodoId } from "./Components/TodoId";
import { RequiredAuth } from "./hoc/RequiredAuth";
import {Login} from "./Pages/Login"
import {Home} from "./Components/Home"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route margin="3rem"
                 path="/"
                 element={<RequiredAuth> <Home />  </RequiredAuth>}>
         </Route>
        <Route path="/todo/:id" element={<RequiredAuth>  <TodoId /></RequiredAuth>}></Route>
        <Route path="/todo/:id/edit" element={<RequiredAuth><EditTodo /></RequiredAuth> }></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
