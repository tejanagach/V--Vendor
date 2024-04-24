import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VendorSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/vendorSignup', {
        name,
        email,
        password,
      });
      console.log(response.data);
      // Optionally, redirect to login page or show a success message
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      // Optionally, display an error message to the user
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/img/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'rgba(245, 222, 179, 0.8)', // Vintage yellow
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #8B4513', // Vintage brown
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#8B4513', // Vintage brown
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    link: {
      marginTop: '10px',
      color: '#8B4513', // Vintage brown
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: '#8B4513', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>Vendor Signup</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
      <p style={styles.link}>Already have an account? <Link to="/vendorLogin">Login</Link></p>
    </div>
  );
};

export default VendorSignup;
