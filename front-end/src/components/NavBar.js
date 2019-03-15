import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth from '../Auth';

function NavBar(props) {
  const logout = () => {
    auth.logout();
    props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      {!auth.isAuthenticated() && (
        <button className="btn btn-dark" onClick={auth.login}>
          Sign In
        </button>
      )}
      {auth.isAuthenticated() && (
        <>
          <Link className="navbar-brand" to="/schedule">
            Your Calender
          </Link>
          <Link className="navbar-brand" to="/workouts">
            Workout Creator
          </Link>
          <Link className="navbar-brand" to="/progress">
            Progress Notes
          </Link>
          <Link className="navbar-brand" to="/billing">
            Billing
          </Link>
          <Link className="navbar-brand" to="/settings">
            Settings
          </Link>
          <div>
            <label className="mr-2 text-white">{auth.getProfile().name}</label>
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
