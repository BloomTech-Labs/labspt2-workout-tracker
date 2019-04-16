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
    selectedCategoryID: '',
    grabbedCategory: null
  };

  changeHandler = e => {
    console.log('event value:', e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  selectChange = e => {
    document.getElementById('myText').value = e.target.value;
  };

  onClick = (grabbedCategory, e) => {
    this.setState({ grabbedCategory: e.target.value });
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
    console.log('new category:', newCategory);
    this.props.postCategory(newCategory);
    const createdCategory = this.props.data[this.props.data.length - 1];
    this.props.postExercise(newExercise.selectedCategoryID || createdCategory);
  };

  render() {
    const { data } = this.props;
    const { grabbedCategory } = this.state;

    return (
      <div className="form-container workouts-form">
        <form onSubmit={this.submitHandler}>
          <label>Workout Creator:</label>
          <input type="text" name="title" placeholder="Workout Title" />
          <select name="" onChange={this.selectChange}>
            {data.map(data => {
              return (
                <option value={grabbedCategory} onClick={this.onClick}>
                  {data.category || data.categoryName}
                </option>
              );
            })}
          </select>
          <input
            id="myText"
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
