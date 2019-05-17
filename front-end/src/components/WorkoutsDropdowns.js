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
import './styles/WorkoutsView.sass';

class WorkoutsDropdowns extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { categories } = this.props;
    const { exercises } = this.props;
    return (
      <div className="workouts-dropdowns-container">
        {categories !== undefined &&
          categories.map((category, i) => {
            return (
              <div className="form-container events-card">
              <h1 className="category-heading">{category.categoryName}</h1>
                <Collapsible key={i} trigger={'↓'}>
                  {exercises !== undefined &&
                    exercises.length > 0 &&
                    exercises
                      .filter(exercise => {
                        return exercise.categoryId === category.id;
                      })
                      .map((exercise, index) => {
                        return <div className="workouts-div"> <h1 className='bullet-point'>⬣</h1> <h1 className="workouts-exercises" key={index}>{exercise.exerciseName}</h1></div>;
                      })}
                </Collapsible>
              </div>
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
