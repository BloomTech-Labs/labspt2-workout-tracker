import React from 'react';
import Modal from 'react-responsive-modal';
import styles from './styles/custom-styling.css';
import { connect } from 'react-redux';
import { deleteNote, getNotes } from '../actions/actions';

class CustomModal extends React.Component {
  state = {
    open: false
  };

  deleteNote = async () => {
    await this.props.deleteNote({ notesId: this.props.noteId });
    await this.props.getNotes();
    this.setState({ open: !this.state.open });
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
    if (window.confirm('Are you sure you want to delete this note?')) {
      this.deleteNote();
    }
  };

  render() {
    const { open } = this.state;
    return (
      <button className="delete-button" onClick={this.toggleModal}>
        Delete
      </button>
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
  { deleteNote, getNotes }
)(CustomModal);
