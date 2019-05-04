import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import auth from '../Auth';
import './styles/Nav.sass';
import logo from '../images/workout-logo.svg';

function NavBar(props) {
  const logout = () => {
    auth.logout();
  };

  return (
    <nav>
      {/* <Link className="" to="/">
        <a> Home </a>
      </Link> */}
      {!auth.isAuthenticated() && (
        <div className="login">
          <img src={logo} alt="logo" />
          <button className="signin" onClick={auth.login}>
            Sign In
            <br />
            Sign Up
          </button>
        </div>
      )}
      {auth.isAuthenticated() && (
        <>
          <div className="logout">
            <img src={logo} alt="logo" />
            <button
              className="signout"
              onClick={() => {
                logout();
              }}
            >
              Sign Out
              <br />
              {auth.getProfile().nickname}
            </button>
          </div>
          <NavLink activeClassName="active" to="/schedule">
            <a>Your Calendar</a>
          </NavLink>
          <NavLink activeClassName="active" to="/workouts">
            Workout Creator
          </NavLink>
          <NavLink activeClassName="active" to="/progress">
            Progress Notes
          </NavLink>
          <NavLink activeClassName="active" to="/billing">
            Billing
          </NavLink>
          <NavLink activeClassName="active" to="/settings">
            Settings
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default withRouter(NavBar);
