import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="main card">
      <div>{props.exercise.exerciseName}</div>
      <div>{props.exercise.difficultyLevel}</div>
      <div>{props.exercise.categoryName}</div>
    </div>
  );
}

export default Card;
