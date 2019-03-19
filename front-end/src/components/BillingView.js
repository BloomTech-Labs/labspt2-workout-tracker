import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements, StripeProvider } from 'react-stripe-elements';

import './styles/BillingView.scss';

const BillingView = () => (
  <StripeProvider apiKey="pk_test_Gju9VkToEjZsO1RhYkIXmApE00zNqTr7sN">
    <div className="example">
      <h1>React Stripe Elements</h1>
      <Elements>
        <CheckoutForm />
      </Elements>
    </div>
  </StripeProvider>
);

export default BillingView;
