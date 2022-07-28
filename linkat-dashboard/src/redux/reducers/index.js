import { combineReducers } from "redux";
import notificationsReducer from "./notifications";
import usersReducer from "./users";
import authReducer from "./auth";
import adminsReducer from "./admins";
import linktypesReducer from "./linktypes";

const reducers = combineReducers({
  auth: authReducer,
  notification: notificationsReducer,
  users: usersReducer,
  admins: adminsReducer,
  linktypes: linktypesReducer,
});

export default reducers;
