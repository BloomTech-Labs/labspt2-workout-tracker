import React, { Component } from 'react';
import { defaultNote } from '../defaults/index';
import './styles/ProgressNotes.sass';

export default class ExampleNote extends Component {
  state = {
    exampleNote: defaultNote
  };

  render() {
    return (
      <>
        <div className="note">
          <p className="example-note-p-tag">
            Use the form on this page to create a note
          </p>
          <p className="example-note-p-tag">
            This is a simple way to keep track of your progress
          </p>
          <p className="example-note-p-tag">
            Enter in your your Weight, Waist Size (in inches or however your
            prefer to measure it, the weight you lifted with your Arms and Legs,
            and hit Submit
          </p>
        </div>
        {this.state.exampleNote.map((note, index) => {
          return (
            <div key={index} className="note">
              <p className="example-note-p-tag">Example Note:</p>

              <h5 className="example-note-h5-tag">
                <span style={{ textDecoration: 'underline' }}>Weight</span>:{' '}
                {note.weight}
              </h5>
              <h5 className="example-note-h5-tag">
                <span style={{ textDecoration: 'underline' }}>Waist</span>:{' '}
                {note.waist}
              </h5>
              <h5 className="example-note-h5-tag">
                <span style={{ textDecoration: 'underline' }}>Arms</span>:{' '}
                {note.arms}
              </h5>
              <h5 className="example-note-h5-tag">
                <span style={{ textDecoration: 'underline' }}>Legs</span>:{' '}
                {note.legs}
              </h5>
            </div>
          );
        })}
      </>
    );
  }
}
