import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';

class ProgressForm extends Component {
  state = {
    weight: '',
    waist: '',
    arms: ''
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    if (this.props.notes.length < 5 || this.props.premium) {
      const { weight, waist, arms } = this.state;
      this.props.postNote({ weight, waist, arms });
      this.setState({ weight: '', waist: '', arms: '' });
    } else {
      alert('Go premium to add more notes!');
    }
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
