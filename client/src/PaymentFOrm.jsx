import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your_stripe_public_key');

const PaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [isUpiIdVerified, setIsUpiIdVerified] = useState(false); // Track whether UPI ID is verified
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleVerifyUpiId = () => {
    // Simulate verification logic
    if (upiId === '7981672861@ybl') {
      setIsUpiIdVerified(true);
    } else {
      setIsUpiIdVerified(false);
      setPaymentError('Invalid UPI ID');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      if (paymentMethod === 'card') {
        // Simulate successful card payment
        setPaymentError('Payment successful!');
      } else if (paymentMethod === 'upi' && isUpiIdVerified) {
        // Simulate successful UPI payment after verification
        setPaymentError('Payment successful!');
      } else if (paymentMethod === 'netbanking') {
        // Simulate successful net banking payment
        setPaymentError('Payment successful!');
      } else {
        setPaymentError('Please verify UPI ID');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentError('Failed to process payment');
    }
  };

  return (
    <div style={{ backgroundColor: '#f0e6e6', padding: '20px', borderRadius: '10px' }}>
      <div style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', color: '#9b6b6b', marginBottom: '20px' }}>Payment Form</h2>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>
            <input type="radio" value="card" checked={paymentMethod === 'card'} onChange={handlePaymentMethodChange} />
            Card
          </label>
          <label style={{ marginRight: '10px' }}>
            <input type="radio" value="upi" checked={paymentMethod === 'upi'} onChange={handlePaymentMethodChange} />
            UPI
          </label>
          <label>
            <input type="radio" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={handlePaymentMethodChange} />
            Net Banking
          </label>
        </div>
        {paymentMethod === 'card' && (
          <div style={{ marginBottom: '20px' }}>
            <CardElement style={{ height: '40px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f8f8f8' }} />
          </div>
        )}
        {paymentMethod === 'upi' && !isUpiIdVerified && (
          <div style={{ marginBottom: '20px' }}>
            <input type="text" placeholder="Enter UPI ID" value={upiId} onChange={handleUpiIdChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <button onClick={handleVerifyUpiId} style={{ marginLeft: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Verify</button>
          </div>
        )}
        {paymentMethod === 'upi' && isUpiIdVerified && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ color: '#008000', marginBottom: '10px' }}>UPI ID verified successfully!</div>
            <button type="submit" onClick={handleSubmit} style={{ width: '100%', padding: '10px 20px', backgroundColor: '#9b6b6b', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Proceed to Payment
            </button>
          </div>
        )}
        {paymentMethod === 'netbanking' && (
          <div style={{ marginBottom: '20px' }}>
            <select value={selectedBank} onChange={handleBankChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
              <option value="">Select Bank</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        )}
        {paymentMethod !== 'upi' && (
          <button type="submit" onClick={handleSubmit} disabled={!stripe} style={{ width: '100%', padding: '10px 20px', backgroundColor: '#9b6b6b', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Proceed to Payment
          </button>
        )}
        {paymentError && <div style={{ color: paymentError === 'Payment successful!' ? '#008000' : '#ff0000', marginTop: '10px' }}>{paymentError}</div>}
      </div>
    </div>
  );
};

const StripePaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripePaymentForm;
