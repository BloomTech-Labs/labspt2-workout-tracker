

  import React, { Component } from 'react';
  import './styles/CalendarEvent.sass'
  import Collapsible from 'react-collapsible';
  import Checkbox from './Checkbox.jsx'
  import EventGroup from './EventGroup.js'
  
  class CalendarEvent extends Component {
  
      render() {
        return (
          <div className='form-container' className='schedule-form'>
          <h1>{this.props.scheduleDay}</h1>
            <form>
              <label className='schedule-title'>{this.props.eventGroup[0]["category"]}</label>
              <div>
              <Collapsible className='schedulelaps' trigger={'↓'}>
              <div>
                {this.props.eventGroup.map(item => {
                  return <EventGroup changeTime={this.props.changeTime} key={item["id"]} item={item} />
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
  