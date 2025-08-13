import React from "react";
import "./HomePage.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-footer">
        <div className="contact-container">
          <div className="contact-content">
            <h3>Get in Touch</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@medicareplus.com">contact@medicareplus.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+18005551234">(800) 555-1234</a>
            </p>
            <p>
              <strong>Address:</strong> 1234 Medical Center Drive, Health City, HC 12345
            </p>
            <p>
              <strong>Hours:</strong> Monday - Friday: 7:00 AM - 8:00 PM
            </p>
          </div>
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215574292283!2d-73.987844924537!3d40.74844097138998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;