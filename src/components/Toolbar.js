import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />

        <Link to="/">Events</Link>
        <br />
        <Link to="/createEvent">Create Events </Link>
        <br />
        <Link to="/tickets">Tickets</Link>
        <br />
        <Link to="/createTicket">Create Tickets</Link>
      </div>
    );
  }
}

export default Toolbar;
