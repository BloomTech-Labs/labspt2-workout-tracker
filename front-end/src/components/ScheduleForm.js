import React, { Component } from 'react';
import { getData, postCategory, postExercise } from '../actions/actions';
import { connect } from 'react-redux';
import './styles/ScheduleForm.sass';
import Checkbox from './Checkbox.jsx'
import {closedEventForm} from "../actions/actions.js"



class ScheduleForm extends Component {
  state = {
    checked: false,
    categoryId: 1,
    title  : 'Core',
    start: '',
    end: '',
    allDay: null,
    exercises: []
  };


  closeHandler = (e) => {
    e.preventDefault();
    this.props.closedEventForm()
  }
  // changeHandler = e => {
  //   console.log('event value:', e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // selectChange = e => {
  //   document.getElementById('myText').value = e.target.value;
  // };

  changedCategory = (e) => {
    console.log(typeof e.target.options[e.target.selectedIndex].value)
    this.setState({ categoryId: Number(e.target.options[e.target.selectedIndex].value) });
    console.log(typeof e.target.options[e.target.selectedIndex].value)

  };

  Selected = (event) => {
      console.log(event.target.getAttribute("value"))
  }



  render() {
    const { data } = this.props;
    const { grabbedCategory } = this.state;

    return (
      <div className="component-container events-form">
        <form className="form-container" onSubmit={this.submitHandler}>
        <button className="closeButton" onClick={this.closeHandler}>X</button>
          <label className="events-heading">Schedule An Event</label>
          <div className='allDay' checkValue={false} onClick={this.Selected}>
          <Checkbox name={"All Day"} value={false} />
          </div>
          <input type="text" name="name" placeholder="Start Time" />
          <input type="text" name="name" placeholder="End Time" />
          <select name="" onChange={this.changedCategory} >
            {this.props.categories.map(category => {

              return (

                <option value={category.id}>
                  {category.categoryName}
                </option>
              );
            })}
          </select>
            {this.props.exercises.filter( exercise => {

              return exercise.categoryId === this.state.categoryId} ).map( item => {
                return (

                  <div className="event-full">

                  <Checkbox name={item.exerciseName} value={false} />

                </div>

                )
            
              })}
    



          <button className="submit" type="text">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    fetchingUsers: state.fetching,
    categories: state.categories,
    exercises: state.exercises,
    dateClicked: state.dateClicked

  };
};

export default connect(
  mapStateToProps,
  { closedEventForm }
)(ScheduleForm);