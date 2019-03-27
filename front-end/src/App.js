import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './components/styles/App.scss';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Callback from './Callback';
import ScheduleView from './components/ScheduleView';
import WorkoutsView from './components/WorkoutsView';
import ProgressView from './components/ProgressView';
import BillingView from './components/BillingView';
import SettingsView from './components/SettingsView';
import SecuredRoute from './components/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/callback" component={Callback} />
        <SecuredRoute path="/schedule" component={ScheduleView} />
        <SecuredRoute path="/workouts" component={WorkoutsView} />
        <SecuredRoute path="/progress" component={ProgressView} />
        <SecuredRoute path="/billing" component={BillingView} />
        <SecuredRoute path="/settings" component={SettingsView} />
      </div>
    );
  }
}

export default App;
