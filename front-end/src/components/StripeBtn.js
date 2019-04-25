import React, { Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import logo from '../images/workout-logo.svg';
import { getPremium } from '../actions/actions';

const stripeBtn = () => {
  const publishableKey = 'pk_test_Gju9VkToEjZsO1RhYkIXmApE00zNqTr7sN';

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
    axios
      .post('https://workout-tracker-pt2.herokuapp.com/api/payment', body)
      .then(response => {
        console.log('AXIOS RESPONSE', response);
        alert('Payment Success');
      })
      .catch(error => {
        alert('Payment Error');
      });
    console.log('made it this far');
    getPremium(true);
  };
  return (
    <StripeCheckout
      label="Go Gold" //Component button text
      name="Workout Tracker" //Modal Header
      description="Upgrade your account today."
      panelLabel="Go Gold" //Submit button in modal
      amount={125} //Amount in cents $1.25
      token={onToken}
      stripeKey={publishableKey}
      image={logo} //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripeBtn;
