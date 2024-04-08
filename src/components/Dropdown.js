// components/Dropdown.js
import React, { useEffect } from 'react';

const Dropdown = () => {
  useEffect(()=>{
    document.title = 'Dropdown Page';
  },[]);

  return(

    <div>
      <select>
        <option value="value1">Value 1</option>
        <option value="value2">Value 2</option>
        <option value="value3">Value 3</option>
      </select>
    </div>

  );
};

export default Dropdown;
