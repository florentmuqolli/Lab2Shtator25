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
      <div className="home-page-content">
        <img className="home-page-image" src={DoctorImage} alt="" />
        <div className="home-page-text">
          <h2 className="home-page-text-title">Health care</h2>
          <h2 className="home-page-text-title-second">For hole family</h2>
          <p className="home-page-text-content">
            In the healthcare sector, service excellence is the ability of a
            hospital as a healthcare service provider to consistently deliver
            high-quality care
          </p>
        </div>
      </div>
      <AboutUs/>
      <Contact/>
    </div>
  );
};

export default HomePage;

