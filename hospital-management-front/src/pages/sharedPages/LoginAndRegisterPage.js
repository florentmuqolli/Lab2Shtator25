import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './LoginRegisterPage.css';
import RegisterForm from './SignInForm';

const LoginRegisterPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister((prev) => !prev);

  return (
    <div className="auth-page">
      <div className="auth-image"></div>
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="auth-title">{isRegister ? 'Create Account' : 'Welcome Back'}</h1>
          <p className="auth-subtitle">
            {isRegister ? 'Join our healthcare community' : 'Sign in to access your account'}
          </p>
        </div>
        {isRegister ? (
          <RegisterForm onRegisterComplete={toggleForm} />
        ) : (
          <LoginForm />
        )}
        <div className="auth-footer">
          <p>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <button className="toggle-button" onClick={toggleForm}>
              {isRegister ? ' Sign In' : ' Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;