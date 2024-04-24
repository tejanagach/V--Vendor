import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/userSignup', {
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
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: 'url("/img/background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    formContainer: {
      padding: '20px',
      backgroundColor: 'rgba(245, 222, 179, 0.8)', // Vintage yellow
      borderRadius: '10px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
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
      <div style={styles.formContainer}>
        <h2>User Signup</h2>
        <form onSubmit={handleSubmit}>
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
        <p style={styles.link}>Already have an account? <Link to="/userLogin">Login</Link></p>
      </div>
    </div>
  );
};

export default UserSignup;
