import React, { useState } from 'react';
import { registerUser } from '../../services/requests/auth';

const RegisterForm = ({ onRegisterComplete }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    imageUrl: '',
    status: 'ACTIVE',
    role: 'USER',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
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
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      phoneNumber: true,
      imageUrl: true
    });

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await registerUser(formData);
      console.log('Registration successful:', response);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        imageUrl: '',
        status: 'ACTIVE',
        role: 'USER',
      });
      onRegisterComplete();
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.firstName && errors.firstName ? 'error' : ''}`}
          />
          {touched.firstName && errors.firstName && (
            <div className="error-message">{errors.firstName}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.lastName && errors.lastName ? 'error' : ''}`}
          />
          {touched.lastName && errors.lastName && (
            <div className="error-message">{errors.lastName}</div>
          )}
        </div>

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
            placeholder="Create a password (min 6 characters)"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.password && errors.password ? 'error' : ''}`}
          />
          {touched.password && errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.phoneNumber && errors.phoneNumber ? 'error' : ''}`}
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <div className="error-message">{errors.phoneNumber}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Profile Image URL</label>
          <input
            id="imageUrl"
            type="text"
            name="imageUrl"
            placeholder="Optional: Paste your image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${touched.imageUrl && errors.imageUrl ? 'error' : ''}`}
          />
          {touched.imageUrl && errors.imageUrl && (
            <div className="error-message">{errors.imageUrl}</div>
          )}
        </div>

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;