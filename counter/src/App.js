import React from 'react'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const plusButtonClickHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  };

  return (
  <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            const newCount = count -1;
            setCount(newCount);
          }}
        >
          -
        </button>
        <button onClick={plusButtonClickHandler}>+</button>
      </div>
  </div>
  );
}

export default App
