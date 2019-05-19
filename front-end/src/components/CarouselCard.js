import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <img src={props.details.screenshot} alt="logo" />
      <div>{props.details.details}</div>
    </div>
  );
}

export default Card;
