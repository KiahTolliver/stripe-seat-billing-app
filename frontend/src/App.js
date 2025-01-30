import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  const [seats, setSeats] = useState(1);

  const handleClick = async () => {
    try {
      const response = await axios.post('http://localhost:4242/create-checkout-session', { seats });
      const { id } = response.data;
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error('Error creating checkout session:', error);
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
      <button onClick={handleClick} style={styles.button}>Checkout</button>
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
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    width: '200px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;