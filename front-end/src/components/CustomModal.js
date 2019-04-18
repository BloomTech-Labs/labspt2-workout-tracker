import React from 'react';
import Modal from 'react-responsive-modal';
import styles from './styles/custom-styling.css';

export default class CustomModal extends React.Component {
  state = {
    open: false
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
          <button onClick={this.toggleModal}>Yes</button>
          <button onClick={this.toggleModal}>No</button>
        </Modal>
      </div>
    );
  }
}
