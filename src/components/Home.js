import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../api";

class Home extends Component {
  state = {
    text: ""
  };
  reset = () => {
    this.setState({ text: "" });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await api("/event", {
        method: "POST",
        body: { name: this.state.text },
        jwt: this.props.jwt
      });

      this.reset();
      console.log("response test:", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  onClick = async eventId => {
    console.log("eventId test:", eventId);
    try {
      const response = await api("/join", {
        method: "PUT",
        body: { event: eventId },
        jwt: this.props.jwt
      });
      this.props.history.push(`/event/${eventId}`);
      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    // const { events } = this.props;
    // const list = events.map(event => (
    //   <div key={event.id}>
    //     {" "}
    //     {event.name}
    //     <Link key={room.id} to={`/game-instruction`} children={GameInstruction}>
    //       <button onClick={room.id}>Join Game</button>
    //     </Link>{" "}
    //   </div>
    // ));
    if (!this.props.jwt) {
      return (
        <div className="homy">
          <Link to="/signup">
            <h2>Please Sign Up to enter the Game Lobby</h2>
          </Link>
          <p>or</p>
          <Link to="/login">
            <h3>Login if you already have an account</h3>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h2>Join one of the gamerooms below or create a new one!</h2>
        <h2>Have Fun!</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Create a new room</button>
        </form>
        {/* <h2>Room List</h2>
        <div>{list}</div> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("redux:", reduxState);
  return {
    jwt: reduxState.login.jwt
  };
};

export default connect(mapStateToProps)(Home);
