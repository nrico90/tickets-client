import request from "superagent";
const baseUrl = "http://localhost:4000";

export const TICKETS_FETCHED = "TICKETS_FETCHED";
export const TICKET_FETCHED = "TICKET_FETCHED";
export const TICKET_UPDATE_SUCCESS = "TICKET_UPDATE_SUCCESS";
export const TICKET_DELETE_SUCCESS = "TICKET_DELETE_SUCCESS";
export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const TICKET_DETAIL_FETCHED = "TICKED_DETAIL_FETCHED";

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
});

export const loadTickets = id => dispatch => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(ticketsFetched(response.body));
    })
    .catch(console.error);
};

const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  ticket
});
export const loadTicket = id => (dispatch, getState) => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

const ticketDetailFetched = ticket => ({
  type: TICKET_DETAIL_FETCHED,
  ticket
});
export const loadTicketDetails = ticketId => dispatch => {
  request(`${baseUrl}/ticketdetails/${ticketId}`)
    .then(response => {
      dispatch(ticketDetailFetched(response.body));
    })
    .catch(console.error);
};

const ticketUpdateSuccess = ticket => ({
  type: TICKET_UPDATE_SUCCESS,
  ticket
});
export const updateTicket = (id, data) => dispatch => {
  request
    .patch(`${baseUrl}/events/${id}`)
    .send(data)
    .then(response => {
      dispatch(ticketUpdateSuccess(response.body));
    })
    .catch(console.error);
};

const ticketDeleteSuccess = ticketId => ({
  type: TICKET_DELETE_SUCCESS,
  ticketId
});

export const deleteTicket = id => dispatch => {
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(ticketDeleteSuccess(id));
    })
    .catch(console.error);
};

const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  ticket
});

export const createTicket = (eventId, ticket) => dispatch => {
  request
    .post(`${baseUrl}/events/${eventId}`)
    .send(ticket)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body));
    })
    .catch(console.error);
};
