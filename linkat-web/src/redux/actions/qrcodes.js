import {
  CREATE_QR_CODE,
  CREATE_QR_FOR_LINKS,
  SCAN_QR,
  NOT_FOUND,
} from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";
import { Navigate } from "react-router-dom";

export const createQRAction = () => async (dispatch) => {
  let data = {
    url: API_URLS().QRCODE.CREATE_QR_CODE,
    method: "POST",
    body: {},
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: CREATE_QR_CODE, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const createQRForLinksAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().QRCODE.CREATE_QR_FOR_LINKS,
    method: "POST",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: CREATE_QR_FOR_LINKS, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
    });
};

export const scanQRAciton = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().QRCODE.CREATE_QR_CODE + "/" + userData.uuid,
    method: "GET",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: SCAN_QR, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      <Navigate to="/notfound" replace={ true } />;
      dispatch({ type: NOT_FOUND});
    });
};
