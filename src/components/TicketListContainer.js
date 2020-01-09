import React, { Component } from "react";
import { getTickets } from "../actions/tickets";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TicketList from "./TicketList";

class TicketListContainer extends Component {
  componentDidMount() {
    const { eventId } = this.props.match.params;
    this.props.getTickets(eventId);
  }

  render() {
    return (
      <div>
        <Link to={`/ticket/:id/`}>
          <TicketList tickets={this.props.tickets} />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = { getTickets };

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
