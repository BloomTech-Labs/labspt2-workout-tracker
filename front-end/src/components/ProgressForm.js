import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';

class ProgressForm extends Component {
  state = {
    weight: "",
    waist: "",
    arms: "",
    legs: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    const { weight, waist, arms, legs } = this.state;
    this.props.postNote({ weight, waist, arms, legs });
    this.setState({ weight: "", waist: "", arms: "", legs: "" });
  };

  render() {
    return (
      <form className="form-container progress-form" onSubmit={this.postNote}>
        <input
          name="weight"
          text="name"
          onChange={this.onChange}
          placeholder="Weight"
          value={this.state.weight}
        />
        <input
          name="waist"
          text="name"
          onChange={this.onChange}
          placeholder="Waist"
          value={this.state.waist}
        />
        <input
          name="arms"
          text="name"
          onChange={this.onChange}
          placeholder="Arms"
          value={this.state.arms}
        />
        <input
          name="legs"
          text="name"
          onChange={this.onChange}
          placeholder="Legs"
          value={this.state.legs}
        />
        <button className="submit">Submit</button>
      </form>
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
