
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/Calendar.scss'

import $ from 'jquery';
import 'fullcalendar';
  
  /*
   * A simple React component
   */
  class Calendar extends React.Component {
    render() {
      return <div id="calendar"></div>;
    }
    componentDidMount() {

      let cal = $('#calendar').fullCalendar({

        events: [ // put the array in the `events` property
        {
          id: 1,
          title  : 'Arms',
          start: '2019-03-09T13:30:00',
          end: '2019-03-09T14:30:00',
        },
        {
          id: 2,
          title  : 'Legs',
          start: '2019-03-12T15:30:00',
          end: '2019-03-12T16:30:00',
        },
        {
          id: 3,
          title  : 'Core',
          start: '2019-03-27T20:30:00',
          end: '2019-03-27T21:30:00',

        }
      ],



              header: {
                  left: 'prevYear,prev,next,nextYear today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay,list'
              },
              
              aspectRatio: 1.75,
              height: 1100,

              editable: true,
              droppable: true, // this allows things to be dropped onto the calendar
  
      })

    }
    
  }
  export default Calendar


  