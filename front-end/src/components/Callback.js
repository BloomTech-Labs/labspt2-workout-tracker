import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../Auth';

export default class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }

  render() {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
