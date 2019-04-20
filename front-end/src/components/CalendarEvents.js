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
                start: '2019-11-21T10:15:00',
                end: '2019-11-21T10:30:00',
                allDay: false,
                exercises: ['A', 'B']
              },
              {
                id: 2,
                title  : 'Legs',
                start: '2019-11-21T11:15:00',
                end: '2019-11-21T11:30:00',
                allDay: false,
                exercises: ['C', 'D', 'E', 'F', 'G']

              },
              {
                id: 4,
                title  : 'Core',
                start: '2019-03-12T04:30:00',
                end: '2019-03-12T04:30:00',
                allDay: false,
                exercises: ['H']


              },
              {
                id: 3,
                title  : 'Cardio',
                start: '2019-03-13T09:30:00',
                end: '2019-03-13T09:30:00',
                allDay: false,
                exercises: ['Bicept Curls', 'Tricept Pulldowns']

              },
              {
                id: 5,
                title  : 'Shoulders',
                start: '2019-01-01T09:30:00',
                end: '2019-01-01T010:30:00',
                allDay: false,
                exercises: ['Lifts (2 sets) 10 reps','Extensions']

              },
              {
                id: 6,
                title  : 'Chest',
                start: '2019-01-01T10:45:00',
                end: '2019-01-01T11:45:00',
                allDay: false,
                exercises: ['Bicept Curls', 'Tricept Pulldowns']

              },
              {
                id: 7,
                title  : 'Back',
                start: '2019-01-03T09:30:00',
                end: '2019-01-03T09:30:00',
                allDay: false,
                exercises: ['Bicept Curls', 'Tricept Pulldowns']

              },
              {
                id: 8,
                title  : 'Abs',
                start: '2019-01-04T09:30:00',
                end: '2019-01-04T09:30:00',
                allDay: false,
                exercises: ['Sweats', 'Headaches', 'Face Plants']

              }]
              
        
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
            {Object.entries(byDate).map((event,index) => {

                return <CalendarEvent scheduleDay={event["0"]} eventGroup={event["1"]} key={event["0"]+index} />
            })}
        </div>
      );
    }
  }

  export default CalendarEvents