import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

export const loginAPI = (creds, dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://reqres.in/api/login", creds)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const logoutAPI = (dispatch) => dispatch({ type: LOGOUT });
