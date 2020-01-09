import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";
import { Link } from "react-router-dom";

class CreateEvent extends Component {
  state = {
    name: "",
    description: "",
    picture: "",
    start: "",
    end: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    console.table(this.state);
    event.preventDefault();
    // const { name, description, picture, start, end } = this.state;
    // const action = createEvent(name, description, picture, start, end);
    // this.props.dispatch(action);
    this.props.createEvent(this.state);
    this.setState({
      name: "",
      description: "",
      picture: "",
      start: "",
      end: ""
    });
  };

  render() {
    if (this.props.jwt === null) {
      return <Link to="/signup">Please sign up to share your rants</Link>;
    }

    console.log(this.state);
    return (
      <div>
        <h2>Create your own Event</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
          />
          <br />

          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description"
          />
          <br />
          <input
            name="picture"
            type="text"
            value={this.state.picture}
            onChange={this.handleChange}
            placeholder="pictureUrl"
          />
          <br />
          <input
            name="start"
            type="text"
            value={this.state.start}
            onChange={this.handleChange}
            placeholder="start event"
          />
          <br />
          <input
            name="end"
            type="text"
            value={this.state.end}
            onChange={this.handleChange}
            placeholder="end event"
          />
          <br />
          <input type="submit" />
        </form>
        <p>
          You need to have an acount to create an event{" "}
          <a href="/signup">sign up </a>, or log in <a href="/login">Log in </a>
        </p>

        <p>
          Go to the list of events <a href="/"> All Events </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    jwt: reduxState.auth
  };
};

const mapDispatchToProps = {
  createEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
