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
            <input className="inputTop" type="text" name="weight" placeholder="Weight" />
            <input type="text" name="hips" placeholder="Hips" />
            <input className="inputMiddle" type="text" name="waist" placeholder="Waist" />
            <input type="text" name="rArm" placeholder="(R) Arm" />
            <input className="inputLower" type="text" name="lArm" placeholder="(L) Arm" />
            <input type="text" name="rLeg" placeholder="(R) Leg" />
            <input className="inputBottom" type="text" name="lLeg" placeholder="(L) Leg" />
            <button type="text">Submit Progress</button>
          </form>
          <div className="rightSide">
            <h1>test</h1>
          </div>
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