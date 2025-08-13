import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './AuthPage.css';

const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => setIsRegister((prev) => !prev);

  return (
    <div className="auth-container">
      <div className="auth-image-container">
        <div className="auth-image-content">
          <h2>Quality Healthcare</h2>
          <p>
            {isRegister 
              ? 'Join our network of healthcare professionals and patients'
              : 'Access your personalized healthcare dashboard'}
          </p>
        </div>
      </div>
      
      <div className="auth-form-container">
        <button className="auth-back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft />
          Back
        </button>
        
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1>{isRegister ? 'Create Account' : 'Welcome Back'}</h1>
            <p>
              {isRegister 
                ? 'Join our healthcare community today' 
                : 'Sign in to access your account'}
            </p>
          </div>
          
          {isRegister ? (
            <RegisterForm onRegisterComplete={toggleForm} />
          ) : (
            <LoginForm />
          )}
          
          <div className="auth-footer">
            <span>
              {isRegister ? 'Already have an account?' : "Don't have an account?"}
              <button className="toggle-btn" onClick={toggleForm}>
                {isRegister ? ' Sign In' : ' Register'}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;