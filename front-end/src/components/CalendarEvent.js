import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
class CalendarEvent extends Component {
    render() {
        
      return (
        <div className='event-container'>
         <h1> {this.props.changeDate(this.props.months, this.props.date)} </h1>
         <p>{this.props.title}</p>
        </div>
      );
    }
  }

  export default CalendarEvent