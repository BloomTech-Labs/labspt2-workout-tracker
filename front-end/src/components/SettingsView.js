import React, { Component } from 'react';
import './styles/SettingsView.sass';
import logo from './logo.svg';

// import { connect } from 'react-redux';
import logo from '../images/workout-logo.svg';
class SettingsView extends Component {
  render() {
    return (
      <div className="Main">
        <img src={logo} />
        <a>Home</a>
        <p> ⬣ </p>
        <h1>Settings</h1>

      </div>
    );
  }
}

const mapStateToProps = () => ({});

// export default connect(mapStateToProps)(SettingsView);

export default SettingsView;
