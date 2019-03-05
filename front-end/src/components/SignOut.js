import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignOut extends Component {
  render() {
    return (
      <div>
        <h1>Sign Out Modal</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignOut);
