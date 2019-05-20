import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar.js';
import CalendarEvents from './CalendarEvents.js';
import ScheduleForm from './ScheduleForm';
import { checkPremium } from '../actions/actions';

import './styles/Calendar.scss';

class ScheduleView extends Component {
  componentDidMount() {
    this.props.checkPremium();
  }

  render() {
    let ScheduledEvents = '';
    if (this.props.dateClicked) {
      ScheduledEvents = (
        <ScheduleForm className='component-container events-form' />
      );
    }
    return (
      <div className='main scheduleView'>
        <Calendar />
        <div className='schedule-items'>
          {ScheduledEvents}
          {this.props.events.length === 0 && !this.props.dateClicked ? (
            <p>Schedule workouts here...</p>
          ) : (
            <CalendarEvents className='events' />
          )}
        </div>
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

export default connect(
  mapStateToProps,
  { checkPremium }
)(ScheduleView);
