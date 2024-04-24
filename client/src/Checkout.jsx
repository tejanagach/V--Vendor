// Checkout.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const totalPrice = location.state?.totalPrice || 0;

  const handleConfirmCheckout = () => {
    // Logic to confirm checkout
    alert('Checkout confirmed!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Checkout</h2>
      <div style={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <p style={styles.itemName}>{item.name}</p>
            <p style={styles.itemPrice}>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      <p style={styles.totalPrice}>Total Price: ${totalPrice}</p>
      <button onClick={handleConfirmCheckout} style={styles.checkoutButton}>Confirm Checkout</button>
    </div>
  );
};

// Styles

export default Checkout;
