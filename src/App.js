import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>TICKETSWAP CLONE</h1>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
      </div>
    </div>
  );
}

export default connect()(App);
