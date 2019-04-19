import React, { Component } from 'react';
import './styles/CalendarEvent.sass'
import Collapsible from 'react-collapsible';
import Checkbox from './Checkbox.jsx'
import EventGroup from './EventGroup.js'
import moment from "moment";

class CalendarEvent extends Component {

  

  
  
    render() {
      let exercisePool = new Object()
     
      this.props.eventGroup.map(obj => {
        exercisePool[obj.title] = []
      })

      for (let property in exercisePool) {
        exercisePool[property] = this.props.eventGroup.filter( event => {return event.title === property})
      }


      console.log(exercisePool)


      return (

        <div className='form-container' className='schedule-form'>
        <h1 className="date-heading">{moment(`${this.props.scheduleDay}`).format("dddd, MMMM Do, YYYY")}</h1>
          <form>
            <label className='schedule-title'>{this.props.eventGroup[0]["category"]}</label>
            <div>
            <Collapsible className='schedule-collapse' trigger={'↓'}>
            <div>
              {Object.entries(exercisePool).map(item => {
                console.log(item)
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