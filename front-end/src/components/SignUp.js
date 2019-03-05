import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign Up Modal</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignUp);
