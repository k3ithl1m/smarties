import { combineReducers } from "redux";
import userInfo from "./UserInformationReducer";
import auth from "./AuthNRegistrationReducer";

export default combineReducers({
  userInfo,
  auth
});
