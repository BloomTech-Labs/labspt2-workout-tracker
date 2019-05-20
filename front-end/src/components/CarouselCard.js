import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './styles/LandingPage.sass';

class Card extends Component {



  render() {
console.log(typeof this.props.screenshot)
    return (
      <div className="card">
        <img src={this.props.screenshot} style={{
          display: 'block',
          width: '100%',
        }} alt="logo" />
        <div className='description'>{this.props.details.details}</div>
      </div>
    );

  }




} 


export default Card;
