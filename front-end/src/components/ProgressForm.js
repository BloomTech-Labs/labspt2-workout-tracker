import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';

class ProgressForm extends Component {
  state = {
    weight: null,
    waist: null,
    arms: null
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    const { weight, waist, arms } = this.state;
    this.props.postNote({ weight, waist, arms });
    this.setState({ weight: '', waist: '', arms: '' });
  };

  render() {
    return (
      <form className="form-container progress-form" onSubmit={this.postNote}>
        <input
          name="weight"
          text="name"
          onChange={this.onChange}
          placeholder="Weight"
        />
        <input
          name="waist"
          text="name"
          onChange={this.onChange}
          placeholder="Waist"
        />
        <input
          name="arms"
          text="name"
          onChange={this.onChange}
          placeholder="Arms"
        />
        <button className="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { postNote }
)(ProgressForm);
