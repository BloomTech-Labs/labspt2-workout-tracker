import React from 'react';
import ProgressForm from '../components/ProgressForm';
import NotesContainer from '../components/NotesContainer';
import '../components/styles/ProgressView.sass';

const ProgressView = () => (
  <div className="main progress-view">
    <ProgressForm />
    <NotesContainer />
  </div>
);

export default ProgressView;
