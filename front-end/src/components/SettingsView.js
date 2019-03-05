import React, { Component } from 'react';
import { connect } from 'react-redux';

class SettingsView extends Component {
  render() {
    return (
      <div>
        <h1>Settings View</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SettingsView);
