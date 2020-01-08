import React from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    //const action = login(this.state.email, this.state.password);
    // const actionId = this.props
    //this.props.dispatch(action);
    // this.props.dispatch(actionId);
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
        <p>
          If you don't have an account, please <a href="/signup">sign up </a>
          first
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    token: state.auth
  };
}
export default connect(mapStateToProps, { login })(LoginPage);
