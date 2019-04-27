import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultNote } from '../defaults/index';
import { getNotes } from '../actions/actions';
import './styles/NotesContainer.sass';
import styles from './styles/custom-styling.css';
import Modal from 'react-responsive-modal';
import CustomModal from './CustomModal';
import axios from 'axios';

class NotesContainer extends Component {
  state = {
    notes: defaultNote
  };

  componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.notes] });
  }

  placeholder = () => {
    return alert('This is a place holder function');
  };

  render() {
    return (
      <div className="notes-container">
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
    data: state.data,
    error: state.error,
    fetchingUsers: state.fetching,
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { getNotes }
)(NotesContainer);
