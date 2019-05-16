import { connect } from 'react-redux';
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import '@fullcalendar/core/main.css';
import { clickedDate } from '../actions/actions.js';
import listWeek from '@fullcalendar/list';
import moment from 'moment';

import './styles/Calendar.scss';

class Calendar extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      {
        title: 'Arms',
        start: '2019-04-12T13:30:00',
        end: '2019-04-12T14:30:00',
        allDay: false
      },
      {
        title: 'Legs',
        start: '2019-04-12T15:30:00',
        end: '2019-04-12T16:30:00',
        allDay: false
      },
      {
        title: 'Core',
        start: '2019-04-12T20:30:00',
        end: '2019-04-12T21:30:00',
        allDay: false
      }
    ]
  };

  handleEventClick = info => {
    this.setState({ eventClicked: true });
    console.log(this.state.eventClicked);
    console.log(info.event.start.toISOString());
    const date = info.event.start.toISOString();
    this.props.clickedDate(date);
  };

  handleDateClick = ({ date }) => {
    let time = '11:36 pm';
    console.log('this is the date:');
    console.log(date);
    if (date.toISOString() === this.props.dateClicked) {
      this.props.clickedDate('');
    } else {
      this.props.clickedDate(date.toISOString());
    }
  };

  handleSelect = selectionInfo => {
    // console.log(selectionInfo);
    console.log('this is the start:');
    console.log(selectionInfo.start.toISOString());
    console.log('this is the end:');
    console.log(selectionInfo.end.toISOString());
  };

  render() {
    const events = this.props.events !== undefined && this.props.events;
    return (
      <div className='demo-app'>
        {/* <div className="demo-app-top">
          <button onClick={this.toggleWeekends}>toggle weekends</button>&nbsp;
          <button onClick={this.gotoPast}>go to a date in the past</button>
          &nbsp; (also, click a date/time to add an event)
        </div> */}
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView='dayGridMonth'
            header={{
              left: 'prevYear, prev,next, nextYear today',
              center: 'title',
              right: ''
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            fixedWeekCount={false}
            weekends={this.state.calendarWeekends}
            events={events}
            dateClick={this.handleDateClick}
            eventClick={this.handleEventClick}
            selectable={true}
            select={this.handleSelect}
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
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  };
}

const mapStateToProps = state => {
  return {
    users: state.users,
    events: state.events,
    categories: state.categories,
    exercises: state.exercises,
    dateClicked: state.dateClicked
  };
};

export default connect(
  mapStateToProps,
  { clickedDate }
)(Calendar);
