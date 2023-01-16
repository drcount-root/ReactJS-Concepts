import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// reducer function takes two parameters -
// 1. Current State
// 2. action
// this action is we pass into dispatch function
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// whenever we call dispatch(), its going to get set to the action variable and then our current state is going to be in the state variable & reducer is going to return our new updated state

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // useReducer() takes two different parameters
  // - 1. a reducer, which is a function that we perform on our state to get a new state
  // - 2. initial state value

  // useReducer() returns an array of 2 elements -
  // 1. state
  // 2. dispatch() function, a function which we call in order to update our state. This dispatch() func going to call the reducer() function.

  const increment = function () {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = function () {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <React.Fragment>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </React.Fragment>
  );
}
