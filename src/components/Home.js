// components/Home.js

import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Homepage'; // Set the page title
  }, []);

  return(
    <div>
      <h1>Welcome to Homepage</h1>
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </div>
  );
};

export default Home;



// import React from 'react';

// const Home = () => (

//   <div>
//     <h1>Welcome to Home Page</h1>
//     <button>Button 1</button>
//     <button>Button 2</button>
//     <button>Button 3</button>
//   </div>
// );

// export default Home;
