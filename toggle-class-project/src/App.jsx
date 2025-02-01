
import './App.css'

import{ useRef } from 'react';

const ToggleClassExample = () => {
  // Create a ref for the div element
  const divRef = useRef(null);

  //  toggle the class when the button is clicked
  const toggleClass = () => {
    // 'active' class on the div element
    divRef.current.classList.toggle('active');
  };

  return (
    <div>
      <h1>Toggle Class on a DOM Element</h1>
      <div
        ref={divRef}
        className="box"
      >
      </div> 
      <button onClick={toggleClass}>Toggle</button>
    </div>
  );
};

export default ToggleClassExample;
