import React, { Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeBtn = () => {
  const publishableKey = 'pk_test_Gju9VkToEjZsO1RhYkIXmApE00zNqTr7sN';

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
    axios
      .post('http://localhost:8000/payment', body)
      .then(response => {
        console.log(response);
        alert('Payment Success');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert('Payment Error');
      });
  };
  return (
    <StripeCheckout
      label="Go Gold" //Component button text
      name="Workout Tracker" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Gold" //Submit button in modal
      amount={125} //Amount in cents $1.25
      token={onToken}
      stripeKey={publishableKey}
      image="https://www.vidhub.co" //Pop-in header image
      billingAddress={false}
    />
  );
};

export default stripeBtn;
