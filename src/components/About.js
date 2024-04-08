// components/About.js
import React, { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    document.title = 'About Page'; // Set the page title
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <button>Button A</button>
      <button>Button B</button>
      <button>Button C</button>
    </div>   
  );
};

export default About;
