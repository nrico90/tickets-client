import React from "react";
import { Link } from "react-router-dom";

export default function TicketList(props) {
  const { tickets } = props;
  //console.log(props.tickets);

  return (
    <div>
      <h2>Tickets List</h2>
      <div>
        {!tickets
          ? "Loading..."
          : tickets.map(ticket => {
              return (
                <div key={ticket.id}>
                  <p>Author: {ticket.author}</p>
                  <img src={ticket.picture} />
                  <p>Price: {ticket.price}</p>
                  <p>Description: {ticket.description}</p>
                  <Link to={`ticket/${ticket.id}`}>go to ticket</Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}
