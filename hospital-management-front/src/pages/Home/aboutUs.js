import React from "react";
import Card from "../../components/branchCard/branchCard";
import { data } from "./helper";
import "./HomePage.css";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">Our Specialties</h2>
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;