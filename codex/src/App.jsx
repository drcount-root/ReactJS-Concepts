import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={decrement}>-</button>

        <span>{count}</span>

        <button onClick={increment}>+</button>
      </div>
    </React.Fragment>
  );
}
