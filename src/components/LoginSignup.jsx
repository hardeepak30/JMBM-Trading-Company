import React, { useState } from 'react';
import '../styles/LoginSignup.css';  // Custom CSS file for styling
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between Login and Signup
    const navigate = useNavigate();
  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleClick = (e)=>{
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-heading">{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form className="auth-form">
          <div className="input-group">
            <input
              type="email"
              className="auth-input"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              required
            />
          </div>

          {!isLogin && (
            <div className="input-group">
              <input
                type="password"
                className="auth-input"
                placeholder="Confirm Password"
                required
              />
            </div>
          )}

          <button onClick={handleClick} type="submit" className="auth-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="switch-container">
          <p>
            {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
            <span className="switch-btn" onClick={handleSwitch}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
