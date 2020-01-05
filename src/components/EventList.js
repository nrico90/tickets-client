// import React from "react";
// import { Link } from "react-router-dom";

// export default function EventList(props) {
//   const { events } = this.props;
//   console.log(events);

//   //   if (!props.events) return "Loading";
//   //   console.log("que es esto", props.events);

//   if (!events) {
//     return <p>Loading events...</p>;
//   }
//   return events.map(event => (
//     <li key={events}>
//       <Link to={`events/${events}`} className="event-link">
//         {event.name}
//         <br />
//       </Link>
//       Starting on: {event.start}
//     </li>
//   ));
// }

// return (
//   <div>
//     {this.props.events.map(event => {
//       return (
//         <li key={events}>
//           <Link to={`/events/${events}`}>{event.name}</Link>
//         </li>
//       );
//     })}
//   </div>
// );

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// //import CreateEventFormContainer from "./CreateEventFormContainer";
// //import Login from "./Login";

// export default class EventList extends Component {
//   render() {
//     console.log(this.state);
//     console.log(this.props);

//     return (
//       <div>
//         <ul>
//           {this.props.events &&
//             this.props.events.map(event => (
//               <li key={event.id}>
//                 <Link to={`/events/${event.id}`}>
//                   {" "}
//                   <p>{event.name}</p> <p>{event.description} </p>{" "}
//                   <p>
//                     <img src={event.picture} alt="img" />
//                   </p>
//                 </Link>
//               </li>
//             ))}
//         </ul>
//         {/* <CreateEventFormContainer />
//         {}
//         <Login /> */}
//         {!this.props.events && <li>Loading events...</li>}
//       </div>
//     );
//   }
// }

import React from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
  if (!props.events) return "Loading";

  return (
    <div>
      {props.events.map(event => {
        return (
          <div key={event.id}>
            <Link to={`/events/${event.id}`}>
              name={event.name}
              description={event.description}
              picture={event.picture}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
