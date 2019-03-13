
import './styles/LandingPage.sass';
import logo from '../images/workout-logo.svg';


import React, { Component } from 'react';
import { connect } from 'react-redux';

class LandingPage extends Component {
  render() {
    return (
      <div className="login">
        <img src={logo} />
        <button className="login-buttons" onClick={this.props.auth.login}>Sign In/Sign Up</button>
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

