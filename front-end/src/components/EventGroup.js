import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Checkbox from './Checkbox.jsx';
import EventItem from './EventItem.js';

import './styles/ScheduleView.sass';

class EventGroup extends Component {
  state = {
    checked: false,
    categoryId: 1,
    title: 'Core',
    start: '',
    end: '',
    allDay: null,
    exercises: []
  };

  Update = () => {
    this.forceUpdate();
  };

  render() {
    const filteredExercises = this.props.scheduledExercises.map(
      scheduledExercise => {
        return this.props.exercises.filter(exercise => {
          return exercise.exerciseId === scheduledExercise.id;
        });
      }
    );

    return (
      <div className='event-all'>
        {/* <h1 className='cat'>{this.props.item["category"]}</h1> */}
        <div className='event-group'>
          <div className='schedule-header'>
            <p className='head'>{this.props.title}</p>
            <p className='head'>{moment(this.props.time).format('h:mm a')}</p>
          </div>
          <div className='scheduled'>
            {filteredExercises[0].length > 0 &&
              filteredExercises.map((exercise, index) => {
                return (
                  <EventItem
                    key={exercise + index}
                    category={this.props.category}
                    onClick={this.Done}
                    Update={this.Update}
                    item={exercise}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises,
    error: state.error,
    fetching: state.fetching
  };
};

export default connect(mapStateToProps)(EventGroup);
