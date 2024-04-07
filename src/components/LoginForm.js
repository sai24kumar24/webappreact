// components/LoginForm.js
// components/LoginForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file for the login form styles

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Here, you would perform actual authentication logic
    // For simplicity, I'm just checking if both username and password are non-empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);      
      navigate('/');
    }
  };

  
  // Add animation when the component mounts
  useEffect(() => {
    const formContainer = document.querySelector('.login-form-container');
    formContainer.classList.add('visible');
  }, []);

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Here, you would perform actual authentication logic
//     // For simplicity, I'm just checking if both username and password are non-empty
//     if (username.trim() !== '' && password.trim() !== '') {
//       setIsLoggedIn(true);
//       navigate('/');
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginForm;



