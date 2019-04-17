import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
import Notes from './components/Notes';
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
    // this.props.getData();
  }

  onChange = () => {};

  render() {
    return (
      <div className="main progress-view">
        <form className="form-container">
          <input
            name="weight"
            text="name"
            onChange={this.onChange}
            value={''}
            placeholder="Weight"
          />
          <input
            name="hips"
            text="name"
            onChange={this.onChange}
            value={''}
            placeholder="Hips"
          />
          <input
            name="arms"
            text="name"
            onChange={this.onChange}
            value={''}
            placeholder="Arms"
          />
          <input
            name="legs"
            text="name"
            onChange={this.onChange}
            value={''}
            placeholder="Legs"
          />
          <button className="submit">Submit</button>
        </form>
        <div className="events-container notes-container" />
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
    notes: state.notes,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { postNote }
)(ProgressView);
