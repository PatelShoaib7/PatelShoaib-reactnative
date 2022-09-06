import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../Store/Auth/auth.action";

export const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    const creds = {
      email: email,
      password: password,
    };
    loginAPI(creds, dispatch);
  };

  if (isAuth) {
    navigate("/");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="eve.holt@reqres.in"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="cityslicka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};


