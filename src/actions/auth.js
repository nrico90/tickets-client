import request from "superagent";
const baseUrl = "http://localhost:4000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const USER_LOGOUT = "USER_LOGOUT";

export const logout = () => ({
  type: USER_LOGOUT
});

export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password);
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      console.log("What do we get?", response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.body.jwt });
    })
    .catch(console.error);
};

export const signup = (email, password) => dispatch => {
  console.log(email, password);
  request
    .post(`${baseUrl}/users`)
    .send({ email, password })
    .then(response => {
      console.log("RESPONSE BODY:", response.body);
    })
    .catch(console.error);
};
