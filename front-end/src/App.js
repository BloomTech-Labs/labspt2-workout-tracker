import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The Truth About Your Shape</h1>
        <p>
        A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre; equivalently it is the curve traced out by a point that moves so that its distance from a given point is constant. The distance between any of the points and the centre is called the radius. This article is about circles in Euclidean geometry, and, in particular, the Euclidean plane, except where otherwise noted.
        </p>

        <form>
          <input type="text">
          </input>
        </form>

      </div>
    );
  }
}

export default App;
