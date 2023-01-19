import React from "react";
import { useReducer } from "react";

const ACTION = {
  ADD: "add",
  SUB: "sub",
  RESET: "reset",
  CHANGE: "change",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.SUB:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: 0 };
    case ACTION.CHANGE:
      return { count: state.count + action.payload.value };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#f43f5e",
    textAlign: "center",
    borderRadius: "7px",
    marginTop: "100px",
    fontFamily: "sans-serif",
    color: "white",
    gap: "10px",
  };

  return (
    <React.Fragment>
      <div style={style}>
        <h2>Counter App Using useReducer() hook</h2>
        <button
          style={{ padding: "10px", fontSize: "20px" }}
          onClick={() => dispatch({ type: "sub" })}
        >
          -
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
          <span style={{ padding: "10px", fontSize: "20px" }}>
            {state.count}
          </span>
          <button
            onClick={() => dispatch({ type: "change", payload: { value: 9 } })}
          >
            ADD 9
          </button>
        </div>
        <button
          style={{ padding: "10px", fontSize: "20px" }}
          onClick={() => dispatch({ type: "add" })}
        >
          +
        </button>
      </div>
    </React.Fragment>
  );
}
