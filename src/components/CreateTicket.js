import React, { Component } from "react";
import { connect } from "react-redux";
import { createTicket } from "../actions/tickets";

class CreateTicket extends Component {
  state = {
    author: "",
    description: "",
    picture: "",
    price: 0
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    console.table(this.state);
    event.preventDefault();
    this.props.createTicket(this.state);
    this.setState({
      author: "",
      description: "",
      picture: "",
      price: 0
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Create your own Ticket</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="author"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="author"
          />
          <br />
          <br />

          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description"
          />
          <br />
          <br />

          <input
            name="picture"
            type="text"
            value={this.state.picture}
            onChange={this.handleChange}
            placeholder="pictureUrl"
          />
          <br />
          <br />
          <input
            name="price"
            type="text"
            value={this.state.start}
            onChange={this.handleChange}
            placeholder="price"
          />
          <br />
          <input type="submit" />
        </form>
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
  createTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
