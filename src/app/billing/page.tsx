// BillingPage.tsx

import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe('your-test-publishable-api-key');

interface BillingPageProps {}

interface Plan {
  id: string;
  name: string;
  amount: number;
  currency: string;
  interval: string;
}

const BillingPage: React.FC<BillingPageProps> = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement == null) {
      return;
    }

    // Use your test customer ID here
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: 'Your Customer Name',
      },
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div>
      <h1>Subscribe to a plan</h1>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <p>
        <a href="/customer-portal">Customer Portal</a>
      </p>
      <h2>Plans</h2>
      <ul>
        <li>
          <Plan plan={{ id: 'plan_HuGcjKWtqQqLlo', name: 'Plan 1', amount: 1500, currency: 'usd', interval: 'month' }} />
        </li>
        <li>
          <Plan plan={{ id: 'plan_HuGcjKWtqQqLlz', name: 'Plan 2', amount: 3000, currency: 'usd', interval: 'month' }} />
        </li>
      </ul>
    </div>
  );
};

const Plan: React.FC<{ plan: Plan }> = ({ plan }) => {
  return (
    <div>
      <h3>{plan.name}</h3>
      <p>
        {plan.amount} {plan.currency} / {plan.interval}
      </p>
    </div>
  );
};

export default BillingPage;