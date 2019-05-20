import React, { Component } from 'react';
import { getData, postCategory, postExercise } from '../actions/actions';
import { connect } from 'react-redux';
import './styles/ScheduleForm.sass';
import Checkbox from './Checkbox.jsx';
import AddExerciseCheckbox from './AddExerciseCheckbox';
import { closedEventForm, postEvent } from '../actions/actions.js';
import moment from 'moment';
import CalendarEvents from './CalendarEvents';

class ScheduleForm extends Component {
  state = {
    allDay: { name: 'allDay', checked: false },
    categoryId: 1,
    title: this.props.categories[0].categoryName,
    start: '',
    end: '',
    exercises: [],
    clicked: false,
    checkbox: 'checkbox',
    smallhexagon: 'small-hexagon',
    check: 'check'
  };

  closeHandler = e => {
    e.preventDefault();
    this.props.closedEventForm();
  };
  // changeHandler = e => {
  //   console.log('event value:', e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // selectChange = e => {
  //   document.getElementById('myText').value = e.target.value;
  // };

  changedCategory = e => {
    this.setState({
      categoryId: Number(e.target.options[e.target.selectedIndex].value),
      title: e.target.options[e.target.selectedIndex].getAttribute(
        'categoryname'
      ),
      exercises: [],
      clicked: false,
      checkbox: 'checkbox',
      smallhexagon: 'small-hexagon',
      check: 'check'
    });
    // console.log(this.props.categories[0].categoryName);
  };

  inputHandler = event => {
    let value = event.target.value;
    let property = event.target.dataset.property;
    let date = this.props.dateClicked.replace(
      this.props.dateClicked.substring(11),
      moment(value, 'h:mm a')
        .format()
        .substring(11, 19)
    );
    console.log('date', date);
    this.setState({ [property]: date });
  };

  Update = () => {
    this.forceUpdate();
  };

  addExercise = exercise => {
    this.setState(state => {
      const exercises = [...state.exercises, exercise];
      return {
        exercises
      };
    });
  };

  removeExercise = id => {
    this.setState(state => {
      const exercises = state.exercises.filter(exercise => exercise.id !== id);

      return {
        exercises
      };
    });
  };

  submitEvent = async e => {
    // console.log(this.props.events);

    // let selectedExercises = this.state.exercises.filter(exercise => {
    //   return exercise.checked === true;
    // });
    e.preventDefault();
    // this.setState({
    //   exercises: selectedExercises,
    //   allDay: this.state.allDay.checked
    // });
    let newEvent = {
      title: this.state.title,
      categoryId: this.state.categoryId,
      start: this.state.start,
      end: this.state.end,
      allDay: false,
      exercises: this.state.exercises
    };

    await this.props.postEvent(newEvent);
    this.props.closedEventForm();
  };

  render() {
    const { data } = this.props;
    const { grabbedCategory } = this.state;

    return (
      <div className='component-container events-form'>
        <form className='form-container' onSubmit={this.submitEvent}>
          <button className='closeButton' onClick={this.closeHandler}>
            X
          </button>
          <label className='events-heading'>Schedule An Event</label>
          <p>{moment.utc(this.props.dateClicked).format('MMMM Do YYYY')}</p>
          {/* <div className='allDay' onClick={this.Selected}>
            <Checkbox
              name={'All Day'}
              Update={this.Update}
              item={this.state.allDay}
              Selected={this.Selected}
            />
          </div> */}
          <input
            type='text'
            onChange={this.inputHandler}
            disabled={this.state.allDay.checked}
            data-property='start'
            placeholder='Start Time'
          />
          <input
            type='text'
            onChange={this.inputHandler}
            disabled={this.state.allDay.checked}
            data-property='end'
            placeholder='End Time'
          />
          <select name='' onChange={this.changedCategory}>
            {this.props.categories.map(category => {
              return (
                <option
                  key={category.id}
                  value={category.id}
                  categoryname={category.categoryName}
                >
                  {category.categoryName}
                </option>
              );
            })}
          </select>
          {this.props.exercises
            .filter(exercise => {
              return exercise.categoryId === this.state.categoryId;
            })
            .map((item, index) => {
              return (
                <div key={item + index} className='event-full'>
                  <AddExerciseCheckbox
                    Update={this.Update}
                    name={item.exerciseName}
                    item={item}
                    value={this.sendOff}
                    addExercise={this.addExercise}
                    removeExercise={this.removeExercise}
                    clicked={this.state.clicked}
                    checkbox={this.state.checkbox}
                    smallHexagon={this.state.smallhexagon}
                    check={this.state.check}
                  />
                </div>
              );
            })}

          <button className='submit' type='text'>
            Submit
          </button>
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
    dateClicked: state.dateClicked,
    events: state.events
  };
};

export default connect(
  mapStateToProps,
  { closedEventForm, postEvent }
)(ScheduleForm);
