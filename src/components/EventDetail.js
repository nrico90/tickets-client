import React, { Component } from "react";
import { connect } from "react-redux";
import { getTicket, getTickets } from "../actions/tickets";
import { Link } from "react-router-dom";

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
        <h1>Tickets of the event</h1>
        <p>Info</p>

        {/* {!this.props.tickets && <p>We do not have tickets</p>}
        {this.props.tickets && <p>We have tickets</p>} */}

        {this.props.tickets
          ? this.props.tickets.map(ticket => {
              return (
                <Link to={`/ticket/${ticket.id}/`}>
                  <div key={ticket.id}>
                    <h3>{ticket.author}</h3>
                    <p>{ticket.description}</p>
                    <p>{ticket.price} Euros</p>
                    <img src={ticket.picture} alt="img" />
                  </div>
                </Link>
              );
            })
          : "Loading..."}
        <div>
          <CreateTicket />
        </div>
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
