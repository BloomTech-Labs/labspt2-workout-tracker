import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProgressView extends Component {
  render() {
    return (
      <div>
        <h1>Progress View</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(ProgressView);
