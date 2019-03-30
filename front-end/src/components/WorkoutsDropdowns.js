import React, { Component } from 'react';
import { exerciseDefaults } from '../defaults/index';
import Collapsible from 'react-collapsible';

export default class WorkoutsDropdowns extends Component {
  state = {
    exercises: exerciseDefaults
  };

  armsExerciseNames = () => {
    const exercises = this.state.exercises;
    const armsExercises = exercises.filter(exercises => {
      return exercises.categoryName === 'Arms';
    });
    const armsExerciseNames = armsExercises.map(arms => (
      <p>{arms.exerciseName}</p>
    ));
    return armsExerciseNames;
  };

  legsExerciseNames = () => {
    const exercises = this.state.exercises;
    const legsExercises = exercises.filter(exercises => {
      return exercises.categoryName === 'Legs';
    });
    const legsExerciseNames = legsExercises.map(legs => (
      <p>{legs.exerciseName}</p>
    ));
    return legsExerciseNames;
  };

  cardioExerciseNames = () => {
    const exercises = this.state.exercises;
    const cardioExercises = exercises.filter(exercises => {
      return exercises.categoryName === 'Cardio';
    });
    const cardioExerciseNames = cardioExercises.map(cardio => (
      <p>{cardio.exerciseName}</p>
    ));
    return cardioExerciseNames;
  };

  absExerciseNames = () => {
    const exercises = this.state.exercises;
    const absExercises = exercises.filter(exercises => {
      return exercises.categoryName === 'Abs';
    });
    const absExerciseNames = absExercises.map(abs => <p>{abs.exerciseName}</p>);
    return absExerciseNames;
  };

  render() {
    return (
      <div className="workouts-dropdowns">
        <Collapsible trigger="Arms">{this.armsExerciseNames()}</Collapsible>
        <Collapsible trigger="Legs">{this.legsExerciseNames()}</Collapsible>
        <Collapsible trigger="Cardio">{this.cardioExerciseNames()}</Collapsible>
        <Collapsible trigger="Abs">{this.absExerciseNames()}</Collapsible>
      </div>
    );
  }
}
