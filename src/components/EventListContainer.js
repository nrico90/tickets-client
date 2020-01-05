import React from "react";
import { loadEvents } from "../actions/events";
import { connect } from "react-redux";
import EventList from "./EventList.js";

class EventListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Ticketswap-Clone</h1>
        <EventList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
