import { COMMENTS_FETCHED, COMMENTS_CREATED } from "../actions/coments";

export default (state = [], action) => {
  console.log("reducer", state, "action", action);
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.comments;
    case COMMENTS_CREATED:
      //return state;
      return [...state, action.comment];

    default:
      return state;
  }
};
