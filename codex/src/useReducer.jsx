import React, { useState, useReducer } from "react";

const reducer = (state, action) => {};
// reducer function takes two parameters - 1. Current State, 2. action
// this action is we pass into dispatch function

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // this dispatch function is what we call in order to update our state. Essentially it's going to call our reducer function on line - 3.

  // Whenever we call dispatch function, its gonna get set to the action variable

  // const [count, dispatch] = useReducer(reducer, 0);
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
