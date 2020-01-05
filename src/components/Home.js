import React, { Component } from "react";

export default class Home extends Component {
  state = {
    text: ""
  };
  reset = () => {
    this.setState({ text: "" });
  };

  render() {
    return <h1>Welcome to TicketSwap</h1>;
  }
}
