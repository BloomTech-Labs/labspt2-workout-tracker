import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/actions';

class ProgressView extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h1>Progress View</h1>
        {this.props.fetchingUsers ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {this.props.users.map(user => {
              return <div key={user.id}>{user.email}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(ProgressView);
