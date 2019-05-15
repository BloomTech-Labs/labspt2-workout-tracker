import React from 'react';
import { connect } from 'react-redux';
import { editNote, getNotes } from '../actions/actions';

class ProgressNoteEditForm extends React.Component {
  state = {
    weight: '',
    waist: '',
    arms: '',
    legs: '',
    isMenuShowing: false
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = () => {
    this.setState({
      isMenuShowing: !this.state.isMenuShowing
    });
  };

  editNote = e => {
    e.preventDefault();
    const { weight, waist, arms, legs } = this.state;
    if ((weight, waist, arms, legs)) {
      this.props.editNote({
        weight: weight,
        waist: waist,
        arms: arms,
        legs: legs,
        id: this.props.noteId
      });
      this.setState({
        weight: '',
        waist: '',
        arms: '',
        legs: '',
        isMenuShowing: false
      });
    } else {
      window.confirm(
        'Please make sure to fill out all the text fields before hitting submit!'
      );
    }
  };

  render() {
    const isMenuShowing = this.state.isMenuShowing;
    if (!isMenuShowing) {
      return (
        <button
          className="editButton progress-edit-button"
          onClick={this.clickHandler}
        >
          Edit
        </button>
      );
    } else {
      return (
        <div className="events-form">
          <button
            className="closeButton progress-close-button"
            onClick={this.clickHandler}
          >
            X
          </button>
          <form
            className="editForm progress-edit-form"
            onSubmit={this.editNote}
          >
            <input
              className="edit"
              name="weight"
              text="name"
              type="text"
              onChange={this.onChange}
              placeholder="Weight"
              value={this.state.weight}
            />
            <input
              className="edit"
              name="waist"
              text="name"
              type="text"
              onChange={this.onChange}
              placeholder="Waist"
              value={this.state.waist}
            />
            <input
              className="edit"
              name="arms"
              text="name"
              type="text"
              onChange={this.onChange}
              placeholder="Arms"
              value={this.state.arms}
            />
            <input
              className="edit"
              name="legs"
              text="name"
              type="text"
              onChange={this.onChange}
              placeholder="Legs"
              value={this.state.legs}
            />
            <button className="submit">Submit</button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { editNote, getNotes }
)(ProgressNoteEditForm);
