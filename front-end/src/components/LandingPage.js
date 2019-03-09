import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/LandingPage.sass';
import logo from '../images/workout-logo.svg';

class LandingPage extends Component {
  render() {
    return (
      <div className='login'>
        <img src={logo} />
        <div className='login-buttons'>
        <a> Sign Up </a>
        <a> Sign In </a>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = () => ({});

// export default connect(mapStateToProps)(LandingPage);

export default LandingPage;
