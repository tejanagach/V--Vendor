import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 10;
    cartItems.forEach(item => {
      total += item.price;
    });
    return total;
  };

  const handleCheckout = () => {
    // Proceed to checkout page with cart items and total price as state
    navigate('/payment', { state: { cartItems: cartItems, totalPrice: totalPrice } });
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: 'rgba(245, 222, 179, 0.8)', // Vintage background color
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#8B4513', // Vintage brown
      padding: '10px 20px',
      marginBottom: '20px',
      borderRadius: '5px',
      position: 'sticky', // Align navbar at the top
      top: 0, // Align navbar at the top
    },
    navBrand: {
      margin: 0,
      fontSize: '1.5rem',
      color: '#fff',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    heading: {
      color: '#8B4513', // Vintage brown
    },
    cartItems: {
      marginTop: '20px',
    },
    cartItem: {
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    },
    itemName: {
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    itemPrice: {
      color: '#8B4513', // Vintage brown
    },
    totalPrice: {
      marginTop: '20px',
      fontWeight: 'bold',
      color: '#8B4513', // Vintage brown
    },
    checkoutButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#8B4513', // Vintage brown
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        {/* Logo or brand */}
        <Link to="/" style={styles.navBrand}>Vintage Store</Link>
        {/* Navigation links */}
        <div style={styles.navLinks}>
          <Link to="/productList" style={styles.link}>Product List</Link>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
        </div>
      </div>

      {/* Cart content */}
      <h2 style={styles.heading}>Cart</h2>
      <div style={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <p style={styles.itemName}>{item.name}</p>
            <p style={styles.itemPrice}>Price: ${item.price}</p>
          </div>
        ))}
      </div>
      <p style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</p>
      <button onClick={handleCheckout} style={styles.checkoutButton}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
