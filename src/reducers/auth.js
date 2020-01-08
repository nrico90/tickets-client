import { LOGIN_SUCCESS, USER_LOGOUT } from "../actions/auth";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload);
      return action.payload;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};
