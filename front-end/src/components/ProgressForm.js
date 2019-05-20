import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';
import './styles/ProgressView.sass';

class ProgressForm extends Component {
  state = {
    weight: '',
    waist: '',
    arms: '',
    legs: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    const { weight, waist, arms, legs } = this.state;
    if (weight && waist && arms && legs) {
      if (this.props.notes.length < 5 || this.props.premium) {
        this.props.postNote({ weight, waist, arms, legs });
        this.setState({ weight: '', waist: '', arms: '', legs: '' });
      } else {
        alert('Go premium to add more notes!');
      }
    } else {
      window.confirm(
        'Please make sure to fill out all the text fields before hitting submit!'
      );
    }
  };

  render() {
    return (
      <div className='component-container progress-container'>
        <form className='form-container progress-form' onSubmit={this.postNote}>
          <p className='progress-container-p-tag'>
            Use the form on this page to create a note
          </p>
          <p className='progress-container-p-tag'>
            This is a simple way to keep track of your progress
          </p>
          <p className='progress-container-p-tag'>
            Enter in your your Weight, Waist Size (in inches or however your
            prefer to measure it), the weight you lifted with your Arms and
            Legs, and hit Submit
          </p>
          <input
            type='text'
            name='weight'
            text='name'
            onChange={this.onChange}
            placeholder='Weight'
            value={this.state.weight}
          />
          <input
            type='text'
            name='waist'
            text='name'
            onChange={this.onChange}
            placeholder='Waist'
            value={this.state.waist}
          />
          <input
            type='text'
            name='arms'
            text='name'
            onChange={this.onChange}
            placeholder='Arms'
            value={this.state.arms}
          />
          <input
            type='text'
            name='legs'
            text='name'
            onChange={this.onChange}
            placeholder='Legs'
            value={this.state.legs}
          />
          <button className='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    notes: state.notes,
    premium: state.premium
  };
};

export default connect(
  mapStateToProps,
  { postNote }
)(ProgressForm);
