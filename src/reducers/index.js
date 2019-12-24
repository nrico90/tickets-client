import { combineReducers } from "redux";
import signUpReducer from "./signUp";
import loginReducer from "./login";

export default combineReducers({
  // your reducers will go here
  signUp: signUpReducer,
  login: loginReducer
});
