import React from 'react';
import ProgressForm from '../components/ProgressForm';
import ProgressNotes from '../components/ProgressNotes';
import '../components/styles/ExampleNote.sass';
import '../components/styles/ProgressView.sass';

const ProgressView = () => (
  <div className="main progress-view">
    <ProgressForm className="progress-form" />
    <ProgressNotes />
  </div>
);

export default ProgressView;
