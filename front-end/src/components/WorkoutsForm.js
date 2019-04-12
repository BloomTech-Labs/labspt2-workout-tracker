import React, { Component } from 'react';
import { getData } from '../actions/actions';
import { connect } from 'react-redux';

class WorkoutsForm extends Component {
  state = {
    title: '',
    name: '',
    weight: '',
    sets: '',
    reps: '',
    category: '',
    data: this.props.data
  };

  componentDidMount() {
    this.props.getData();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    const newExercise = {
      title: this.state.title,
      name: this.state.name,
      weight: this.state.weight,
      sets: this.state.sets,
      reps: this.state.reps
    };
    const newCategory = {
      category: this.state.category
    };
    this.props.postCategory(newCategory);
  };

  render() {
    const { data } = this.props;
    const filteredData = data.map(data => {
      return data['category'];
    });

    return (
      <div className="form-container workouts-form">
        <form onSubmit={this.submitHandler}>
          <label>Workout Creator:</label>
          <input type="text" name="title" placeholder="Workout Title" />
          <select>
            {filteredData.map(category => {
              return <option value="category">{category}</option>;
            })}
          </select>
          <input type="text" name="category" placeholder="Add Category" />
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
  return {
    data: state.data,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(WorkoutsForm);
