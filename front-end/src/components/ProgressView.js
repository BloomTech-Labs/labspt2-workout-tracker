import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';
import { defaultNotes } from '../defaults/index';
import NotesContainer from './NotesContainer';
import './styles/ProgressView.sass';

class ProgressView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      waist: null,
      arms: null,
      notes: defaultNotes
    };
  }
  componentDidMount() {
    // this.props.getData();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    const { weight, waist, arms } = this.state;
    this.props.postNote({ weight, waist, arms });
    this.setState({ weight: '', waist: '', arms: '' });
  };

  render() {
    return (
      <div className="main progress-view">
        <form className="form-container" onSubmit={this.postNote}>
          <input
            name="weight"
            text="name"
            onChange={this.onChange}
            value={this.state.weight}
            placeholder="Weight"
          />
          <input
            name="waist"
            text="name"
            onChange={this.onChange}
            value={this.state.waist}
            placeholder="Waist"
          />
          <input
            name="arms"
            text="name"
            onChange={this.onChange}
            value={this.state.arms}
            placeholder="Arms"
          />
          <button className="submit">Submit</button>
        </form>
        <div className="events-container notes-container">
          <NotesContainer />
        </div>
      </div>

      /* {this.props.fetchingUsers ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {this.props.users.map(user => {
              return <div key={user.id}>{user.email}</div>;
            })}
          </div>
        )} */
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

export default connect(
  mapStateToProps,
  { postNote }
)(ProgressView);
