import React from "react";
import "./Header.css";
import HospitalLogo from "../../../../assets/hospital-icon.webp";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header-container">
            <div className="header">
                <div className="logo-container" onClick={() => navigate("/")}>
                    <img className="header-img" src={HospitalLogo} alt="MediCare+ Logo" />
                    <span className="hospital-name">MediCare+</span>
                </div>
                <nav className="header-nav">
                    <a className="nav-link" href="#home">Home</a>
                    <a className="nav-link" href="#about">Services</a>
                    <a className="nav-link" href="#contact">Contact</a>
                    <button className="nav-button" onClick={() => navigate("/login")}>
                        Access
                    </button>
                </nav>
            </div>
        </header>
    )
}
export default Header;