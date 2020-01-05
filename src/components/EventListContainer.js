// import React from "react";
// import { getEvents } from "../actions/events";
// import { connect } from "react-redux";
// import EventList from "./EventList";
// //import CreateTeamFormContainer from "./CreateTeamFormContainer";
// import { Link } from "react-router-dom";

// class EventListContainer extends React.Component {
//   componentDidMount() {
//     this.props.getEvents();
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <EventList events={this.props.events} />
//         {/* {this.props.loggedIn ? (
//           <CreateTeamFormContainer />
//         ) : (
//           <Link to="/login">Please log in to create teams</Link>
//         )} */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log(state); // check what the state is
//   return {
//     events: state.events // check react devtools, if the component has props.teams
//     // loggedIn: state.auth !== null
//   };
// };

// export default connect(mapStateToProps, { getEvents })(EventListContainer);

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
        <EventList events={this.props.events} />
      </div>
    );

    // if (!this.props.events) return "loading";
    // return <EventList events={this.props.events.events} />;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventListContainer);
