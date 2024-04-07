import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import Dropdown from './components/Dropdown';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <Router>
      <div>
        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/dropdown">Dropdown</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dropdown" element={isLoggedIn ? <Dropdown /> : <Navigate to="/" />} />
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import './App.css';

// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import LoginForm from './components/LoginForm';
// import Logout from './components/Logout';
// import Dropdown from './components/Dropdown';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             {!isLoggedIn && (
//               <li>
//                 <Link to="/login">Login</Link>
//               </li>
//             )}
//             {isLoggedIn && (
//               <>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                   <Link to="/dropdown">Dropdown</Link>
//                 </li>
//                 <li>
//                   <Link to="/logout">Logout</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
//           <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
//           <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/dropdown" element={isLoggedIn ? <Dropdown /> : <Navigate to="/" />} />
//           <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



