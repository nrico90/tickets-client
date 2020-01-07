import React, { Component } from "react";
import { connect } from "react-redux";
import { getTicket } from "../actions/tickets";

import CreateTicket from "./CreateTicket";

class EventDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("give me something", id);
    this.props.dispatch(getTicket(id));
  }
  render() {
    return (
      <div>
        <h1>Create Tickets</h1>
        <CreateTicket />
        <h1>EventTickets</h1>

        {!this.props.tickets && <p>We don't have tickets</p>}
        {this.props.tickets && <p>We have tickets</p>}

        {this.props.tickets
          ? this.props.tickets.map(ticket => {
              return (
                <div key={ticket.id}>
                  <h3>{ticket.author}</h3>
                  <p>{ticket.description}</p>
                  <p>{ticket.price} Euros</p>
                  <img src={ticket.picture} />
                </div>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    tickets: reduxState.ticket
  };
}

export default connect(mapStateToProps)(EventDetail);
