import { combineReducers } from "redux";
import auth from "./auth";
import event from "./event";
import events from "./events";
import ticket from "./ticket";
import tickets from "./tickets";
import comments from "./comments";

export default combineReducers({
  event,
  events,
  auth,
  ticket,
  tickets,
  comments
});
