// frontend/src/pages/student/components/StudentSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './css/StudentSidebar.css';

const StudentSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Student Dashboard</h2>
      </div>

      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/subjects" className="sidebar-link">Subjects</Link>
        </li>
        <li>
          <Link to="/timetable" className="sidebar-link">Timetable</Link>
        </li>
        <li>
          <Link to="/courses" className="sidebar-link">My Courses</Link>
        </li>
        <li>
          <Link to="/profile" className="sidebar-link">My Profile</Link>
        </li>
        <li>
          <Link to="/payments" className="sidebar-link">Payments</Link>
        </li>
        <li>
          <button className="sidebar-link logout-btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default StudentSidebar;
