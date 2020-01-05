// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// function jwt(payload) {
//   return {
//     type: LOGIN_SUCCESS,
//     payload
//   };
// }

// export const login = (email, password) => dispatch => {
//   request
//     .post(`${baseUrl}/logins`)
//     .send({ email, password })
//     .then(response => {
//       console.log("this fuck works", response.body);
//       dispatch(jwt(response.body.jwt));

//       // const action = jwt(response.body.payload);
//       // dispatch(action);
//       console.log("this fuck works", response.body.jwt);
//     })
//     .catch(console.error);
// };

import request from "superagent";
const baseUrl = "http://localhost:4000";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (email, password) => (dispatch, getState) => {
  console.log(email, password);
  request
    .post(`${baseUrl}/logins`)
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
    .post(`${baseUrl}/user`)
    .send({ email, password })
    .then(response => {
      console.log("RESPONSE BODY:", response.body);
    })
    .catch(console.error);
};
