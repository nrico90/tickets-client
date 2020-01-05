import React, { Component } from "react";
import { connect } from "react-redux";
import { createEvent } from "../actions/events";

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

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     console.log(this.state);
  //     const { name, description, picture, start, end } = this.state;
  //     const action = createEvent(name, description, picture, start, end);
  //     this.props.dispatch(action);
  //     this.setState({
  //       name: "",
  //       description: "",
  //       picture: "",
  //       start: "",
  //       end: ""
  //     });
  //   };

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
    // if (this.props.jwt === null) {
    //   return <Link to="/signup">Please sign up to share your rants</Link>;
    // }

    console.log(this.state);
    return (
      <div>
        <h1>Create your own Event</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
          />

          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description"
          />
          <input
            name="picture"
            type="text"
            value={this.state.picture}
            onChange={this.handleChange}
            placeholder="pictureUrl"
          />
          <input
            name="start"
            type="text"
            value={this.state.start}
            onChange={this.handleChange}
            placeholder="start event"
          />
          <input
            name="end"
            type="text"
            value={this.state.end}
            onChange={this.handleChange}
            placeholder="end event"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    jwt: reduxState.auth.jwt
  };
};

const mapDispatchToProps = {
  createEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
