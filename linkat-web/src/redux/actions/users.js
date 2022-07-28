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
import API_URLS from "../../api";
import { requestApi } from "../../helper";


export const signupAction = (userData) => {
  return async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.SIGNUP,
      method: "POST",
      body: {
        ...userData,
      },
    };
    await requestApi(data);
    dispatch({ type: SIGNUP_NEW_USER });
  };
};

export const signinAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.SIGNIN,
    method: "POST",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: FETCH_TOKEN, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: FETCH_TOKEN_FAILED });
    });
};

export const logoutAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.LOGOUT,
    method: "POST",
  };
  await requestApi(data).then(() => dispatch({ type: TOKEN_REMOVE }))
};

export const getUserInfoAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.GET_USERINFO,
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_USERINFO, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: FETCH_TOKEN_FAILED });
    });
};

export const updateprofileAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().AUTH.UPDATE_PROFILE,
    method: "PUT",
    body: {
        ...userData
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: UPDATE_PROFILE });
    })
    .catch((e) => {
      console.error(e);
    });
};


export const updatePasswordAction = (userData) => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.UPDATE_PASSWORD,
      method: "PATCH",
      body: {
        ...userData
      }
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: UPDATE_PASSWORD });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  export const updateUsernameAction = (userData) => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.UPDATE_USERNAME,
      method: "PATCH",
      body: {
        ...userData
      }
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: UPDATE_USERNAME , payload: res?.data});
      })
      .catch((e) => {
        console.error(e);
      });
  };

  export const updateEmailAction = (userData) => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.UPDATE_EMAIL,
      method: "PATCH",
      body: {
        ...userData
      }
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: UPDATE_EMAIL });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  export const updateProfilePicAction = (formData) => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.UPDATE_PROFILEPIC,
      method: "PATCH",
      body: formData,
      contentType: "multipart/form-data",
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: UPDATE_PROFILEPIC, payload: res?.data });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  export const updateBgPicAction = (formData) => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.UPDATE_BGPIC,
      method: "PATCH",
      body: formData,
      contentType: "multipart/form-data",
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: UPDATE_BGPIC, payload: res?.data });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  export const deleteUserAction = () => async (dispatch) => {
    let data = {
      url: API_URLS().AUTH.DELETE_USER,
      method: "DELET",
    };
    await requestApi(data)
      .then((res) => {
        dispatch({ type: DELETE_USER });
      })
      .catch((e) => {
        console.error(e);
      });
  };
