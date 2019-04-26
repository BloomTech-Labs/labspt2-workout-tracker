import React, { Component } from 'react';
import {
  getData,
  postCategory,
  postExercise,
  getCategories
} from '../actions/actions';
import { connect } from 'react-redux';

class WorkoutsForm extends Component {
  state = {
    exerciseName: '',
    reps: '',
    weight: '',
    sets: '',
    categoryId: null,
    category: '',
    selectedCategoryID: '',
    grabbedCategory: null,
    categories: []
  };

  async componentDidMount() {
    try {
      await this.props.getCategories();
      await this.setState({
        categoryId: this.props.categories[0].id,
        category: this.props.categories[0].categoryName,
        categories: this.props.categories
      });
    } catch (err) {
      console.log(err);
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, categoryId: null });
  };

  selectChange = e => {
    document.getElementById('myText').value = e.target.value;
    this.setState({
      category: e.target.options[e.target.selectedIndex].value,
      categoryId: Number(
        e.target.options[e.target.selectedIndex].getAttribute('categoryId')
      )
    });
  };

  onClick = (grabbedCategory, e) => {
    this.setState({ grabbedCategory: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newExercise = {
      exerciseName: this.state.exerciseName,
      reps: this.state.reps,
      weight: this.state.weight,
      sets: this.state.sets,
      categoryId: this.state.categoryId
    };
    const newCategory = {
      categoryName: this.state.category
    };
    console.log('newCategory body in submitHandler:', newCategory);
    this.props.postCategory(newCategory);

    console.log(
      'this.props.categories in submitHandler:',
      this.props.categories
    );

    const createdCategory = this.props.categories[
      this.props.categories.length - 1
    ].id;
    console.log('createdCategory in submitHandler:', createdCategory);
    console.log('createdCategory in submitHandler:', createdCategory);
    console.log('newExercise body in submitHandler:', newExercise);

    this.props.postExercise(newExercise.categoryId || createdCategory);
  };

  render() {
    const { data } = this.props;
    const { grabbedCategory } = this.state;
    const { categories } = this.props;
    console.log('category props in render:', categories);

    return (
      <div className="form-container workouts-form">
        <form onSubmit={this.submitHandler}>
          <label>Workout Creator:</label>

          <select name="" onChange={this.selectChange}>
            {this.props.categories.map(category => {
              return (
                <option
                  key={category.id}
                  value={category.categoryName}
                  categoryId={category.id}
                  onClick={this.onClick}
                >
                  {category.categoryName}
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
          <input
            onChange={this.changeHandler}
            type="text"
            name="exerciseName"
            placeholder="Exercise Name"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="weight"
            placeholder="Weight"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="sets"
            placeholder="Sets"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="reps"
            placeholder="Reps"
          />
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
    categories: state.categories,
    exercises: state.exercises,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData, postCategory, postExercise, getCategories }
)(WorkoutsForm);
