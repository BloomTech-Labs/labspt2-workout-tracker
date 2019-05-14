import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExampleNote from './ExampleNote';
import { getNotes } from '../actions/actions';
import './styles/ProgressNotes.sass';
import ProgressNoteDeleteModal from './ProgressNoteDeleteModal';
import ProgressNoteEditForm from './ProgressNoteEditForm';

class ProgressNotes extends Component {
  render() {
    return (
      <div className="notes-container">
        <ExampleNote />
        {this.props.notes.map(note => {
          return (
            <div className="note" key={note.id}>
              <div className="progress-note-button-container">
                <ProgressNoteEditForm noteId={note.id} />
                <ProgressNoteDeleteModal noteId={note.id} />
              </div>
              <div className="progress-note-info-container">
                <p className="progress-note-p-tag">Weight: {note.weight}</p>
                <p className="progress-note-p-tag">Waist: {note.waist}</p>
                <p className="progress-note-p-tag">Arms: {note.arms}</p>
                <p className="progress-note-p-tag">Legs: {note.legs}</p>
              </div>
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
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(ProgressNotes);
