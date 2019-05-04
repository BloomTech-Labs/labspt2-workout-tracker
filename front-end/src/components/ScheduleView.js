import auth from '../Auth';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar.js';
import CalendarEvents from './CalendarEvents.js';
import ScheduleForm from './ScheduleForm';
import { checkPremium } from '../actions/actions';

<<<<<<< HEAD
<<<<<<< HEAD
import "./styles/Calendar.scss";

class ScheduleView extends Component {


=======
import './styles/ScheduleView.sass';
import './styles/Calendar.scss';

class ScheduleView extends Component {
  componentDidMount() {
    this.props.checkPremium();
  }
>>>>>>> Whoa boy, sizable commit.
=======
import './styles/ScheduleView.sass';
import './styles/Calendar.scss';

class ScheduleView extends Component {
  componentDidMount() {
    this.props.checkPremium();
  }
>>>>>>> 978ca28565bee424f2ac61a906ee4c6fb96d2c40

  render() {
    let ScheduledEvents = '';
    if (this.props.dateClicked) {
      ScheduledEvents = <ScheduleForm />;
    }
    return (
      <div className="main scheduleView">
        {/* <button onClick={this.props.auth.logout}>Logout</button> */}
        <Calendar />
        <div className="schedule-items">
          {ScheduledEvents}
          <CalendarEvents className="events" />
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

// export default connect(mapStateToProps)(ScheduleView);

export default connect(
  mapStateToProps,
  { checkPremium }
)(ScheduleView);
