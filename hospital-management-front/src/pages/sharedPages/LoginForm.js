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
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      email: true,
      password: true
    });

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await loginUser(formData);
      const token = response.token; 
  
      if (token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const decodedPayload = JSON.parse(atob(base64));
        const role = decodedPayload.role;
  
        localStorage.setItem('authToken', token);
  
        if (role === 'DOCTOR') {
          navigate('/doctor/');
        } else if (role === 'NURSE') {
          navigate('/nurse/');
        } else if (role === 'PATIENT') {
          navigate('/patient/');
        } else if (role === 'ADMIN') {
          navigate('/admin/');
        } else {
          navigate('/unauthorized');
        }
      } else {
        console.log('No token found in response');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.email && errors.email ? 'error' : ''}`}
        />
        {touched.email && errors.email && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.password && errors.password ? 'error' : ''}`}
        />
        {touched.password && errors.password && (
          <div className="error-message">{errors.password}</div>
        )}
      </div>

      {errorMessage && (
        <div className="error-message" style={{ textAlign: 'center', marginTop: '-0.5rem' }}>
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        className="submit-button" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Sign In'}
      </button>
    </form>
  );
};

export default LoginForm;