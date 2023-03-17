import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_stripePublicKey);

function StripeApp() {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/create-checkout-session', { method: 'POST' }).then(res => res.json());
    const result = await stripe.redirectToCheckout({ sessionId });
    if (result.error) {
      console.error(result.error);
    }
  }

  return (
    <button onClick={handleCheckout}>Subscribe</button>
  );
}

export default StripeApp;