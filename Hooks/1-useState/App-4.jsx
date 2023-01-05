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

  // Note that when passing an object or array as the initial state, it's important to remember that the state value is a reference to the object or array. This means that if you update the state value using a function like setUser or setFriends, the reference to the object or array will change, but the object or array itself will not. If you want to update the object or array itself, you'll need to create a new object or array and pass it to the update function.

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
