import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
  const [paymentId, setPaymentId] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      // Fetch cart items from backend
      const response = await axios.get('http://localhost:3001/cart');
      setCartItems(response.data.cartItems);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handlePayment = async () => {
    const razorpay = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay API key
      amount: totalPrice * 100, // Amount in paisa (e.g., 10000 for ₹100)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for Cart Items',
      image: '/your-logo.png', // URL of your logo
      order_id: paymentId,
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Test Address',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  const generateOrderId = async () => {
    try {
      // Call your backend to generate a Razorpay order ID
      const response = await axios.post('http://localhost:3001/generate-order', {
        amount: totalPrice * 100, // Amount in paisa (e.g., 10000 for ₹100)
        currency: 'INR',
      });
      setPaymentId(response.data.order_id);
    } catch (error) {
      console.error('Error generating order ID:', error);
    }
  };

  return (
    <div>
      <button onClick={generateOrderId}>Pay Now</button>
    </div>
  );
};

export default Payment;
