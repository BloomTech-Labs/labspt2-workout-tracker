import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/App.scss';
import LandingPage from './components/LandingPage';
import Callback from './components/Callback';
import ScheduleView from './components/ScheduleView';
import WorkoutsView from './components/WorkoutsView';
import ProgressView from './components/ProgressView';
import BillingView from './components/BillingView';
import SettingsView from './components/SettingsView';

const renderRoutes = ({ auth: { isAuthenticated } }) => {
  return (
    isAuthenticated() && [
      <Route path="/schedule" component={ScheduleView} />,
      <Route path="/workouts" component={WorkoutsView} />,
      <Route path="/progress" component={ProgressView} />,
      <Route path="/billing" component={BillingView} />,
      <Route path="/settings" component={SettingsView} />
    ]
  );
};

const App = props => (
  <div className="App">
    <Route exact path="/" component={LandingPage} />
    {renderRoutes(props)}
    <Route path="/callback" component={Callback} />
  </div>
);

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(App);
