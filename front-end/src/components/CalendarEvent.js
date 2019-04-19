import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
import Collapsible from 'react-collapsible';
import Checkbox from './Checkbox.jsx'
import EventGroup from './EventGroup.js'
import moment from "moment";

class CalendarEvent extends Component {

  

  
  
    render() {
      let testgroup = ['head','fingers','knees','toes']
      return (
        <div className='form-container' className='schedule-form'>
        <h1 className="date-heading">{moment(`${this.props.scheduleDay}`).format("dddd, MMMM Do, YYYY")}</h1>
          <form>
            <label className='schedule-title'>{this.props.eventGroup[0]["title"]}</label>
            <div>
            <Collapsible className='schedule-collapse' trigger={'↓'}>
            <div>
              {this.props.eventGroup.map(item => {
                return <EventGroup changeTime={this.props.changeTime} time={this.props.scheduleDay} time={item["start"]}  category={this.props.category} exercises={item["exercises"]} title={item["title"]} />
              })}
            </div>
            </Collapsible>
            </div>
          </form>        
        </div>
      );
    }
  }

  export default CalendarEvent