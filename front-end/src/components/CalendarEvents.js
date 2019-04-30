import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/CalendarEvents.sass";

import CalendarEvent from "./CalendarEvent";

class CalendarEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    let byDate = new Object();

    this.props.events.map(event => {
      byDate[event.start.substring(0, 10)] = [];
    });

    for (let property in byDate) {
      byDate[property] = this.props.events.filter(event => {
        return event.start.substring(0, 10) === property;
      });
    }

    return (
      <div className="component-container events-container">
        {Object.entries(byDate).map((event, index) => {
          return (
            <CalendarEvent
              scheduleDay={event["0"]}
              eventGroup={event["1"]}
              key={event["0"] + index}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    error: state.error,
    events: state.events
  };
};

export default connect(mapStateToProps)(CalendarEvents);
