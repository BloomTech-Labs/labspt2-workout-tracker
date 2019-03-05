import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(LandingPage);
