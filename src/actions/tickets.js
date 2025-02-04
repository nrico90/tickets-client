import request from "superagent";
const baseUrl = "http://localhost:4000";

export const TICKETS_FETCHED = "TICKETS_FETCHED";
const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  payload: tickets
});

export const getTickets = () => dispatch => {
  request(`${baseUrl}/tickets`)
    .then(response => {
      console.log("response", response);

      const allTickets = response.body;
      dispatch(ticketsFetched(allTickets));
    })
    .catch(console.error);
};

export const TICKET_FETCHED = "TICKET_FETCHED";
const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  payload: ticket
});

export const getTicket = id => dispatch => {
  request(`${baseUrl}/tickets/${id}`)
    .then(response => {
      console.log("response.body", response);
      const ticket = response.body;
      dispatch(ticketFetched(ticket));
    })
    .catch(console.error);
};

export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  payload: ticket
});

export const createTicket = (data, id) => (dispatch, getState) => {
  const token = getState().auth;
  console.log("dame algo", data);

  request
    .post(`${baseUrl}/events/${id}`)
    .set("Authorization", `Bearer ${token}`)
    .send(data)
    .then(response => {
      console.log("response.body", response.body);
      dispatch(ticketCreateSuccess(response.body));
    })
    .catch(console.error);
};

export const TICKET_DETAIL = "TICKET_DETAIL";
const ticketDetailSuccess = ticket => ({
  type: TICKET_DETAIL,
  payload: ticket
});

export const loadTicket = id => dispatch => {
  request(`${baseUrl}/ticket/${id}`)
    .then(res => {
      dispatch(ticketFetched(res.body));
    })
    .catch(console.error);
};
