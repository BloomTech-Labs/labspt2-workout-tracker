import React from 'react';
import Modal from 'react-responsive-modal';
import styles from './styles/custom-styling.css';
import { connect } from 'react-redux';
import { editNote, getNotes } from '../actions/actions';

class EditModal extends React.Component {
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
    this.setState({ isMenuShowing: !this.state.isMenuShowing });
  };

  editNote = e => {
    e.preventDefault();
    const { weight, waist, arms, legs } = this.state;
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
  };

  render() {
    const isMenuShowing = this.state.isMenuShowing;
    if (!isMenuShowing) {
      return <button onClick={this.clickHandler}>Edit</button>;
    } else {
      return (
        <div className="example">
          <button onClick={this.clickHandler}>X</button>
          <form
            className="form-container progress-form"
            onSubmit={this.editNote}
          >
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
)(EditModal);
