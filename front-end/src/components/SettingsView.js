import React, { Component } from 'react';
import './styles/SettingsView.sass';
import SettingsViewForm from './SettingsViewForm.js';

// import { connect } from 'react-redux';
//import logo from '../images/workout-logo.svg';
class SettingsView extends Component {
  render() {
   let lol = document.getElementById('cool')

    return (
      <div className='main'>
        <SettingsViewForm />
      </div>
    );
  }
}

//const mapStateToProps = () => ({});

// export default connect(mapStateToProps)(SettingsView);

export default SettingsView;
