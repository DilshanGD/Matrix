// frontend/src/pages/student/components/StudentTopbar.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/StudentTopbar.css';

const StudentTopbar = () => {
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch student topbar data from the API
    const fetchStudentData = async () => {
      try {
        const response = await axios.post('http://localhost:3005/student/student-topbar', {}, {
          withCredentials: true, // To ensure session is sent along
        });
        setStudentData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : 'Failed to load student data');
      }
    };

    fetchStudentData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!studentData) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="student-topbar">
      {/* Left side: Navigation Logo */}
      <div className="nav-logo">
        <img src={`http://localhost:3005/${studentData.nav_logo}`} alt="Navigation Logo" className="nav-logo-img" />
      </div>

      {/* Middle: Student Full Name and Reg Number */}
      <div className="student-info">
        <p className="student-full-name">{studentData.full_name}</p>
        <p className="student-reg-no">{studentData.reg_no}</p>
      </div>

      {/* Right side: Profile Picture */}
      <div className="profile-pic">
        <img
          src={`http://localhost:3005/${studentData.profile_pic}`}
          alt={`${studentData.full_name}'s profile`}
          className="profile-pic-img"
        />
      </div>
    </div>
  );
};

export default StudentTopbar;
