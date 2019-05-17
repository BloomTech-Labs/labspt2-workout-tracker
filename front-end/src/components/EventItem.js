import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Checkbox from './Checkbox.jsx';

import './styles/ScheduleView.sass';

class EventItem extends Component {
  render() {
    console.log('item');
    console.log(this.props.item[0]);
    return (
      <div className='event-full'>
        {/* <h1 className='cat'>{this.props.item["category"]}</h1> */}
        <div className='event-check'>
          <Checkbox
            name={this.props.item[0].exerciseName}
            Update={this.props.Update}
            item={this.props.item}
            value={false}
          />

          <p className='indented-item'>Weight: {this.props.item[0].weight}</p>

          <p className='indented-item'>Reps: {this.props.item[0].reps}</p>
          <p className='indented-item'>Sets: {this.props.item[0].sets}</p>
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
