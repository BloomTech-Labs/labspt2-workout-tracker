import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './styles/CalendarEvents.sass';

import CalendarEvent from './CalendarEvent';

class CalendarEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let byDate = new Object();

    this.props.events !== undefined &&
      this.props.events.map(event => {
        console.log('moment formatting for fix');
        console.log(moment(event.start).format('YYYY-MM-DD'));
        byDate[moment(event.start).format('YYYY-MM-DD')] = [];
      });

    for (let property in byDate) {
      byDate[property] = this.props.events.filter(event => {
        return moment(event.start).format('YYYY-MM-DD') === property;
      });
    }
    if (this.props.dateClicked) {
      //change byDate to include only the events in dateClicked
    } else {
      //show everything
    }
    console.log('objject.entries');
    console.log(Object.entries(byDate));

    return (
      <div className='component-container events-container'>
        {Object.entries(byDate).map((event, index) => {
          return (
            <CalendarEvent
              scheduleDay={event['0']}
              eventGroup={event['1']}
              key={event['0'] + index}
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
