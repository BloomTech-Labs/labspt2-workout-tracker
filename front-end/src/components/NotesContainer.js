import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultNotes } from '../defaults/index';
import './styles/NotesContainer.sass';

class NotesContainer extends Component {
  state = {
    notes: defaultNotes
  };

  /*   componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.getNotes] });
  } */

  render() {
    return (
      <div className="notes-container">
        {this.state.notes.map(i => {
          return (
            <div className="note">
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
