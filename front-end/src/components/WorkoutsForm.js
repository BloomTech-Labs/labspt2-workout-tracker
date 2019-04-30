import React, { Component } from "react";
import {
  getData,
  postCategory,
  postExercise,
  getCategories
} from "../actions/actions";
import { connect } from "react-redux";

class WorkoutsForm extends Component {
  state = {
    exerciseName: "",
    reps: "",
    weight: "",
    sets: "",
    categoryId: null,
    category: "",
    selectedCategoryID: "",
    grabbedCategory: null,
    categories: []
  };

  componentDidMount() {
    // try {
    //   await this.props.getCategories();
    //   console.log(this.props.categories);
    //   await this.setState({
    //     categories: this.props.categories
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    this.props.getCategories();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  categoryChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, categoryId: null });
  };

  selectChange = e => {
    document.getElementById("myText").value = e.target.value;
    this.setState({
      category: e.target.options[e.target.selectedIndex].value,
      categoryId: Number(
        e.target.options[e.target.selectedIndex].getAttribute("categoryid")
      )
    });
  };

  onClick = (grabbedCategory, e) => {
    this.setState({ grabbedCategory: e.target.value });
  };

  submitHandler = async e => {
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
    console.log("newCategory body in submitHandler:", newCategory);
    // this.props.postCategory(newCategory);

    console.log(
      "this.props.categories in submitHandler:",
      this.props.categories
    );

    // const createdCategory = this.props.categories[
    //   this.props.categories.length - 1
    // ].id;
    // console.log("createdCategory in submitHandler:", createdCategory);
    console.log("newExercise body in submitHandler:", newExercise);
    if (newExercise.categoryId) {
      this.props.postExercise(newExercise);
    } else {
      const newCategories = await this.props.postCategory(newCategory);
      // await this.props.getCategories();
      console.log(newCategories);
      let createdCategory = newCategories[newCategories.length - 1].id;
      newExercise.categoryId = createdCategory;
      this.props.postExercise(newExercise);
    }
    // this.props.postExercise(newExercise.categoryId || createdCategory);
  };

  render() {
    const { data } = this.props;
    const { grabbedCategory } = this.state;
    const { categories } = this.props;
    console.log("category props in render:", categories);

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
                  categoryid={category.id}
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
            onChange={this.categoryChangeHandler}
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
  console.log("state:", state);
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
