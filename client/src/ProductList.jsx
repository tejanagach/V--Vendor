import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [flashMessage, setFlashMessage] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const addtocart = async (id, name, price) => {
    try {
      // Logic to add item to cart
      setCart([...cart, { id, name, price }]);
      setFlashMessage(`${name} has been added to the cart.`);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      // Fetch products from API
      const response = await axios.get('http://localhost:3001/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgba(245, 222, 179, 0.8)', // Vintage background color
      minHeight: '100vh', // Ensure the container fills the entire viewport height
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
    searchInput: {
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #666', // Vintage gray
      marginRight: '10px',
    },
    productList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    productItem: {
      marginBottom: '20px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      width: '400px',
    },
    productName: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#8B4513',
    },
    productPrice: {
      marginBottom: '10px',
      color: '#8B4513',
    },
    productDescription: {
      marginBottom: '10px',
      color: '#666',
    },
    cartButton: {
      padding: '10px 20px',
      backgroundColor: '#8B4513',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    flashMessage: {
      marginBottom: '20px',
      fontSize: '1.2rem',
      color: '#8B0000',
    },
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        {/* Logo or brand */}
        <h1 style={{ margin: 0 }}>Vintage Store</h1>
        {/* Navigation links */}
        <div style={styles.navLinks}>
          {/* Search input */}
          <input type="text" placeholder="Search" style={styles.searchInput} />
          {/* Navigation links */}
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/" style={styles.link}>About Us</Link>
          <Link to="/cart" style={styles.link}>Cart ({cart.length})</Link>
        </div>
      </div>

      {/* Flash message */}
      {flashMessage && <div style={styles.flashMessage}>{flashMessage}</div>}

      {/* Product list */}
      <ul style={styles.productList}>
        {products.map(product => (
          <li key={product._id} style={styles.productItem}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Price: ${product.price}</p>
            <p style={styles.productDescription}>Description: {product.description}</p>
            <button onClick={() => addtocart(product._id, product.name, product.price)} style={styles.cartButton}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
