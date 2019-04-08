import React from 'react';

function Card(props) {
  return (
    <div alt="exercise">
      <div>{props.exercise.exerciseName}</div>
      <img src={props.exercise.img} />
      <div>{props.exercise.difficultyLevel}</div>
      <div>{props.exercise.categoryName}</div>
    </div>
  );
}

export default Card;
