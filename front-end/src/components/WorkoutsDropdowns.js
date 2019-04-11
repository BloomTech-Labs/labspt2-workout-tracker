import React, { Component } from 'react';
import { exerciseDefaults } from '../defaults/index';
import Collapsible from 'react-collapsible';

export default class WorkoutsDropdowns extends Component {
  state = {
    exercises: exerciseDefaults
  };

  // takes in a categoryName as a callback
  // if you want to know what categoryNames we have available
  // take a look at the exerciseDefaults array in'../defaults/index.js'
  renderExerciseNames = category => {
    const exercises = this.state.exercises;
    const filteredExercises = exercises.filter(exercises => {
      return exercises.categoryName === category;
    });
    const filteredExerciseNames = filteredExercises.map(exerciseType => (
      <p className="drop-down">{exerciseType.exerciseName}</p>
    ));
    return filteredExerciseNames;
  };

  render() {
    return (
      <div className="workouts-dropdowns">
        {['Arms', 'Legs', 'Cardio', 'Abs'].map(type => {
          return (
            <Collapsible trigger={type}>
              {this.renderExerciseNames(type)}
            </Collapsible>
          );
        })}
      </div>
    );
  }
}
