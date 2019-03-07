import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/App.scss';
import LandingPage from './components/LandingPage';
import Callback from './components/Callback';
import ScheduleView from './components/ScheduleView';

class App extends Component {
  render() {
    if (this.props.auth.isAuthenticated()) {
      return (
        <div>
          <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route path="/schedule" component={ScheduleView} />
            <Route path="/callback" component={Callback} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route path="/callback" component={Callback} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
