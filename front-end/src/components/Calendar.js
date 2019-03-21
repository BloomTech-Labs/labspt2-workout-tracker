
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
          title  : 'Arms',
          start  : '2019-02-01'
        },
        {
          title  : 'Legs',
          start  : '2019-03-05',
          end    : '2019-03-07'
        },
        {
          title  : 'Core',
          start  : '2019-01-09T12:30:00',
        }
      ],

              header: {
                  left: 'prevYear,prev,next,nextYear today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay,list'
              },
              
              aspectRatio: 1.4,
              
              editable: true,
              droppable: true, // this allows things to be dropped onto the calendar
              drop: function() {
                  // is the "remove after drop" checkbox checked?
                  if ($('#drop-remove').is(':checked')) {
                      // if so, remove the element from the "Draggable Events" list
                      $(this).remove();
                  }
              }
      })

    }
    
  }
  export default Calendar


  