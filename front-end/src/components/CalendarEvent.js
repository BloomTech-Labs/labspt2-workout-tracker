import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
import Collapsible from 'react-collapsible';
import Checkbox from './Checkbox.jsx'
import EventGroup from './EventGroup.js'
import moment from "moment";

class CalendarEvent extends Component {

  

  
  
    render() {
      let exercisePool = []
      this.props.eventGroup.map(obj => {exercisePool.push(obj.exercises)})
      let totalExercises = [].concat(...exercisePool);


      return (

        <div className='form-container' className='schedule-form'>
        <h1 className="date-heading">{moment(`${this.props.scheduleDay}`).format("dddd, MMMM Do, YYYY")}</h1>
          <form>
            <label className='schedule-title'>{this.props.eventGroup[0]["category"]}</label>
            <div>
            <Collapsible className='schedule-collapse' trigger={'↓'}>
            <div>
              {totalExercises.map(item => {
                return <EventGroup changeTime={this.props.changeTime} cat={this.props.eventGroup[0]["category"]} time={this.props.eventGroup[0]["start"]} item={item} />
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