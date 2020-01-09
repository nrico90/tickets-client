import request from "superagent";

const baseUrl = "http://localhost:4000";

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";

const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
});

export const getComments = id => (dispatch, getState) => {
  if (getState().comments) return;
  request(`${baseUrl}/comment/${id}`)
    .then(response => {
      const comment = response.body.comment;
      dispatch(commentsFetched(comment));
    })
    .catch(console.error);
};

export const COMMENTS_CREATED = "COMMENTS_CREATED";

const commentsCreated = comment => ({
  type: COMMENTS_CREATED,
  comment
});

export const submitComment = comment => (dispatch, getState) => {
  const token = getState().auth;
  request
    .post(`${baseUrl}/comment`)
    .set("Authorization", `Bearer ${token}`)
    .send(comment)
    .then(response => {
      console.log("response crear comentario", response);
      dispatch(commentsCreated(response.body));
    })
    .catch(console.error);
};

// export const createEvent = data => (dispatch, getState) => {
//   const token = getState().auth;

//   request
//     .post(`${baseUrl}/events`)
//     .set("Authorization", `Bearer ${token}`)
//     .send(data)
//     .then(response => {
//       dispatch(eventCreateSuccess(response.body));
//     })
//     .catch(console.error);
// };
