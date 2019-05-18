import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import auth from '../Auth';
import { connect } from 'react-redux';
import './styles/Nav.sass';
import logo from '../images/workout-logo.svg';
// import logopremium from '../images/workout-logo-premium.svg';


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
          {/* <img src={logopremium} className="premium" alt="logo-premium" /> */}

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
              {/* {auth.getProfile().nickname} */}
              {/* {props.userinfo.username} */}
              {props.userinfo.username
                ? props.userinfo.username
                : auth.getProfile().nickname}
            </button>
          </div>
          <NavLink activeClassName="active" to="/schedule">
            Your Calendar
          </NavLink>
          <NavLink activeClassName="active" to="/workouts">
            Workout Creator
          </NavLink>
          <NavLink activeClassName="active" to="/progress">
            Progress Notes
          </NavLink>
          <NavLink activeClassName="active" to="/settings">
            Settings/Billing
          </NavLink>
        </>
      )}
    </nav>
  );
}

// export default withRouter(NavBar);

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo,
    error: state.error,
    fetching: state.fetching
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
