import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Events</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/createEvent">Create Event </Link>
        <br />
        <Link to="/tickets">tickets</Link>
      </div>
    );
  }
}

export default Toolbar;
