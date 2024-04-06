// // components/Logout.js
// components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  // Render only the logout button
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   return (
//     <div>
//       <h2>Logout Page</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Logout;




// import React from 'react';

// const Logout = ({ setIsLoggedIn }) => {
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <div>
//       <h2>Logout Page</h2>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Logout;
