import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductUploadForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/products', {
        name,
        price,
        description,
      });
      console.log(response.data);
      // Optionally, redirect to a success page or show a success message
    } catch (error) {
      console.error('Error uploading product:', error.response.data.message);
      setError('Failed to upload product. Please try again.');
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
    formContainer: {
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#f5deb3', // Vintage yellow color
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
      padding: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      color: '#8B4513', // Vintage brown color
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#8B4513', // Vintage brown color
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    error: {
      color: '#dc3545',
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
          <Link to="/cart" style={styles.link}>Cart</Link>
        </div>
      </div>

      <div style={styles.formContainer}>
        <h2>Upload Product</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="price" style={styles.label}>Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label}>Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Upload</button>
        </form>
      </div>
    </div>
  );
};

export default ProductUploadForm;
