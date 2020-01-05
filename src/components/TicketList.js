import React from "react";

export default function TicketList(props) {
  const { tickets } = props;
  return (
    <div>
      <h2>Tickets List</h2>
      <ul>
        {!tickets
          ? "Loading..."
          : tickets.map(ticket => {
              return (
                <div key={ticket.id}>
                  <p>Author: {ticket.author}</p>
                  <img src={ticket.picture} />
                  <p>Price: {ticket.price}</p>
                  <p>Description: {ticket.description}</p>
                </div>
              );
            })}
      </ul>
    </div>
  );
}
