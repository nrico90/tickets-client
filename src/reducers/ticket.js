import { TICKET_FETCHED } from "../actions/tickets";

export default function(state = [], action) {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.payload;
    default:
      return state;
  }
}
