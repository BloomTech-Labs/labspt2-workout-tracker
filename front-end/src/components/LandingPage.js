import './styles/LandingPage.sass';
import logo from '../images/workout-logo.svg';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coverflow from 'react-coverflow';
import { exerciseDefaults } from '../defaults/index';
import Card from './CarouselCard';

class LandingPage extends Component {
  render() {
    return (
      <div className="login">
        <img src={logo} alt="logo" />
        <button className="login-buttons" onClick={this.props.auth.login}>
          Sign In/Sign Up
        </button>
        <Coverflow
          width={750}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          {exerciseDefaults.slice(0, 6).map(i => {
            return <Card exercise={i} key={i} />;
          })}
        </Coverflow>
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
