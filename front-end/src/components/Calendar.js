// import React, { Component } from "react";
import { connect } from "react-redux";

// import "./styles/Calendar.scss";

// import $ from "jquery";
// import "fullcalendar";
// import moment from "moment";


// import CalendarEvents from './CalendarEvents'


// /*
//  * A simple React component
//  */
// class Calendar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       dateClicked: false
//     }
//   }
  

//   componentDidMount() {

//     let cal = $("#calendar").fullCalendar({
//       events: [
//         // put the array in the `events` property
//         {
//           title: "Arms",
//           start: "2019-04-12T13:30:00",
//           end: "2019-04-12T14:30:00",
//           allDay: false
//         },
//         {
//           title: "Legs",
//           start: "2019-04-12T15:30:00",
//           end: "2019-04-12T16:30:00",
//           allDay: false
//         },
//         {
//           title: "Core",
//           start: "2019-04-12T20:30:00",
//           end: "2019-04-12T21:30:00",
//           allDay: false
//         }
//       ],
//       selectable: true,

//       dayClick: function(info) {
//           // this.setState({dateClicked: true})
//           console.log(this.state)
        
//       },

//       eventClick: function(event){
//            if (event.title === 'Core') {
//              $('#calendar').fullCalendar('removeEvents',event._id)
//             }
//             else {    event.title = "CLICKED!";

//             $('#calendar').fullCalendar('updateEvent', event);
        
//         }
//         },

//       eventLimit: true, // for all non-TimeGrid views

//       eventLimit: 2,

//       header: {
//         left: "prevYear,prev,next,nextYear today",
//         center: "title",
//         right: "month,agendaWeek,agendaDay,list"
//       },

//       aspectRatio: 1.75,
//       height: 1100,

//       editable: true,
//       droppable: true // this allows things to be dropped onto the calendar
//     });
//   }

//   render() {
//     return <div id="calendar" />;
//   }
// }
// export default Calendar;

import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import {clickedDate} from "../actions/actions.js"
import listWeek from "@fullcalendar/list"

import './styles/Calendar.scss'


// import "./styles.css";

// must manually import the stylesheets for each plugin
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

class Calendar extends React.Component {
  calendarComponentRef = React.createRef();


  state = {

    calendarWeekends: true,
    calendarEvents: [
      // initial event data
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
    ]
  };

  handleEventClick = (info) => {
    this.setState({eventClicked:true})
    console.log(this.state.eventClicked)
  };

  handleDateClick = ({date}) => {
    this.props.clickedDate(date)
  };

  render() {
    return (
      <div className="demo-app">
        {/* <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event)
        </div> */}
        <div className="demo-app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
            
              left: "prevYear, prev,next, nextYear today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
            selectable={true}
            editable={true}
            eventLimit={true} // for all non-TimeGrid views
            eventLimit={2}
            aspectRatio={1}
            height={1100}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      calendarWeekends: !this.state.calendarWeekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events,
    dateClicked: state.dateClicked
  };
};

export default connect(
  mapStateToProps, {clickedDate}
)(Calendar);