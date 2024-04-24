// server/routes/payment.js

const express = require('express');
const router = express.Router();
const stripe = require('stripe')('your_stripe_secret_key');

router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    // Create a payment intent with the provided amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });

    // Send the client secret of the payment intent back to the frontend
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ message: 'Failed to create payment intent' });
  }
});

module.exports = router;
