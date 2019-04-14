
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './Checkbox.jsx'


import './styles/ScheduleView.sass'

class EventGroup extends Component {
  render() {
    return (
        
        <div className='event-full'>
        <h1 className='cat'>{this.props.item["category"]}</h1>
        <div className='event-check'>
        <Checkbox />
        <p>{this.props.changeTime(this.props.item["start"])}</p>

        <p>{this.props.item["title"]}</p>
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