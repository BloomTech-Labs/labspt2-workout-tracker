import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

//import Reducers from './reducers/reducers

//const store = createStore(/*reducers here*/);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

//<Provider store={store}>
//<Router>
//  <App />
//</Router>
//</Provider>,
//document.getElementById('root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
