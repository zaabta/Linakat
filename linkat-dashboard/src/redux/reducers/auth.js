import {
    FETCH_TOKEN,
    FETCH_TOKEN_FAILED,
    TOKEN_REMOVE,
  } from "../constants";
  
  let initialState = {
    success: false,
    data: {
      token: window.localStorage.getItem("token") || null,
      admin: JSON.parse(window.localStorage.getItem("admin")) || null
    },
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action) => {
    const { success, messages, data } = action?.payload || {};
    switch (action.type) {
      case FETCH_TOKEN:
        window.localStorage.setItem("token", data?.token);
        window.localStorage.setItem("admin", JSON.stringify(data?.admin));
        return {
          success,
          messages,
          data,
          isAuthenticated: true,
        };
      case FETCH_TOKEN_FAILED:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("admin");
        return {
          ...state,
          data: {
            admin: null,
            token: null
          },
          success: false,
          isAuthenticated: false,
        };
      case TOKEN_REMOVE:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("admin");
        return {
          ...state,
          data: {
            token: null,
            admin: null,
          },
          success: true,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  