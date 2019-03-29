import React, { Component } from 'react';
import './styles/SettingsView.sass';

// import { connect } from 'react-redux';
//import logo from '../images/workout-logo.svg';
class SettingsView extends Component {
  render() {
    return (
      <div className="Main">
        <form>
          <label>Email:</label>
          <input placeholder="user@gmail.com" />
        </form>
        <form>
          <label>Phone:</label>
          <input placeholder="123-123-1234" />
        </form>
        <form>
          <label class="container">
            Emails?
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </form>
        <form>
          <label class="container">
            Texts?
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </form>
        <form>
          <label>Old Password:</label>
          <input placeholder="**********" />
        </form>
        <form>
          <label>New Password:</label>
          <input placeholder="**********" />
        </form>
      </div>
    );
  }
}

//const mapStateToProps = () => ({});

// export default connect(mapStateToProps)(SettingsView);

export default SettingsView;
