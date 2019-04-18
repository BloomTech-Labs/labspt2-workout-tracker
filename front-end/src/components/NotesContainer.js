import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultNotes } from '../defaults/index';
import './styles/NotesContainer.sass';
import styles from './styles/custom-styling.css';
import Modal from 'react-responsive-modal';
import CustomModal from './CustomModal';
import axios from 'axios';

class NotesContainer extends Component {
  state = {
    notes: defaultNotes
  };

  /*   componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.getNotes] });
  } */

  placeholder = () => {
    return alert('This is a place holder function');
  };

  render() {
    return (
      <div className="notes-container">
        <div />
        {this.state.notes.map(i => {
          return (
            <div className="note" key={i}>
              <div>
                <p onClick={this.placeholder}>Edit</p>
                <CustomModal />
              </div>
              <p>Weight: {i.weight}</p>
              <p>Waist: {i.waist}</p>
              <p>Arms: {i.arms}</p>
              <p>Legs: {i.legs}</p>
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
    fetchingUsers: state.fetching
  };
};

export default connect(mapStateToProps)(NotesContainer);
