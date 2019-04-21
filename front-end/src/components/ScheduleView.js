import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar.js'
import CalendarEvents from './CalendarEvents.js'
import WorkoutsForm from './WorkoutsForm'

import './styles/ScheduleView.sass'
import './styles/Calendar.scss'

class ScheduleView extends Component {
  render() {
    let ScheduledEvents = <CalendarEvents className='events' />
    if (this.props.dateClicked){
      ScheduledEvents = <WorkoutsForm />
    }
    return (
      <div className='main scheduleView'>
        {/* <button onClick={this.props.auth.logout}>Logout</button> */}
        <Calendar />
        {ScheduledEvents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    events: state.events,
    dateClicked: state.dateClicked
  };
};

// export default connect(mapStateToProps)(ScheduleView);


export default connect(
  mapStateToProps
)(ScheduleView);