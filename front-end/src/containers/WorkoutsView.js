import React from 'react';
import WorkoutsForm from '../components/WorkoutsForm';
import WorkoutsDropdowns from '../components/WorkoutsDropdowns';

const WorkoutsView = () => (
  <div className="workouts-view">
    <h1>Workouts View</h1>
    <WorkoutsForm />
    <WorkoutsDropdowns />
  </div>
);

export default WorkoutsView;
