
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
      $('#calendar').fullCalendar({
              header: {
                  left: 'prev,next today',
                  center: 'title',
                  right: 'month,agendaWeek,agendaDay'
              },
              width: 1000,
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