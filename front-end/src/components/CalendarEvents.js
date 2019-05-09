import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/CalendarEvents.sass';

import CalendarEvent from './CalendarEvent';

import {objCreate, deleteEvent} from '../actions/actions.js'

// events: [
//   {
//     id: 1,
//     title: 'Arms',
//     start: '2019-11-21T10:15:00',
//     end: '2019-11-21T10:30:00',
//     allDay: false,
//     exercises: [
//       {
//         id: 1,
//         checked: false,
//         categoryId: 2,
//       },
//       {
//         id: 2,
//         checked: false,
//         categoryId: 2,
//       }
//     ]
//   },]


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


    let restOfEvents = this.props.events.filter(event => {return event.start.substring(0, 10) !== eventDate})
    this.props.deleteEvent(restOfEvents)

    


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

componentDidUpdate(prevProps) {
  if (this.props.events.length !== prevProps.events.length ) {

    this.eventObjectCreated()
  }

}









  render() {
  

    return (

      
      <div className="component-container events-container">
      
        {Object.entries(this.props.byDate).sort(function (x,y) {
      if (x[0]<y[0]) {return -1}
      if (x[0]>y[0]) {return 1}

    }).map((event, index) => {

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
    byDate: state.byDate,
    exercises: state.exercises
  };
};


export default connect(mapStateToProps, {objCreate , deleteEvent})(CalendarEvents);
