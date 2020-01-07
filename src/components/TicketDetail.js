import React from "react";
import { Link } from "react-router-dom";

export default function TicketDetail(props) {
  if (!props.tickets) return "Loading";

  return (
    <div>
      {props.tickets.map(ticket => {
        return (
          <div key={ticket.id}>
            <Link to={`/ticket/:id`}>
              <h1>{ticket.author}</h1>
              <p>{ticket.description}</p>
              <img src={ticket.picture} />
              <p>{ticket.price} Euros</p>
              <p>Risk = 5%</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
