import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";


import Checkbox from './Checkbox.jsx'
import EventItem from './EventItem.js'


import './styles/ScheduleView.sass'

class EventGroup extends Component {
  render() {
    return (
        
        <div className='event-all'>
        {/* <h1 className='cat'>{this.props.item["category"]}</h1> */}
        <div className='event-group'>
        <div className="schedule-header">
       <h1>{this.props.title}</h1>
       <p>{moment(this.props.time).format("h:mm a")}</p>
        </div>
        <div className="scheduled">

       {this.props.exercises.map((exercise,index) => {
          return <EventItem key={exercise+index} category={this.props.category} exercise={exercise} />

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