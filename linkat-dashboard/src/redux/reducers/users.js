import {
  GET_USERS,
  GET_USER,
  DELETE_USER,
  TOGGLE_ACTIVITY,
  GET_USERLINKS,
  DELETE_LINK,
  GET_USERSDATES
} from "../constants";

let initialState = {
  data: [],
  success: false,
  messages: ''
};

const usersReducer = (state = initialState, action) => {
  const { success, messages, data, userId = null } = action?.payload || {};
  switch (action.type) {
    case GET_USERS:
      console.log("in GET_USERS: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
    case GET_USER:
      console.log("in GET_USER: success, messages, data: ", success, messages, data)
      const tempIndex = state.data.map(user => user.id == data.id)
      let tempArray = [...state.data];
      if (tempIndex == -1) {
        tempArray.push(data)
      }
      return {
        ...state,
        data: tempArray,
        success: true,
        messages
      };
    case GET_USERSDATES:
      console.log("in GET_USERSDATES: success, messages, data: ", success, messages, data)
      return {
        ...state,
        dates: [
          ...data
        ],
        success: true,
        messages
      };
    case TOGGLE_ACTIVITY:
      console.log("in TOGGLE_ACTIVITY: success, messages, data: ", success, messages, data)
      return {
        ...state,
        success,
        messages
      };
    case DELETE_USER:
      console.log("in DELETE_USER: success, messages, data: ", success, messages, data)
      const temp = [...state.data];
      const index = temp.findIndex(user => user.id == userId);
      index >= 0 && temp.splice(index, 1)
      return {
        ...state,
        data: temp,
        success,
        messages
      };
    case GET_USERLINKS:
      console.log("in GET_USERLINKS: success, messages, data: ", success, messages, data)
      let tempData = [...state.data];
      let userIndex = tempData.findIndex(user => user?.id == data[0]?.user?.id);
      console.log("userIndex is :", userIndex);
      console.log("data: ", data)
      console.log("user: ", tempData[userIndex])
      if (data && userIndex >= 0) {
        tempData[userIndex].links = data
      }
      else if (userIndex >= 0) {
        tempData[userIndex].links = []
      }
      return {
        ...state,
        data: tempData,
        success,
        messages
      }
    case DELETE_LINK:
      console.log("in DELETE_LINK: success, messages, data: ", success, messages, data)
      let tempUsers = [...state.data];
      let tempUserIndex = tempUsers.findIndex(user => user.id == userId);
      let tempLinks = [...tempUsers[tempUserIndex].links];
      let tempLinkIndex = tempLinks.findIndex(link => link.id == action.payload.linkId)
      tempLinkIndex >= 0 && tempLinks.splice(tempLinkIndex, 1)
      tempUsers[tempUserIndex].links = tempLinks
      return {
        ...state,
        data: tempUsers,
        success,
        messages
      }
    default:
      return state;
  }
};

export default usersReducer;
