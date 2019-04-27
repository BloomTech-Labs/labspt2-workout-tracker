import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote } from '../actions/actions';
import { defaultNotes } from '../defaults/index';
import NotesContainer from './NotesContainer';

class ProgressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      waist: null,
      arms: null
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
      <form className="form-container progress-form" onSubmit={this.postNote}>
        <input
          name="weight"
          text="name"
          onChange={this.onChange}
          placeholder="Weight"
        />
        <input
          name="waist"
          text="name"
          onChange={this.onChange}
          placeholder="Waist"
        />
        <input
          name="arms"
          text="name"
          onChange={this.onChange}
          placeholder="Arms"
        />
        <button className="submit">Submit</button>
      </form>

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
)(ProgressForm);
