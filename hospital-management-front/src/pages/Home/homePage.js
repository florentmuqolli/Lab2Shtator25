import React from "react";
import Header from "./components/Header/Header";
import DoctorImage from "../../assets/doctor.jpg";
import "./home.css";
import AboutUs from "./aboutUs";
import Contact from "./contactUs";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-title-main">Health care</span>
              <span className="hero-title-sub">For the whole family</span>
            </h1>
            <p className="hero-description">
              In the healthcare sector, service excellence is the ability of a
              hospital as a healthcare service provider to consistently deliver
              high-quality care that meets and exceeds patient expectations.
            </p>
            <button className="cta-button">Book an Appointment</button>
          </div>
          <div className="hero-image-container">
            <img className="hero-image" src={DoctorImage} alt="Doctor consulting with patient" />
          </div>
        </div>
      </section>
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;