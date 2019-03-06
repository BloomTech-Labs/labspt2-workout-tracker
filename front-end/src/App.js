import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './styles/App.scss';
import LandingPage from './components/LandingPage';
import Callback from './components/Callback';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavLink to="/callback" className="nav-link" />
          <Route exact path="/" component={LandingPage} />
          <Route path="/callback" component={Callback} />
        </div>
      </div>
    );
  }
}

export default App;
