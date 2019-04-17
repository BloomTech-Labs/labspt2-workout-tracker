import React, { Component } from 'react';
import { connect } from 'react-redux';
import { defaultNotes } from '../defaults/index';

class NotesContainer extends Component {
  state = {
    notes: defaultNotes
  };

  /*   componentDidMount() {
    this.props.getNotes();
    this.setState({ notes: [...this.props.getNotes] });
  } */

  render() {
    return <div>Note</div>;
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
