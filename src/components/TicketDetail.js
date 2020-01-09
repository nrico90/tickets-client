import React from "react";

export default function TicketDetail(props) {
  if (!props.ticket) return "WTFFF";
  console.log("HELL", props.ticket);
  //const { eventName } = props;
  //const { eventName, ticket } = props;

  return (
    <div>
      <div>
        <h1></h1>
        <ul>
          👌
          <br />
          <li>Ticket for event {props.ticket.eventId}</li>
          <li>Author: {props.ticket.author}</li>
          <li>
            <img src={props.ticket.picture} alt="img" />{" "}
          </li>
          <li>Price: {props.ticket.price} euros</li>
          <li>Description: {props.ticket.description}</li>
          <li>Fraud Risk: {props.ticket.risk}%</li>
        </ul>
      </div>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}
