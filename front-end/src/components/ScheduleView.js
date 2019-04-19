import auth from "../Auth";
import React, { Component } from "react";
import { connect } from "react-redux";

<<<<<<< HEAD
import Calendar from './Calendar.js'
import CalendarEvents from './CalendarEvents.js'
import WorkoutsForm from './WorkoutsForm'
=======
import Calendar from "./Calendar.js";
import CalendarEvents from "./CalendarEvents.js";
>>>>>>> built out user post functionality

import "./styles/ScheduleView.sass";
import "./styles/Calendar.scss";

class ScheduleView extends Component {
  render() {
    let ScheduledEvents = <CalendarEvents className='events' />
    if (this.props.dateClicked){
      ScheduledEvents = <WorkoutsForm />
    }
    return (
<<<<<<< HEAD
      <div className='main scheduleView'>
        {/* <button onClick={this.props.auth.logout}>Logout</button> */}
        <Calendar />
        {ScheduledEvents}
=======
      <div className="main schedule-view">
        {/* <button onClick={this.props.auth.logout}>Logout</button> */}
        <Calendar />
        <CalendarEvents className="events" />
>>>>>>> built out user post functionality
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    auth: state.auth,
    events: state.events,
    dateClicked: state.dateClicked
  };
};
=======
// const mapStateToProps = state => {
//   return {
//     userdata: state.userdata,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { updateUser }
// )(ScheduleView);
>>>>>>> built out user post functionality

// export default connect(mapStateToProps)(ScheduleView);


export default connect(
  mapStateToProps
)(ScheduleView);