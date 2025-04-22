import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isEmailValid = validator.isEmail(email);
    const isPasswordValid = password.length >= 8;

    setErrors({
      email: email && !isEmailValid ? 'Invalid email format' : '',
      password: password && !isPasswordValid ? 'Password must be at least 8 characters' : '',
    });

    setIsSubmitDisabled(!(isEmailValid && isPasswordValid));
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"  
            id="email"
            placeholder="e.g  kelly@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className='error-message'>{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button
          type='submit'
          disabled={isSubmitDisabled}
          className={`submit-btn ${isSubmitDisabled ? 'disabled' : ''}`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;