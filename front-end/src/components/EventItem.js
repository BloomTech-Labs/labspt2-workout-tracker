import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from "moment";


import Checkbox from './Checkbox.jsx'


import './styles/ScheduleView.sass'

class EventItem extends Component {
  render() {
    return (
        
        <div className='event-full'>
        {/* <h1 className='cat'>{this.props.item["category"]}</h1> */}
        <div className='event-check'>
        <Checkbox name={this.props.exercise} value={false} />

       
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

export default EventItem;