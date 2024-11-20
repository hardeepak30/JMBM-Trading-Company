import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup
  const navigate = useNavigate();

  const onchange = (e) => {
    localStorage.setItem('name', e.target.value);
  }
  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
      fontFamily: 'Arial, sans-serif',
    },
    box: {
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      width: '90%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#444',
      marginBottom: '20px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#ff6b6b',
    },
    btn: {
      width: '100%',
      padding: '10px',
      background: '#ff6b6b',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    btnHover: {
      background: '#ff4c4c',
    },
    switchContainer: {
      marginTop: '15px',
    },
    switchBtn: {
      color: '#ff6b6b',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginLeft: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          <div style={styles.inputGroup}>
            <input
              type="email"
              style={styles.input}
              onChange={onchange}
              placeholder="Email Address"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              style={styles.input}
              placeholder="Password"
              required
            />
          </div>

          {!isLogin && (
            <div style={styles.inputGroup}>
              <input
                type="password"
                style={styles.input}
                placeholder="Confirm Password"
                required
              />
            </div>
          )}

          <button
            onClick={handleClick}
            type="submit"
            style={styles.btn}
            onMouseEnter={(e) => (e.target.style.background = styles.btnHover.background)}
            onMouseLeave={(e) => (e.target.style.background = styles.btn.background)}
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div style={styles.switchContainer}>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span style={styles.switchBtn} onClick={handleSwitch}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
