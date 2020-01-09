import React, { Component } from "react";
import { loadDetail, loadTicket } from "../actions/tickets";
//import { loadComments } from "../actions/coments";
//import { Link } from "react-router-dom";
import TicketDetail from "./TicketDetail";
import { connect } from "react-redux";
import CommentListContainer from "./CommentListContainer";
import CreateComment from "./CreateComment";

class TicketDetailContainer extends Component {
  componentDidMount() {
    this.props.loadTicket(this.props.match.params.id);
    console.log("loadTicket", this.props.ticket);
  }

  render() {
    console.log("props pleaseeee", this.props.ticket);

    return (
      <div>
        <TicketDetail
          ticket={this.props.ticket}
          user={this.props.user}
          event={this.props.event}
          eventName={this.event}
        />
        <CommentListContainer />

        <CreateComment />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps", state.ticket);
  return {
    ticket: state.ticket
    //event: state.event,
    //user: state.user
  };
};

export default connect(mapStateToProps, { loadTicket })(TicketDetailContainer);
