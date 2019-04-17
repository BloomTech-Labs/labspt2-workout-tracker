import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth from "../Auth";
import './styles/Nav.sass';
import logo from '../images/workout-logo.svg';


function NavBar(props) {
  const logout = () => {
    auth.logout();
  };

  return (
    <nav>
      <Link className="" to="/">
        <a> Home </a>
      </Link>
      {!auth.isAuthenticated() && (
         <div className="login">
          <img src={logo} alt="logo" />
          <button className="login-logout" onClick={auth.login}>
            Sign In/Sign Up
          </button>
        </div>
      )}
      {auth.isAuthenticated() && (
        <>
          <Link to="/schedule">
            <a>Your Calender</a>
          </Link>
          <Link  to="/workouts">
            Workout Creator
          </Link>
          <Link  to="/progress">
            Progress Notes
          </Link>
          <Link to="/billing">
            Billing
          </Link>
          <Link to="/settings">
            Settings
          </Link>
          <div>
            <label className="mr-2 text-white">
              {auth.getProfile().nickname}
            </label>
            <button
              className="btn btn-dark"
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default withRouter(NavBar);
