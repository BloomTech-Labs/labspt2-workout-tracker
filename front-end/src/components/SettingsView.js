import React, { Component } from 'react';
import './styles/SettingsView.sass';
import SettingsViewForm from './SettingsViewForm.js';
import StripeBtn from './StripeBtn';

// import { connect } from 'react-redux';
//import logo from '../images/workout-logo.svg';
class SettingsView extends Component {
  render() {
    return (
      <div className="main settingsView">
        <SettingsViewForm />
        <div className="stripe-checkout-container">
          <h1>Stripe Checkout</h1>
          <StripeBtn />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

// export default connect(
//   mapStateToProps,
//   { getUsers }
// )(SettingsView);

export default SettingsView;
