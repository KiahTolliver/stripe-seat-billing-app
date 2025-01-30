import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [seats, setSeats] = useState(1);
  const [customerId, setCustomerId] = useState('');

  const handleCheckoutClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/create-checkout-session', { seats });
      const { id } = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  const handleManageSubscriptionClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/create-customer-portal-session', { customerId });
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error('Error creating customer portal session:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Book Your Seats</h1>
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        min="1"
        style={styles.input}
      />
      <button onClick={handleCheckoutClick} style={styles.button}>Checkout</button>
      <h2 style={styles.header}>Manage Your Subscription</h2>
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Enter your customer ID"
        style={styles.input}
      />
      <button onClick={handleManageSubscriptionClick} style={styles.button}>Manage Subscription</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;