import React, { Component } from 'react';

export default class WorkoutsForm extends Component {
  state = {
    title: '',
    name: '',
    weight: '',
    sets: '',
    reps: ''
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newWorkout = {
      title: this.state.title,
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps
    };
    //this.props.postWorkout(newWorkout) <-- Functionally will be added soon
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="workouts-form">
        <h5>Workout Creator:</h5>
        <input type="text" name="title" placeholder="Title" />
        <select>
          <option value="category">Arms</option>
          <option value="category">Legs</option>
          <option value="category">Cardio</option>
          <option value="category">Add Category</option>
        </select>
        <input type="text" name="name" placeholder="Workout Name" />
        <input type="text" name="weight" placeholder="Weight" />
        <input type="text" name="sets" placeholder="Sets" />
        <input type="text" name="reps" placeholder="Reps" />
        <button type="text">Submit</button>
      </form>
    );
  }
}
