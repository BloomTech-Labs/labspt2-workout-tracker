

import React, { Component } from 'react';

import './styles/SettingsViewForm.sass'


class SettingsViewForm extends Component {
    render() {
  
      return (
        <div className='form-container'>
        <form>
          <label>Email:</label>
          <input type='text' placeholder="email@email.com" n/>
          <label>Phone:</label>
          <input type='text' placeholder="123-123-1234" />
          <label class="container">Emails?</label>
          <input type="checkbox" />
          <span class="checkmark" />
          <label class="container">Texts?</label>
          <input type="checkbox" />
          <span class="checkmark" />
          <label>Old Password:</label>
          <input type='text' placeholder="**********" />
          <label>New Password:</label>
          <input type='text' placeholder="**********" />
        </form>
        </div>
      );
    }
  }
  
  //const mapStateToProps = () => ({});
  
  // export default connect(mapStateToProps)(SettingsView);
  
  export default SettingsViewForm;