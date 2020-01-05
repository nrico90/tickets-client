import React, { Component } from "react";
import { connect } from "react-redux";
import { getTicket } from "../actions/tickets";
// import TicketList from "../components/TicketList"

class EventDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("give me something", id);
    this.props.dispatch(getTicket(id));
  }
  render() {
    return (
      <div>
        <h1>EventTickets</h1>

        {!this.props.tickets && <p>We don't have tickets</p>}
        {this.props.tickets && <p>We have tickets</p>}

        {this.props.tickets
          ? this.props.tickets.map(ticket => {
              return (
                <div key={ticket.id}>
                  author={ticket.author}
                  description={ticket.description}
                  price={ticket.price}
                  picture={ticket.picture}
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
    tickets: reduxState.ticket,
    events: reduxState.events
  };
}

export default connect(mapStateToProps)(EventDetail);
