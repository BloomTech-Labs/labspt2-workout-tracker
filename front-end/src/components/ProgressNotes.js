import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExampleNote from './ExampleNote';
import { getNotes } from '../actions/actions';
import './styles/ProgressNotes.sass';
import CustomModal from './CustomModal';

class NotesContainer extends Component {

  componentDidMount() {
    this.props.getNotes();
  }

  placeholder = () => {
    return alert('This is a place holder function');
  };

  render() {
    return (
      <div className="notes-container">
        <ExampleNote />
        {this.props.notes.map(note => {
          return (
            <div className="note" key={note.id}>
              <div>
                <p onClick={this.placeholder}>Edit</p>
                <CustomModal />
              </div>
              <p>Weight: {note.weight}</p>
              <p>Waist: {note.waist}</p>
              <p>Arms: {note.arms}</p>
              <p>Legs: {note.legs}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    error: state.error,
    premium: state.premium
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(ProgressNotes);
