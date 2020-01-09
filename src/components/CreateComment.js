import React, { Component } from "react";
import { connect } from "react-redux";
import { submitComment } from "../actions/coments";

class CreateComment extends Component {
  state = {
    author: "",
    text: "",
    ticketId: ""
  };

  handleChange = event => {
    // const { value } = event.target;
    // this.setState({ text: value });
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    console.table(this.state);
    event.preventDefault();
    console.log("crearcoment", this.state);

    this.props.submitComment({
      author: this.props.user.name,
      text: this.state.text,
      ticketId: this.props.ticketId,
      userId: this.props.user.id
    });
    this.setState({
      text: ""
    });
  };

  render() {
    console.log("create comment", this.state);
    return (
      <div>
        <h3>Create a new comment</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Text:</label>
          </p>
          <input
            type="text"
            value={this.value}
            onChange={this.handleChange}
            placeholder="comment"
          />
          <br />

          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="comment"
          />
          <br />

          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { submitComment };

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
