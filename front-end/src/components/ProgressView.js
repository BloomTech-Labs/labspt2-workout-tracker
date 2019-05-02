import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNote, getNotes } from '../actions/actions';
import { defaultNotes } from '../defaults/index';
import NotesContainer from './NotesContainer';
import './styles/ProgressView.sass';

class ProgressView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      waist: null,
      arms: null
    };
  }
  componentDidMount() {
    this.props.getNotes();
  }

  // componentDidUpdate(prevState) {
  //   if (prevState.notes.length !== this.state.notes.length) {
  //     this.props.getNotes();
  //     this.setState({ notes: [...this.props.notes] });
  //     console.log(`IN THE PROGRESSVIEW ${this.state.notes.length}`);
  //   }
  // }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postNote = e => {
    e.preventDefault();
    if (this.props.notes.length < 5 || this.props.premium) {
      const { weight, waist, arms } = this.state;
      this.props.postNote({ weight, waist, arms });
      this.setState({ weight: '', waist: '', arms: '' });
    } else {
      alert('Go premium to add more notes!');
    }
  };

  render() {
    return (
      <div className="main progress-view">
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
        <NotesContainer />
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
    fetchingUsers: state.fetching,
    premium: state.premium,
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { postNote, getNotes }
)(ProgressView);
