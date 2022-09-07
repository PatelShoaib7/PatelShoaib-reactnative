import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

let token = localStorage.getItem("token");
const initialState = {
  loading: false,
  isAuth: !!token,
  error: false,
  token: token,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {     ...state, 
                loading: true, 
                error: false };
    }
    case LOGIN_SUCCESS: {
      //console.log("Success", payload);
      localStorage.setItem("token", payload);
      return { ...state, 
                loading: false, 
                isAuth: true,
                error: false };
    }
    case LOGIN_ERROR: {
      //console.log("ERROR");
      return { ...state, 
                loading: false, 
                error: true };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
             ...state,
                isAuth: 
                false,
                token: "",
      };
    }
    default: {
      return state;
    }
  }
};
