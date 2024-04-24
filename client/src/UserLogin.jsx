import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/UserLogin', {
        email,
        password,
      });
      localStorage.setItem('email', email);
      console.log(response.data);
      // Optionally, redirect to dashboard or show a success message
      //navigate("/productList");
      window.location.href = 'https://rzp.io/i/E5V7DT5GFS';
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Set error message to display to the user
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>User Login</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <br />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    minHeight: '100vh',
    background: `url("/img/background.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    margin: '5px',
    padding: '8px',
    width: '200px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  button: {
    margin: '10px',
    padding: '8px 16px',
    backgroundColor: 'brown',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};

export default UserLogin;
