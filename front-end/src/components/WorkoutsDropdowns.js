import React, { Component } from 'react';
import { exerciseDefaults } from '../defaults/index';
import {
  getData,
  postCategory,
  postExercise,
  getCategories
} from '../actions/actions';
import { connect } from 'react-redux';
import Collapsible from 'react-collapsible';

class WorkoutsDropdowns extends Component {
  state = {
    exercises: [],
    categories: []
  };

  componentDidMount() {
    // this.props.getData();
  }

  // takes in a categoryName as a callback
  // if you want to know what categoryNames we have available
  // take a look at the exerciseDefaults array in'../defaults/index.js'
  // renderExerciseNames = category => {
  //   const exercises = this.props.exercises;
  //   const filteredExercises = exercises.filter(exercises => {
  //     return exercises.categoryName === category;
  //   });
  //   const mappedExerciseNames = filteredExercises.map((exerciseType, index) => (
  //     <p key={index} className='drop-down'>
  //       {exerciseType.exerciseName}
  //     </p>
  //   ));
  //   return mappedExerciseNames;
  // };

  renderCategories = array => {
    // const { categories } = this.props;
    const mappedCategoryArray = array.map(category => {
      return category.categoryName;
    });
    return mappedCategoryArray;
  };

  renderExercises = array => {
    const mappedExercisesArray = array.map(exercise => {
      return exercise.exerciseName;
    });
    return mappedExercisesArray;
  };

  render() {
    const { data } = this.props;
    const { categories } = this.props;
    const { exercises } = this.props;

    const combinedArray = categories.concat(exercises);
    console.log(combinedArray);

    return (
      <div className='workouts-dropdowns'>
        {categories.map((category, i) => {
          return (
            <Collapsible key={i} trigger={category.categoryName}>
              {exercises
                .filter(exercise => {
                  return exercise.categoryId === category.id;
                })
                .map((exercise, index) => {
                  return <p key={index}> {exercise.exerciseName} </p>;
                })}
            </Collapsible>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    categories: state.categories,
    exercises: state.exercises,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData, postCategory, postExercise }
)(WorkoutsDropdowns);
