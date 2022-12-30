import React, { useState, useReducer } from "react";

export default function App() {
  const [] = useReducer(reducer);
  // useReducer() takes two different parameters
  // - 1. a reducer, which is a function that we perform on our state to get a new state
  // - 2. initial state value

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
