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
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
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
      await registerUser(formData);
      onRegisterComplete();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.firstName && errors.firstName ? 'error' : ''}`}
          placeholder="John"
        />
        {touched.firstName && errors.firstName && (
          <span className="error-message">{errors.firstName}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.lastName && errors.lastName ? 'error' : ''}`}
          placeholder="Doe"
        />
        {touched.lastName && errors.lastName && (
          <span className="error-message">{errors.lastName}</span>
        )}
      </div>

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

      <div className="form-group">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.phoneNumber && errors.phoneNumber ? 'error' : ''}`}
          placeholder="(123) 456-7890"
        />
        {touched.phoneNumber && errors.phoneNumber && (
          <span className="error-message">{errors.phoneNumber}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl" className="form-label">Profile Image URL (Optional)</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${touched.imageUrl && errors.imageUrl ? 'error' : ''}`}
          placeholder="https://example.com/photo.jpg"
        />
        {touched.imageUrl && errors.imageUrl && (
          <span className="error-message">{errors.imageUrl}</span>
        )}
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default RegisterForm;