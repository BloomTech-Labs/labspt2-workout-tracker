import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
import './styles/ProgressView.sass';

class ProgressView extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="progressView">
        <h1>Progress View</h1>
        <div className="formBox">
          <form className="progressForm">
            <h5>{Date}</h5>
            <input type="text" name="weight" placeholder="Weight" /><br />
            <input type="text" name="hips" placeholder="Hips" />
            <input type="text" name="waist" placeholder="Waist" /><br />
            <input type="text" name="rArm" placeholder="(R) Arm" />
            <input type="text" name="lArm" placeholder="(L) Arm" /><br />
            <input type="text" name="rLeg" placeholder="(R) Leg" />
            <input type="text" name="lLeg" placeholder="(L) Leg" /><br />
            <button type="text">Submit Progress</button>
          </form>
        </div>
        {/* {this.props.fetchingUsers ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {this.props.users.map(user => {
              return <div key={user.id}>{user.email}</div>;
            })}
          </div>
        )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
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
