import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScheduleView extends Component {
  render() {
    return (
      <div>
        <h1>Schedule View</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(ScheduleView);
