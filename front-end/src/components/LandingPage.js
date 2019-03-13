
import './styles/LandingPage.sass';
import logo from '../images/workout-logo.svg';


import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <button onClick={this.props.auth.login}>Sign In/Sign Up</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LandingPage);

