import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import EventListContainer from "./components/EventListContainer";
import LoginForm from "./components/LoginForm";
import Toolbar from "./components/Toolbar";
import CreateEvent from "./components/CreateEvent";
import TicketListContainer from "./components/TicketListContainer";
import EventDetail from "./components/EventDetail";
import CreateTicket from "./components/CreateTicket";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={EventListContainer} />
          <Route path="/createEvent" component={CreateEvent} />
          <Route path="/createTicket" component={CreateTicket} />
          <Route path="/tickets" component={TicketListContainer} />
          <Route path="/events/:id/ticket/" component={EventDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
