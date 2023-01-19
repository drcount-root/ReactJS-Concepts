import React from "react";
import "./App.css";
import { useReducer } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

const ACTIONS = {
  add: "add",
  sub: "sub",
  mul: "mul",
  div: "div",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.add:
      return { count: state.count + action.payload.val };
    case ACTIONS.sub:
      return { count: state.count - action.payload.val };
    case ACTIONS.mul:
      return { count: state.count * action.payload.val };
    case ACTIONS.div:
      return { count: state.count / action.payload.val };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <React.Fragment>
      <button
        onClick={() => {
          dispatch({ type: "div", payload: { val: 2 } });
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub", payload: { val: 2 } });
        }}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        onClick={() => {
          dispatch({ type: "add", payload: { val: 2 } });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "mul", payload: { val: 2 } });
        }}
      >
        *
      </button>
    </React.Fragment>
  );
};
