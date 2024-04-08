// components/Login.js
import React from 'react';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);

    //Adding Identify Call
  useEffect(() => {
    // Ensure Aptrinsic script is loaded
    if (window.aptrinsic) {
      // Call Aptrinsic identify function on successful login
      window.aptrinsic("identify", {
        "id": "skpadala@gainsight.com",
        "email": "skpadala@gainsight.com",
        "firstName": "Padala",
        "lastName": "Sai"
      }, {
        "id": "12345",
        "name": "BMW"
      });
    }
  }, []); // Run once on component mount


  };

  if (isLoggedIn) {
    return null;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
