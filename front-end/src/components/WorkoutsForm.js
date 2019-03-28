import React, { Component } from 'react';

export default class WorkoutsForm extends Component {
  render() {
    return (
      <form>
        <input type="text" name="title" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
