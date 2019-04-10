import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Calendar.scss";

import $ from "jquery";
import "fullcalendar";

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
          title: "Arms",
          start: "2019-04-12T13:30:00",
          end: "2019-04-12T14:30:00",
          allDay: false
        },
        {
          title: "Legs",
          start: "2019-04-12T15:30:00",
          end: "2019-04-12T16:30:00",
          allDay: false
        },
        {
          title: "Core",
          start: "2019-04-12T20:30:00",
          end: "2019-04-12T21:30:00",
          allDay: false
        }
      ],

      eventLimit: true, // for all non-TimeGrid views

      eventLimit: 2,

      header: {
        left: "prevYear,prev,next,nextYear today",
        center: "title",
        right: "month,agendaWeek,agendaDay,list"
      },

      aspectRatio: 1.75,
      height: 1100,

      editable: true,
      droppable: true // this allows things to be dropped onto the calendar
    });
  }

  render() {
    return <div id="calendar" />;
  }
}
export default Calendar;
