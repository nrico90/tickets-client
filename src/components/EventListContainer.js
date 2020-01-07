import React, { Component } from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventList from "./EventList.js";
import { Link } from "react-router-dom";

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
        ____________________________________
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
