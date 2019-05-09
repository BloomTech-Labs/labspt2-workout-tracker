import React from 'react';
import Modal from 'react-responsive-modal';
import styles from './styles/custom-styling.css';
import { connect } from 'react-redux';
import { deleteNote, getNotes} from '../actions/actions';


class CustomModal extends React.Component {
  state = {
    open: false
  };

  deleteNote = async () => {
    await this.props.deleteNote({notesId: this.props.noteId});
    await this.props.getNotes();
    this.setState({ open: !this.state.open });
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.toggleModal}>
          Delete
        </button>{' '}
        <Modal
          open={open}
          onClose={this.toggleModal}
          center
          classNames={{
            overlay: styles.customOverlay,
            modal: styles.customModal
          }}
        >
          <h1>Are you sure you want to delete this note?</h1>
          <button onClick={this.deleteNote}>Yes</button>
          <button onClick={this.toggleModal}>No</button>
        </Modal>
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
  {deleteNote, getNotes}
)(CustomModal);

