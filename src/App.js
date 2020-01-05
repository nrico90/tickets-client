import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import EventListContainer from "./components/EventListContainer";
import LoginForm from "./components/LoginForm";
import Toolbar from "./components/Toolbar";
import CreateEvent from "./components/CreateEvent";
import TicketListContainer from "./components/TicketListContainer";
//import EventDetail from "./components/EventDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" component={EventListContainer} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createEvent" component={CreateEvent} />
          <Route path="/tickets" component={TicketListContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
