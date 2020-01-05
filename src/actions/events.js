import request from "superagent";

// export const ALL_EVENTS = "ALL_EVENTS";

const baseUrl = "http://localhost:4000";

// function allEvents(payload) {
//   return {
//     type: ALL_EVENTS,
//     payload
//   };
// }

// export const getEvents = offset => (dispatch, getState) => {
//   const state = getState();
//   const { events } = state;

//   request(`${baseUrl}/events`)
//     .query({ offset })
//     .then(response => {
//       const action = allEvents(response.body);

//       dispatch(action);
//     })
//     .catch(console.error);
// };

// export const NEW_EVENT = "NEW_EVENT";

// function newEvent(payload) {
//   return {
//     type: NEW_EVENT,
//     payload
//   };
// }

// export const createEvent = data => (dispatch, getState) => {
//   const state = getState();
//   const { user } = state;

//   request
//     .post(`${baseUrl}/events`)
//     .send(data)
//     .set("Authorization", `Bearer ${user.jwt}`)
//     .then(response => {
//       const action = newEvent(response.body);

//       dispatch(action);
//     })
//     .catch(console.error);
// };

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_FETCHED = "EVENT_FETCHED";
export const EVENT_UPDATE_SUCCESS = "EVENT_UPDATE_SUCCESS";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

const eventFetched = event => ({
  type: EVENT_FETCHED,
  event
});

const eventUpdateSuccess = event => ({
  type: EVENT_UPDATE_SUCCESS,
  event
});

const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
});

const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .set("Authorization", "Bearer " + localStorage.getItem("token"))
    .send(data)
    .then(response => {
      console.log("response?event", response.body);
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return;

  request(`${baseUrl}/events`)
    .then(response => {
      dispatch(eventsFetched(response.body));
      console.log("eventsFetched", response.body);
    })
    .catch(console.error);
};

export const loadEvent = id => (dispatch, getState) => {
  const state = getState().event;
  if (state && state.id === id) return;

  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body));
      console.log("tickets", response.body);
    })
    .catch(console.error);
};

export const updateEvent = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(eventUpdateSuccess(response.body));
    })
    .catch(console.error);
};

export const deleteEvent = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventDeleteSuccess(id));
    })
    .catch(console.error);
};
