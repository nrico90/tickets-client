import React from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
  if (!props.events) return "Loading";

  return (
    <div>
      {props.events.map(event => {
        return (
          <div key={event.id}>
            <Link to={`/events/${event.id}/`}>
              <h1>{event.name}</h1>
              <img src={event.picture} alt="img" />
              <p>{event.description}</p>
            </Link>
            <p>
              Start:{event.start} /// End:{event.end}{" "}
            </p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}
