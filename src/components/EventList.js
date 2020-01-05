import React from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
  if (!props.events) return "Loading";

  return (
    <div>
      {props.events.map(event => {
        return (
          <div key={event.id}>
            <Link to={`/events/${event.id}/ticket`}>
              <h1>{event.name}</h1>
              description={event.description}
              <img src={event.picture} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
