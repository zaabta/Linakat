import { GET_NEW_SUBSCRIBERS, SUBSCRIBED_FAILED } from "../constants";
import API_URLS from "../../api";
import { requestApi } from "../../helper";

export const subscribeAction = (userData) => async (dispatch) => {
  let data = {
    url: API_URLS().SUBSCRIBERS.GET_NEW_SUBSCRIBERS,
    method: "POST",
    body: {
      ...userData,
    },
  };
  await requestApi(data)
    .then((res) => {
      dispatch({ type: GET_NEW_SUBSCRIBERS, payload: res?.data });
    })
    .catch((e) => {
      console.error(e);
      dispatch({ type: SUBSCRIBED_FAILED });
    });
};
