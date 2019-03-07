import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScheduleView extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.auth.logout}>Logout</button>
        <h1>Schedule View</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(ScheduleView);
