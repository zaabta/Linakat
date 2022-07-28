import {
    GET_LINKTYPES,
    ADD_LINKTYPE,
    EDIT_LINKTYPE,
    EDIT_LINKICON
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helpers/index.js";


export const getLinkTypesAction = () => async (dispatch) => {
    let data = {
        url: API_URLS().LINKTYPES.GET_LINKTYPES
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: GET_LINKTYPES, payload: res?.data });
        })
};

export const addLinkTypeAction = (type) => async (dispatch) => {
    let data = {
        url: API_URLS().LINKTYPES.ADD_LINKTYPE,
        method: "POST",
        body: { type },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: ADD_LINKTYPE, payload: res?.data });
        })
};

export const editLinkTypeAction = (linktype, type) => async (dispatch) => {
    let data = {
        url: API_URLS(linktype.id).LINKTYPES.EDIT_LINKTYPE,
        method: "PATCH",
        body: {
            type
        },
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: EDIT_LINKTYPE, payload: res?.data });
        })
};

export const editLinkIconAction = (linktype, formData) => async (dispatch) => {
    let data = {
        url: API_URLS(linktype.id).LINKTYPES.EDIT_LINKICON,
        method: "PATCH",
        body: formData,
        contentType: "multipart/form-data",
    };
    await requestApi(data)
        .then((res) => {
            dispatch({ type: EDIT_LINKICON, payload: res?.data });
        })
};