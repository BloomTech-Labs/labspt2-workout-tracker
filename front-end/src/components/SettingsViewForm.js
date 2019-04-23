import React, { Component } from "react";
import { updateUser } from "../actions/actions";
import { connect } from "react-redux";

import "./styles/SettingsViewForm.sass";

import Checkbox from "./Checkbox.jsx";

class SettingsViewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      newpass: "",
      userinfo: []
    };
  }

  inputHandler = event => {
    let value = event.target.value;
    let property = event.target.dataset.property;

    this.setState({
      [property]: value
    });

    console.log(value);
  };

  submitHandlerEmail = e => {
    e.preventDefault();
    const userUpdates = {
      email: this.state.email
    };
    this.props.updateUser(userUpdates);
  };

  submitHandlerUsername = e => {
    e.preventDefault();
    const userUpdates = {
      username: this.state.username
    };
    this.props.updateUser(userUpdates);
  };

  submitHandlerPassword = e => {
    e.preventDefault();
    const userUpdates = {
      password: this.state.password
    };
    this.props.updateUser(userUpdates);
  };

  render() {
    return (
      <div className="form-container">
        <form>
          <label>Update Email:</label>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="Enter new email"
            value={this.state.email}
            data-property="email"
          />
          <button type="text" onClick={this.submitHandlerEmail}>
            Save
          </button>
          <label>Update Username:</label>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="Enter new username"
            value={this.state.username}
            data-property="username"
          />
          <button type="text" onClick={this.submitHandlerUsername}>
            Save
          </button>
          <label className="container">Emails?</label>
          <Checkbox />
          <label className="container">Texts?</label>
          <Checkbox />
          <label>Update Password:</label>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="Enter new password"
            value={this.state.newpass}
            data-property="newpass"
          />
          <button type="text" onClick={this.submitHandlerPassword}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { updateUser }
)(SettingsViewForm);
