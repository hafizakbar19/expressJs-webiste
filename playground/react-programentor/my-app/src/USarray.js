import React, { useState } from 'react';

function USarray() {
  // Initial array
  const num = [11, 22, 33, 44];

  // State to hold the array
  const [number, setNumber] = useState(num);

  // Handler to change the second element in the array
  const changeHandler = () => {
    setNumber((prev) => {
      // Create a new array with the updated value
      const newArray = [...prev];
      newArray[1] = 5;
      return newArray;
    });
  };

  return (
    <div>
      {/* Render the numbers from the state */}
      {number.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
      <button onClick={changeHandler}>Change</button>
    </div>
  );
}

export default USarray;
