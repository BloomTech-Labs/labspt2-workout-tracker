import React from 'react';
//import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="card">
      <div>Help</div>
      <div>{props.details.details}</div>
    </div>
  );
}

export default Card;
