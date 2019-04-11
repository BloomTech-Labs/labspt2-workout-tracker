import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Calendar.js'
import CalendarEvents from './CalendarEvents.js'

import './styles/ScheduleView.sass'
import './styles/Calendar.scss'

class ScheduleView extends Component {
  render() {
    return (
      <div className='main schedule-view'>
        {/* <button onClick={this.props.auth.logout}>Logout</button> */}
        <Calendar />
        <CalendarEvents />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

// export default connect(mapStateToProps)(ScheduleView);

export default ScheduleView;
