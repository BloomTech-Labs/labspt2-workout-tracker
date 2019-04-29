import React from 'react';
import ProgressForm from '../components/ProgressForm';
import ProgressNotes from '../components/ProgressNotes';
import '../components/styles/ExampleNote.sass';

const ProgressView = () => (
  <div className="main progress-view">
    <ProgressForm />
    <ProgressNotes />
  </div>
);

export default ProgressView;