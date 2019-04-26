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
      userinfo: [],
      buttonText1: 'Save',
      buttonText2: 'Save',
      buttonText3: 'Save'
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
    this.setState({
      buttonText1: "Saved"
    })
  };

  submitHandlerUsername = e => {
    e.preventDefault();
    const userUpdates = {
      username: this.state.username
    };
    this.props.updateUser(userUpdates);
    this.setState({
      buttonText2: "Saved"
    })
  };

  submitHandlerPassword = e => {
    e.preventDefault();
    const userUpdates = {
      password: this.state.password
    };
    this.props.updateUser(userUpdates);
    this.setState({
      buttonText3: "Saved"
    })
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
            data-property="email"
          />
          <button 
            type="text" 
            onClick={this.submitHandlerEmail}
            style={{
              backgroundColor:
                this.state.buttonText1 === "Saved" ? "lightgreen" : "lightgrey"
            }}>>
            {this.state.buttonText1}
          </button>
          <label>Update Username:</label>
          <input
            onChange={this.inputHandler}
            type="text"
            placeholder="Enter new username"
            data-property="username"
          />
          <button 
            type="text" 
            onClick={this.submitHandlerUsername}
            style={{
              backgroundColor:
                this.state.buttonText2 === "Saved" ? "lightgreen" : "lightgrey"
            }}>
          {this.state.buttonText2}
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
            data-property="newpass"
          />
          <button 
            type="text" 
            onClick={this.submitHandlerPassword}
            style={{
              backgroundColor:
                this.state.buttonText3 === "Saved" ? "lightgreen" : "lightgrey"
            }}>>
          {this.state.buttonText3}
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
