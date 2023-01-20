import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "whitesmoke",
          padding: "32px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "#1a1a1a", marginBottom: "12px" }}>
          React Counter App with Redux
        </h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <button onClick={() => dispatch(decNumber())}>-</button>
          <span
            style={{
              fontSize: "24px",
              backgroundColor: "#1a1a1a",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            {myState}
          </span>
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
