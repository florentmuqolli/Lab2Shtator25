import React from 'react';
import nurseimage from '../../assets/nurseimage.jpg';
import './NurseDashboard.css';

const NurseDashboard = () => {
  return (
    <div className="patient-dashboard">
      <main 
        className="main-content" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${nurseimage})`
        }}
      >
        <header className="header">
          <h1>Welcome, Nurse</h1>
          <p>Your career at your fingertips</p>
        </header>
        
        <section id="overview" className="section">
          <h2>Overview</h2>
          <div className="card-container">
            <div className="card">
              <h3>Upcoming Shifts</h3>
              <p>View your scheduled working days</p>
            </div>
            <div className="card">
              <h3>Messages</h3>
              <p>You have 2 new messages</p>
            </div>
            <div className="card">
              <h3>Updates</h3>
              <p>No new updates available</p>
            </div>
          </div>
        </section>
        
        <section id="appointments" className="section">
          <h2>Appointments</h2>
          <div className="card-container">
            <div className="card">
              <h3>Manage Appointments</h3>
              <p>Review and schedule patient appointments</p>
            </div>
            <div className="card">
              <h3>Today's Schedule</h3>
              <p>View your daily patient roster</p>
            </div>
          </div>
        </section>
        
        <section id="records" className="section">
          <h2>Medical Records</h2>
          <div className="card-container">
            <div className="card">
              <h3>Patient Records</h3>
              <p>Access and update medical records</p>
            </div>
            <div className="card">
              <h3>Medication Logs</h3>
              <p>Document administered medications</p>
            </div>
          </div>
        </section>
        
        <section id="profile" className="section">
          <h2>Profile & Settings</h2>
          <div className="card-container">
            <div className="card">
              <h3>My Profile</h3>
              <p>Update your personal information</p>
            </div>
            <div className="card">
              <h3>Account Settings</h3>
              <p>Change password and preferences</p>
            </div>
          </div>
        </section>
        
        <section id="support" className="section">
          <h2>Support & Resources</h2>
          <div className="card-container">
            <div className="card">
              <h3>Help Center</h3>
              <p>Access tutorials and guides</p>
            </div>
            <div className="card">
              <h3>Contact Admin</h3>
              <p>Reach out for assistance</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NurseDashboard;