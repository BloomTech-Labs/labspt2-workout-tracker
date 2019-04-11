import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
class CalendarEvent extends Component {
    render() {
        
      return (
        <div className='form-container'>
          <h1> {this.props.changeDate(this.props.months, this.props.date)} </h1>
          <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="text"></input>
        </form>

        <button className='submit'>Submit</button>
        
        </div>
      );
    }
  }

  export default CalendarEvent