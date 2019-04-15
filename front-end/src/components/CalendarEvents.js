import React, { Component } from 'react';
import './styles/CalendarEvents.sass'

import CalendarEvent from './CalendarEvent'

class CalendarEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [ {
                id: 1,
                title  : 'Arms',
                start: '2019-11-21T13:30:00',
                end: '2019-03-12T14:30:00',
                allDay: false,
              },
              {
                id: 2,
                title  : 'Legs',
                start: '2019-03-12T15:30:00',
                end: '2019-03-12T16:30:00',
                allDay: false,
      
              },
              {
                id: 3,
                title  : 'Core',
                start: '2019-03-12T20:30:00',
                end: '2019-03-12T21:30:00',
                allDay: false,
              }],
              months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        
        }
    }
        
    changeDate(arr, day) {
        let eDate = day;
      let strMonth = eDate[0]
      if (eDate[1] !== '/') {
        strMonth = eDate.substring(0,2);
      }
      for (let i = 0; i<arr.length ; i++) {
          if ( Number(strMonth) === i+1) {
             eDate = eDate.replace(strMonth, arr[i])
          }
      }
      eDate = eDate.replace ('/', ' ')
      return eDate.replace ('/', ', ')
      }
    render() {

      return (
        <div className="events-container">
            {this.state.events.map(event => {
            console.log(event.start)
                return <CalendarEvent months={this.state.months} changeDate={this.changeDate} key={event.id} date={new Date(event.start.substr(0,10)).toLocaleDateString()} title={event.title} />
            })}
        </div>
      );
    }
  }

  export default CalendarEvents