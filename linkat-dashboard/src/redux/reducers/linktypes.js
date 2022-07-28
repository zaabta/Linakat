import {
  ADD_LINKTYPE,
  EDIT_LINKICON,
  EDIT_LINKTYPE,
  GET_LINKTYPES
} from "../constants";


const initialState = {
  data: [],
  success: false,
  messages: ''
};

const linktypesReducer = (state = initialState, action) => {
  const { success, messages, data, type } = action?.payload || {};

  switch (action.type) {
    case GET_LINKTYPES:
      console.log("in GET_LINKTYPES: success, messages, data: ", success, messages, data)
      return {
        ...state,
        data: [
          ...data
        ],
        success: true,
        messages
      };
    case ADD_LINKTYPE:
      const tempData = [...state.data]
      tempData.push(data)
      return {
        ...state,
        data: tempData,
        success,
        messages
      }
    case EDIT_LINKTYPE:
      const tempDataType = [...state.data]
      const index = tempDataType.findIndex(type => type.id == data.id)
      tempDataType[index].type = data.type;
      return {
        ...state,
        data: tempDataType,
        success,
        messages
      }
    case EDIT_LINKICON:
      console.log("data: ", data);
      const tempArray = [...state.data]
      const tempIndex = tempArray.findIndex(linktype => linktype.id == data.id)
      tempArray[tempIndex].icon = data.icon;
      // tempArray.splice(tempIndex, 1, data)
      return {
        ...state,
        data: tempArray,
        success,
        messages
      }
    default:
      return state;
  }
};

export default linktypesReducer;
