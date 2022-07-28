import { GET_NEW_SUBSCRIBERS, SUBSCRIBED_FAILED } from "../constants";

let initialState = {
  success: false,
  data: [],
  message: "",
};

const subscribersReducer = (state = initialState, action) => {
  const { success, data, messages } = action?.payload || {};
  switch (action.type) {
    case GET_NEW_SUBSCRIBERS:
      return {
        success,
        data,
        messages,
      };
    case SUBSCRIBED_FAILED:
      return {
        success: false,
        data,
        messages,
      };
    default:
      return state;
  }
};

export default subscribersReducer;
