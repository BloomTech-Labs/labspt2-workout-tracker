import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProgressView = (props) => {
  return (
    <div>
      <h1>Progress View</h1>
      {props.users.name + ' '}
      {props.users.email}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return { users: state.users}
};

export default connect(mapStateToProps)(ProgressView);
