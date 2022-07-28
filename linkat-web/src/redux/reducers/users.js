import {
    SIGNUP_NEW_USER,
    FETCH_TOKEN,
    FETCH_TOKEN_FAILED,
    TOKEN_REMOVE,
    GET_USERINFO,
    UPDATE_PROFILE,
    UPDATE_PASSWORD,
    UPDATE_USERNAME,
    UPDATE_EMAIL,
    UPDATE_PROFILEPIC,
    UPDATE_BGPIC,
    DELETE_USER
  } from "../constants";
  
  let initialState = {
    success: false,
    data: {
      token: window.localStorage.getItem("token") || null,
      user: JSON.parse(window.localStorage.getItem("user")) || null
    },
    isAuthenticated: false,
  };
  
  const usersReducer = (state = initialState, action) => {
    let newState= {};
    switch (action.type) {
      case FETCH_TOKEN:
        window.localStorage.setItem("token", action?.payload?.data?.token);
        window.localStorage.setItem("user", JSON.stringify(action?.payload?.data?.user));
        return {
          success: action?.payload?.success,
          messages: action?.payload?.messages,
          data: {
            user: action?.payload?.data?.user,
            token: action?.payload?.data?.token
          },
          isAuthenticated: true,
        };
      case SIGNUP_NEW_USER:
        return {
          success: action?.payload?.success,
          messages: action?.payload?.messages,
          isAuthenticated: false,
        };
      case FETCH_TOKEN_FAILED:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        return {
          success: false,
          isAuthenticated: false,
          data:{
            user: null,
            token: null
          }
        };
      case GET_USERINFO:
        return {
          ...state,
          success: true,
          isAuthenticated: true,
          data : {
            ...state.data,
            user: action?.payload?.data
          }
        };
      case UPDATE_PROFILEPIC:
         newState = {
          ...state,
          isAuthenticated: true,
          success: action?.payload?.success || false,
          data: {
            ...state.data,
            user: {
              ...state?.data?.user,
              usersprofile:{
                ...state?.data?.user?.usersprofile,
                profilePic: action?.payload?.data?.urlImage
              }
            }
          }
        }
        window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
        return {
          ...newState
        };
        case UPDATE_BGPIC:
          newState = {
            ...state,
          isAuthenticated: true,
          success: action?.payload?.success || false,
          data: {
            ...state.data,
            user: {
              ...state?.data?.user,
              usersprofile:{
                ...state?.data?.user?.usersprofile,
                bgPic: action?.payload?.data?.urlImage
              }
            }
          },
          };
          window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
          return {
            ...newState
          };
      case UPDATE_USERNAME:
        newState = {
          ...state,
          data:{
            ...state.data,
            user:{
              ...state?.data?.user,
              username: action?.payload?.data?.username
            }
          }
        }
        window.localStorage.setItem("user", JSON.stringify(newState?.data?.user));
        console.log("UPDATE_USERNAME", action?.payload)
        return {
          ...newState
        }    
        case UPDATE_PROFILE:
          newState = {
          }
        return {
          ...state,
          data: {
            ...state.data,
            user: {
              ...state.data.user,
              usersprofile: {
                ...state.data.user.usersprofile,
                bio: action?.payload?.data?.usersprofile?.bio,
                nickname: action?.payload?.data?.usersprofile?.nickname
              }
            }
          }
        }
      case TOKEN_REMOVE:
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        return {
          ...state,
          isAuthenticated: false,
          data:{
            ...state.data,
          token: null,
          user: null,
          }
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
  