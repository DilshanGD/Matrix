// frontend/src/pages/student/StudentSignIn.js

import React, { useState } from 'react';
import axios from 'axios';
import './css/StudentSignIn.css';

const StudentSignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('http://localhost:3005/student/student-login', {
        email,
        pwd: password,
      });
      setSuccessMessage(response.data[1]);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response ? err.response.data : 'Login failed. Please try again.');
    }
  };

  return (
    <div className="signin-popup-overlay">
      <div className="signin-popup">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="signin-title">Student Login</h2>
        <form onSubmit={handleLogin} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default StudentSignIn;
