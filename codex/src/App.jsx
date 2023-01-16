import React, { useState, useReducer } from "react";



const reducer = () => {

}

export default function App() {
  const [count, ] = useReducer(reducer, {count: 0})
  const [count, setCount] = useState(0);

  const increment = function () {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = function () {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <React.Fragment>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </React.Fragment>
  );
}
