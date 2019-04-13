import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
class CalendarEvent extends Component {

  
    render() {
        
      return (
        <div className='form-container'>
          <h1> {this.props.changeDate(this.props.months, this.props.date)} </h1>
          <form>
            <label>Name</label>
            <div>

            </div>
          </form>        
        </div>
      );
    }
  }

  export default CalendarEvent