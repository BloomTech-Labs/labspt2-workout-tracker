import './styles/LandingPage.sass';
import logo from '../images/workout-logo.svg';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Coverflow from 'react-coverflow';
import { appDetails } from '../defaults/index.js';
import Card from './CarouselCard';

class LandingPage extends Component {
  render() {
    return (
      <div className='carousel'>
        <Coverflow
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          infiniteScroll={false}
          media={{
            '@media (max-width: 900px)': {
              width: '600px',
              height: '600px'
            },
            '@media (min-width: 900px)': {
              width: '1024px',
              height: '700px'
            }
          }}
        >
          {appDetails.map(i => {
            return (
              <Card
                screenshot={i.screenshot}
                className='card-component'
                details={i}
                key={i}
              />
            );
          })}
        </Coverflow>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(LandingPage);
