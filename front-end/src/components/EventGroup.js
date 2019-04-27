import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";


import Checkbox from './Checkbox.jsx'
import EventItem from './EventItem.js'


import './styles/ScheduleView.sass'

class EventGroup extends Component {
  state = {
    checked: false,
    categoryId: 1,
    title  : 'Core',
    start: '',
    end: '',
    allDay: null,
    exercises: [...this.props.exercises]
  };

  Update = () => {
    this.forceUpdate()
  }

  

  render() {
    return (
        
        <div className='event-all'>
        {/* <h1 className='cat'>{this.props.item["category"]}</h1> */}
        <div className='event-group'>
        <div className="schedule-header">
       <p className="head">{this.props.title}</p>
       <p className="head">{moment(this.props.time).format("h:mm a")}</p>
        </div>
        <div className="scheduled">

       {this.props.exercises.map((exercise,index) => {
          return <EventItem key={exercise+index} category={this.props.category} onClick={this.Done} Update={this.Update} item={exercise} />

       })}
        </div>
        </div>
        </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.auth
//   };
// };

// export default connect(mapStateToProps)(ScheduleView);

export default EventGroup;