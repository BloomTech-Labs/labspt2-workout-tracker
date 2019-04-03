import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth from "./Auth";

class Callback extends Component {
  async componentDidMount() {
    await auth.handleAuthentication();
    this.props.history.push("/schedule");
  }

  render() {
    return <p>Loading profile...</p>;
  }
}

export default withRouter(Callback);
