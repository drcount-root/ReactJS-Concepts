import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  const decrHandle = () =>
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });

  const incrHandle = () =>
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });

  //
  //
  // Doing this way will override the initial state with the return state

  // const decrHandle = () =>
  //   setState((prevState) => {
  //     return { count: prevState.count - 1 };
  //   });

  // const incrHandle = () =>
  //   setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });

  return (
    <>
      <button onClick={decrHandle}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrHandle}>+</button>
    </>
  );
}

export default App;
