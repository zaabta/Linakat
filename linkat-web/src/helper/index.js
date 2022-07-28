import store from "../redux/store";
import { toggleNotf } from "../redux/actions/notifications";
import axios from "axios";

export const checkHttpStatus = async (response) => {
  if (response.status >= 200 && response.status < 300) {
    store.dispatch(toggleNotf(response.data));
    return response;
  }

  if (!response.success) {
    store.dispatch(toggleNotf(response.messages));
    throw new Error(response.statText);
  }
  return response;
};

export const requestApi = async (data) => {
  const token = window.localStorage.getItem("token") || null;
  return await axios({
    url: data?.url,
    method: data?.method || "GET",
    data: data?.body || {},
    headers: {
      Accept: data?.accept || "application/json",
      "Content-Type": data?.contentType || "application/json",
      Authorization: token ? `Bearer ${token}` : null,
    },
  })
    .then(checkHttpStatus)
    .catch((e) => {
      console.log("i am in the error")
      let { data, status } = e.response;
      if (status === 401) window.localStorage.removeItem("token");
      store.dispatch(toggleNotf(data || { message: e.message }));
      throw new Error(e);
    });
};
