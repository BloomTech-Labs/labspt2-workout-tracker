import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>Sign In Modal</h1>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(SignIn);
