import React, { Component } from "react";
import Home from "./components/Home";
import LoginFormContainer from "./components/LoginFormContainer";
import SignUp from "./components/SignUp";
import EventListContainer from "./components/EventListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <LoginFormContainer />
        <SignUp />
        <EventListContainer />
      </div>
    );
  }
}

export default App;
