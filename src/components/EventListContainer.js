import React, { Component } from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventList from "./EventList.js";
import { Link } from "react-router-dom";
import CreateEvent from "./CreateEvent";

class EventListContainer extends Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Ticketswap-Clone</h1>
        <h3>Here you can see a list of Events</h3>
        <Link to={`/ticket/:id`}>
          <EventList events={this.props.events} />
        </Link>
        {this.props.loggedIn ? (
          <CreateEvent />
        ) : (
          <Link to="/login">Please log in to create teams</Link>
        )}
        ____________________________________
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    events: state.events,
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
