import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Calendar.scss";

import $ from "jquery";
import "fullcalendar";
import interactionPlugin from '@fullcalendar/interaction';


/*
 * A simple React component
 */
class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let cal = $("#calendar").fullCalendar({
      events: [
        // put the array in the `events` property
        {
          id: 1,
          title: "Arms",
          start: "2019-04-12T24:30:00",
          end: "2019-04-12T01:30:00",
          allDay: false
        },
        {
          id: 2,

          title: "Legs",
          start: "2019-04-12T15:30:00",
          end: "2019-04-12T16:30:00",
          allDay: false
        },
        {
          id: 3,

          title: "Core",
          start: "2019-04-12T20:30:00",
          end: "2019-04-12T21:30:00",
          allDay: false
        }
      ],
      selectable: true,
      plugins: [ interactionPlugin ],
      dayClick: function(date) {
        console.log(date["events"])
       

        $(this).css('background-color', 'red');

      },

      eventClick: function(eO) {
        
        $('#calendar').fullCalendar('removeEvents', eO["id"]);




      },


      eventClick: function(eO) {
        

        console.log(eO["title"])
    



    },



      eventLimit: true, // for all non-TimeGrid views

      eventLimit: 2,

      header: {
        left: "prevYear,prev,next,nextYear today",
        center: "title",
        right: "month,agendaWeek,agendaDay,list"
      },

      aspectRatio: 1.75,
      height: 1000,

      editable: true,
      droppable: true // this allows things to be dropped onto the calendar
    });
  }

  render() {
    return <div id="calendar" />;
  }
}
export default Calendar;
