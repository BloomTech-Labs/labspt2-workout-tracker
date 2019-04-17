import React, { Component } from "react";
import { connect } from "react-redux";
import { postNote } from "../actions/actions";
import "./styles/ProgressView.sass";

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

  render() {
    return (
      <div className="progressView">
        <h1>Progress View</h1>
        <div className="formBox">
          <form className="progressForm">
            <h5>{Date}</h5>

            <input
              className="inputTop"
              type="text"
              name="weight"
              placeholder="Weight"
            />
            <input type="text" name="hips" placeholder="Hips" />
            <input
              className="inputMiddle"
              type="text"
              name="waist"
              placeholder="Waist"
            />
            <input type="text" name="rArm" placeholder="(R) Arm" />
            <input
              className="inputLower"
              type="text"
              name="lArm"
              placeholder="(L) Arm"
            />
            <input type="text" name="rLeg" placeholder="(R) Leg" />
            <input
              className="inputBottom"
              type="text"
              name="lLeg"
              placeholder="(L) Leg"
            />
            <button type="text">Submit Progress</button>
          </form>
          <div className="rightSide">
            <div>
              <h3>{/*XX pounds or inches*/}</h3>
              <h3>Weight lost since:</h3>
              <h3>{/*date*/}</h3>
            </div>
            <div>
              <h3>{/*XX pounds or inches*/}</h3>
              <h3>Inches lost since:</h3>
              <h3>{/*date*/}</h3>
            </div>
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
    notes: state.notes,
    error: state.error,
    fetchingUsers: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { postNote }
)(ProgressView);
