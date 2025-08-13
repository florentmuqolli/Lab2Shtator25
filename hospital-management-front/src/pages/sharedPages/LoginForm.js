import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/requests/auth';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) newErrors.password = 'Password is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await loginUser(formData);
      const token = response.token;
      
      if (token) {
        localStorage.setItem('authToken', token);
        const { role } = JSON.parse(atob(token.split('.')[1]));
        
        switch(role) {
          case 'DOCTOR': navigate('/doctor'); break;
          case 'NURSE': navigate('/nurse'); break;
          case 'PATIENT': navigate('/patient'); break;
          case 'ADMIN': navigate('/admin'); break;
          default: navigate('/unauthorized');
        }
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
          placeholder="your@email.com"
        />
        {touched.email && errors.email && (
          <span className="error-message">{errors.email}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.password && errors.password ? 'error' : ''}`}
          placeholder="••••••••"
        />
        {touched.password && errors.password && (
          <span className="error-message">{errors.password}</span>
        )}
      </div>

      {errorMessage && (
        <div className="error-message" style={{ textAlign: 'center' }}>
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;