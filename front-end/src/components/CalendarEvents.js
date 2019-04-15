import React, { Component } from 'react';
import './styles/CalendarEvents.sass'

import CalendarEvent from './CalendarEvent'

import ScheduleDropDowns from './ScheduleDropDowns'



class CalendarEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [ {
                id: 1,
                title  : 'Curls',
                start: '2019-11-21T10:15:00',
                end: '2019-11-12T10:30:00',
                allDay: false,
                category: 'Arms'
              },
              {
                id: 2,
                title  : 'Run',
                start: '2019-03-12T21:30:00',
                end: '2019-03-12T21:30:00',
                allDay: false,
                category: 'Legs'

              },
              {
                id: 4,
                title  : 'Situps',
                start: '2019-03-12T04:30:00',
                end: '2019-03-12T04:30:00',
                allDay: false,
                category: 'Core'

              },
              {
                id: 3,
                title  : 'Crunches',
                start: '2019-03-12T09:30:00',
                end: '2019-03-12T09:30:00',
                allDay: false,
                category: 'Core'
              },
              {
                id: 5,
                title  : 'Moon-Lifts',
                start: '2019-12-12T23:30:00',
                end: '2019-12-12T23:30:00',
                allDay: false,
                category: 'Entire Body'
              },
              {
                id: 6,
                title  : 'G',
                start: '2019-12-12T23:30:00',
                end: '2019-12-12T23:30:00',
                allDay: false,
                category: 'Entire Body'
              }],
              
              months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        
        }
    }
        
    // changeDate(arr, day) {
    //     let eDate = day;
        
    //   let strMonth = eDate[0]
    //   if (eDate[1] !== '/') {
    //     strMonth = eDate.substring(0,2);
    //   }
    //   for (let i = 0; i<arr.length ; i++) {
    //       if ( Number(strMonth) === i+1) {
    //          eDate = eDate.replace(strMonth, arr[i])
    //       }
    //   }
    //   eDate = eDate.replace ('/', ' ')
    //   console.log(eDate)
    //   return eDate.replace ('/', ', ')
    //   }
      
      changeTime(h) {
          let whole = h.substring(11,16)
          let hour = h.substring(11,16);
          let timecap = ' am'
          if (parseInt(hour)>12 && parseInt(hour) !== 24) {
            timecap = ' pm'
          }
          if (parseInt(hour)>12) {
            hour=hour.replace(hour, parseInt(hour)-12)
            whole = whole.replace(whole.substring(0,2), hour) + timecap
          }
          else {
            hour=hour.replace(hour, parseInt(hour))
            whole = whole.replace(whole.substring(0,2), hour) + timecap
          }
          return whole
      }

    render() {

      let byDate = new Object()
     
      this.state.events.map(event => {
        byDate[event.start.substring(0,10)] = []
      })

      for (let property in byDate) {
        byDate[property] = this.state.events.filter( event => {return event.start.substring(0,10) === property})
      }


      return (
        <div className="events-container">
            {this.state.events.map(event => {
                return "hello"
            })}
        </div>
      );
    }
  }

  export default CalendarEvents







  