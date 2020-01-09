import React, { Component } from "react";
import { connect } from "react-redux";
import CommentList from "./CommentList";
import { getComments } from "../actions/coments";

class CommentListContainer extends Component {
  componentDidMount() {
    this.props.getComments(this.props.ticketId);
  }

  render() {
    return <CommentList comments={this.props.comments} />;
  }
}

const mapDispatchToProps = { getComments };

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
