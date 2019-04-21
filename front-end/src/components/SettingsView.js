import React, { Component } from 'react';
import './styles/SettingsView.sass';
import SettingsViewForm from './SettingsViewForm.js';

// import { connect } from 'react-redux';
//import logo from '../images/workout-logo.svg';
class SettingsView extends Component {
  render() {

    return (
      <div className='main settingsView'>
        <SettingsViewForm />
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
