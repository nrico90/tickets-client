import React from "react";
import { Link } from "react-router-dom";

export default function TicketList(props) {
  const { tickets } = props;
  //console.log(props.tickets);

  return (
    <div>
      <h2>Tickets List</h2>
      <h3>Here you can see a list of tickets.</h3>
      <div>
        {!tickets
          ? "Loading..."
          : tickets.map(ticket => {
              return (
                <div key={ticket.id}>
                  <Link to={`ticket/${ticket.id}`}>
                    <p>Author: {ticket.author}</p>
                    <img src={ticket.picture} />
                    <p>Price: {ticket.price} Euros</p>
                    <p>Description: {ticket.description}</p>
                    <p>Ticket Risk= 5%</p>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}
