// frontend/src/components/HomeNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './css/HomeNavbar.css';

const HomeNavbar = ({ logo }) => {
  return (
    <nav className="navbar">
      {logo ? (
        <img src={logo} alt="Matrix Logo" className="logo" />
      ) : (
        <p>Loading logo...</p>
      )}

      <ul className="nav-links">
        <li><Link to="/strict/teachers">Teacher</Link></li>
        <li><Link to="/strict/timetable">TimeTable</Link></li>
        <li><Link to="/strict/library">Library</Link></li>
        <li><Link to="/strict/blogs">Blog</Link></li>
        <li><Link to="/strict/tips">Tips</Link></li>
        <li><Link to="/strict/contact">Contact Us</Link></li>
      </ul>

      <Link to="/sign-in">
        <button className="sign-in">Sign In</button>
      </Link>
    </nav>
  );
};

export default HomeNavbar;
