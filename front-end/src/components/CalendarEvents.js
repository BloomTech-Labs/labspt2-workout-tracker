import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/CalendarEvents.sass";

import CalendarEvent from "./CalendarEvent";

import {objCreate} from '../actions/actions.js'

class CalendarEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  closeEvent = (obj,eventDate) => {
    console.log(this.props.byDate)

    console.log(obj)
    delete obj[eventDate]
    console.log(obj)
    this.props.objCreate(obj)

    this.forceUpdate()

}

eventObjectCreated = () => {

  let byDate = new Object();

  this.props.events.map(event => {
    byDate[event.start.substring(0, 10)] = [];
  });

  for (let property in byDate) {
    byDate[property] = this.props.events.filter(event => {
      return event.start.substring(0, 10) === property;
    });
  }

  this.props.objCreate(byDate)

}


componentDidMount() {

  this.eventObjectCreated()

}




  render() {
  


    return (

      
      <div className="component-container events-container">
      
        {Object.entries(this.props.byDate).map((event, index) => {

          return (
            <CalendarEvent
              fullOb={this.props.byDate}
              closeEvent={this.closeEvent}
              Update={this.Update}
              scheduleday={event["0"]}
              eventGroup={event["1"]}
              key={event["0"] + index}
              event={event}
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
    events: state.events,
    byDate: state.byDate
  };
};

export default connect(mapStateToProps, {objCreate})(CalendarEvents);
