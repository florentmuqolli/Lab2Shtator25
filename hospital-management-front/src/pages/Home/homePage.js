import React from "react";
import Header from "./components/Header/Header";
import DoctorImage from "../../assets/doctor.jpg";
import "./HomePage.css";
import AboutUs from "./aboutUs";
import Contact from "./contactUs";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Exceptional Healthcare</span>
              <span>For Your Whole Family</span>
            </h1>
            <p className="hero-description">
              Our medical center provides comprehensive, patient-centered care with 
              the highest standards of service excellence and cutting-edge technology.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Book an Appointment</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={DoctorImage} alt="Doctor consulting with patient" />
          </div>
        </div>
      </section>

      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;