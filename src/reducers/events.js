// import { ALL_EVENTS, NEW_EVENT } from "../actions/events";

// export default function(state = [], action = {}) {
//   switch (action.type) {
//     case ALL_EVENTS:
//       return action.payload;
//     case NEW_EVENT:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

import {
  EVENTS_FETCHED,
  EVENT_CREATE_SUCCESS,
  EVENT_DELETE_SUCCESS
} from "../actions/events";

export default (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;

    case EVENT_CREATE_SUCCESS:
      return [action.event, ...state];

    case EVENT_DELETE_SUCCESS:
      return state && state.filter(event => event.id !== action.eventId);

    default:
      return state;
  }
};
