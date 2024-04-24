import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/vendorLogin', {
        email,
        password,
      });
      console.log(response.data);
      // Optionally, redirect to dashboard or show a success message
      navigate("/productUploadForm");
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Set error message to display to the user
      setError('Invalid email or password. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundImage: 'url("/img/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(245, 222, 179, 0.8)', // Vintage yellow
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    },
    title: {
      color: '#8B4513', // Vintage brown
      fontWeight: 'bold',
      fontSize: '2.5rem',
      marginBottom: '20px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    label: {
      color: '#8B4513', // Vintage brown
      fontSize: '1.2rem',
      marginBottom: '5px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '25px',
      border: 'none',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    },
    button: {
      width: '50%',
      padding: '15px 20px',
      backgroundColor: '#8B4513', // Vintage brown
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    },
    error: {
      fontSize: '1rem',
      color: '#8B0000', // Vintage red
      marginTop: '10px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h3 style={styles.title}>Vendor Login</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default VendorLogin;
