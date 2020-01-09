import {
  TICKETS_FETCHED,
  TICKET_CREATE_SUCCESS,
  TICKET_DETAIL
} from "../actions/tickets";

export default (state = [], action) => {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.payload;
    case TICKET_CREATE_SUCCESS:
      return [action.ticket, ...state];
    case TICKET_DETAIL:
      return action.payload;
    //return [...state, action.ticket];
    default:
      return state;
  }
};
