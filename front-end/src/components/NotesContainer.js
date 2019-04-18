import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultNotes } from '../defaults/index';
import './styles/NotesContainer.sass';
import Modal from 'react-responsive-modal';
import axios from 'axios';

class NotesContainer extends Component {
  state = {
    notes: defaultNotes,
    open: false
  };

  /*   componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.getNotes] });
  } */

  placeholder = () => {
    return alert('This is a place holder function');
  };

  onOpenModal = () => {
    this.setState({ open: !this.state.open });
  };

  Delete = () => {};

  render() {
    return (
      <div className="notes-container">
        <div />
        {this.state.notes.map(i => {
          return (
            <div className="note" key={i}>
              <div>
                <p onClick={this.placeholder}>Edit</p>
                <p onClick={this.onOpenModal}>Delete</p>
                <Modal
                  styles={{
                    className: 'note'
                  }}
                  open={this.state.open}
                  onClose={this.onOpenModal}
                >
                  <p>Are you sure you would like to delete this note?</p>
                  <p>Yes</p>
                  <p onClick={this.onOpenModal}>No</p>
                </Modal>
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
