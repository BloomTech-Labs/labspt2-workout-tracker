

import React, { Component } from 'react';

import './styles/SettingsViewForm.sass'

import Checkbox from './Checkbox.jsx'


class SettingsViewForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      oldpass: '',
      newpass: ''
    }
  }

    inputHandler = (event) => {
        let value = event.target.value;
        let property = event.target.dataset.property

        this.setState({
          [property]: value
        })
    
        console.log(value)
    }


    render() {

      return (
        <div className='form-container'>
        <form>
          <label>Email:</label>
          <input onChange={this.inputHandler} type='text' placeholder="email@email.com" value={this.state.email} data-property='email'/>
          <label>Phone:</label>
          <input onChange={this.inputHandler} type='text' placeholder="123-123-1234" value={this.state.phone} data-property='phone' />
          <label className="container">Emails?</label>
          <Checkbox />
          <label className="container">Texts?</label>
          <Checkbox />

          <label>Old Password:</label>
          <input onChange={this.inputHandler} type='text' placeholder="**********" value={this.state.oldpass} data-property='oldpass' />
          <label>New Password:</label>
          <input onChange={this.inputHandler} type='text' placeholder="**********" value={this.state.newpass} data-property='newpass'/>
        </form>
        </div>
      );
    }
  }
  
  //const mapStateToProps = () => ({});
  
  // export default connect(mapStateToProps)(SettingsView);
  
  export default SettingsViewForm;