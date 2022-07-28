import {
  GET_USERLINKS,
  REORDER_LINKS,
  EDIT_LINK,
  DELETE_LINK,
  GET_LINK_TYPES,
  ADD_NEW_LINK
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const getUserLinksAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.GET_USERLINKS,
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_USERLINKS, payload: res?.data });
  });
};

export const reoderLinksAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.REORDER_LINKS,
    method: "PATCH",
    body: {
      ...userData,
    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: REORDER_LINKS, payload: res?.data });
  });
};

export const editLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.EDIT_LINK + userData?.id,
    method: "PUT",
    body: {
      ...userData,
    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: EDIT_LINK, payload: res?.data });
  });
};

export const deleteLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.DELETE_LINK + userData?.id,
    method: "DELETE",
    body: {

    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: DELETE_LINK, payload: res?.data });
  });
};

export const getLinkTypesAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.GET_LINK_TYPES,
    method: "GET",
  };
  await requestApi(data).then((res) => {
    dispatch({ type: GET_LINK_TYPES, payload: res?.data });
  });
};

export const addNewLinkAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().LINKS.ADD_NEW_LINK,
    method: "POST",
    body: {
      ...userData
    },
  };
  await requestApi(data).then((res) => {
    dispatch({ type: ADD_NEW_LINK, payload: res?.data });
  });
} 
