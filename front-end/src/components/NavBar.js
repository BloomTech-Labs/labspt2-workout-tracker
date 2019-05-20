import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import auth from '../Auth';
import { connect } from 'react-redux';
import './styles/Nav.sass';
import logo from '../images/workout-logo.svg';
import logopremium from '../images/workout-logo-premium.svg';


class NavBar extends Component {
  

  render() {
    const logout = () => {
      auth.logout();
    };

    let traction = ""

    if (this.props.premium === true) {
      traction = <img src={logopremium} className="premium" alt="logo-premium" />
    }

    else {
      traction = <img src={logo} alt="logo" />
    }
  
    return (
      <nav>
        {/* <Link className="" to="/">
          <a> Home </a>
        </Link> */}
        {!auth.isAuthenticated() && (
          <div className='login-container'>
          <div className="login">
  
            <button className="signin" onClick={auth.login}>
              Sign In
            </button>
            <img className='login-logo' src={logo} alt="logo" />
            <button className="signin" onClick={auth.login}>
              Sign Up
            </button>
          </div>
          <h1>TRACTION</h1>
          </div>
        )}
        {auth.isAuthenticated() && (
          <>
            <div className="logout">
            {traction}
              {/* <img src={logopremium} className="premium" alt="logo-premium" /> */}
  
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
                {this.props.userinfo.username
                  ? this.props.userinfo.username
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
}


// export default withRouter(NavBar);

const mapStateToProps = state => {
  return {
    userinfo: state.userinfo,
    error: state.error,
    fetching: state.fetching,
    premium: state.premium
  };
};

export default withRouter(connect(mapStateToProps)(NavBar));
