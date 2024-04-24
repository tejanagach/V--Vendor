import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src="/img/Vendor.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>
      <h2 style={styles.title}>About Page</h2>
      <div style={styles.roleContainer}>
        <div style={styles.roleSection}>
          <h3 style={styles.roleTitle}>Choose Your Role</h3>
          <button style={styles.button} onClick={() => console.log('Vendor selected')}>
            <Link to="/vendorLogin" style={styles.link}>Vendor Login</Link>
          </button>
          <button style={styles.button} onClick={() => console.log('Vendor selected')}>
            <Link to="/vendorSignup" style={styles.link}>Vendor Signup</Link>
          </button>
          <button style={styles.button} onClick={() => console.log('User selected')}>
            <Link to="/userLogin" style={styles.link}>User Login</Link>
          </button>
          <button style={styles.button} onClick={() => console.log('User selected')}>
            <Link to="/userSignup" style={styles.link}>User Signup</Link>
          </button>
        </div>
        <div style={styles.processSection}>
          <img
            src="/img/Designer.png"
            alt="Vendor Process"
            style={styles.processImage}
          />
          <div style={styles.processOverlay}>
            <h3 style={styles.processTitle}>Our Process</h3>
            <p style={styles.processDescription}>
              Our Platform is designed with a user-friendly interface that makes it easy for vendors to set up their shops, manage inventory, and connect with potential customers. Customers, on the other hand, have a diverse range of products to choose from, with a seamless checkout process.
            </p>
          </div>
        </div>
      </div>
      <div style={styles.aboutText}>
        <p style={styles.aboutDescription}>
          "OurPlatform" aims to provide a seamless experience for both vendors and customers, with a diverse range of products and a secure checkout process.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f2e8d3', // Vintage background color
    padding: '20px',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '200px',
    height: 'auto',
    borderRadius: '50%',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: '3rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '20px',
  },
  roleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '50px',
  },
  roleSection: {
    flexBasis: '40%',
    textAlign: 'left',
  },
  roleTitle: {
    color: '#333',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  processSection: {
    flexBasis: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative',
  },
  processImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  processOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    opacity: '0',
  },
  processTitle: {
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  processDescription: {
    fontSize: '1.2rem',
  },
  aboutText: {
    marginTop: '50px',
    textAlign: 'center',
  },
  aboutDescription: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default About;
