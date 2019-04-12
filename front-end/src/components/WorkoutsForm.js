import React, { Component } from 'react';
import { getData, postCategory, postExercise } from '../actions/actions';
import { connect } from 'react-redux';

class WorkoutsForm extends Component {
  state = {
    title: '',
    name: '',
    weight: '',
    sets: '',
    reps: '',
    category: '',
    selectedCategoryID: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newExercise = {
      selectedCategoryID: this.state.selectedCategoryID,
      title: this.state.title,
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps
    };
    const newCategory = {
      categoryName: this.state.category
    };
    this.props.postCategory(newCategory);
    const createdCategory = this.props.data[this.props.data.length - 1];
    this.props.postExercise(newExercise.selectedCategoryID || createdCategory);
  };

  render() {
    const { data } = this.props;

    return (
      <div className="form-container workouts-form">
        <form onSubmit={this.submitHandler}>
          <label>Workout Creator:</label>
          <input type="text" name="title" placeholder="Workout Title" />
          <select>
            {data.map(category => {
              return (
                <option value="category">
                  {category.category || category.categoryName}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="category"
            onChange={this.changeHandler}
            placeholder="Add Category"
          />
          <input type="text" name="name" placeholder="Exercise Name" />
          <input type="text" name="weight" placeholder="Weight" />
          <input type="text" name="sets" placeholder="Sets" />
          <input type="text" name="reps" placeholder="Reps" />
          <button type="text">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state:', state);
  return {
    data: state.data,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData, postCategory, postExercise }
)(WorkoutsForm);
