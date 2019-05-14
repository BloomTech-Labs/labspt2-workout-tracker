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
              <div>
                <ProgressNoteEditForm noteId={note.id} />
                <ProgressNoteDeleteModal noteId={note.id} />
              </div>
              <div className="progress-note-info-container">
                <p className="progress-note-p-tag">
                  <span style={{ textDecoration: 'underline' }}>Weight</span>:{' '}
                  {note.weight}
                </p>
                <p className="progress-note-p-tag">
                  <span style={{ textDecoration: 'underline' }}>Waist</span>:{' '}
                  {note.waist}
                </p>
                <p className="progress-note-p-tag">
                  <span style={{ textDecoration: 'underline' }}>Arms</span>:{' '}
                  {note.arms}
                </p>
                <p className="progress-note-p-tag">
                  <span style={{ textDecoration: 'underline' }}>Legs</span>:{' '}
                  {note.legs}
                </p>
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
