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
                    <img className="header-img" src={HospitalLogo} alt="Hospital Logo" />
                    <span className="hospital-name">MediCare+</span>
                </div>
                <nav className="header-content">
                    <a className="nav-link" href="#home">Home</a>
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#contact">Contact</a>
                    <button className="header-content-login" onClick={() => navigate("/nurse")}>test</button>
                    <button className="header-content-login" onClick={() => navigate("/login")}>Login</button>
                </nav>
            </div>
        </header>
    )
}
export default Header;