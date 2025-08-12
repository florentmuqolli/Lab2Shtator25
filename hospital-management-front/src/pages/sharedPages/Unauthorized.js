import React from 'react';
import { Link } from 'react-router-dom';
import './Unauthorized.css'; // Create this CSS file

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <div className="unauthorized-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="unauthorized-title">Access Denied</h1>
        <p className="unauthorized-message">
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <div className="unauthorized-actions">
          <Link to="/" className="unauthorized-button">
            Return to Home
          </Link>
          <Link to="/login" className="unauthorized-button secondary">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;