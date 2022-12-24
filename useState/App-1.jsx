import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // we can do this bellow, but this will cause bugs
  // const decrHandle = () => setCount(count-1);

  //
  //
  //
  //

  // good way to update state, depending on previous value is to use callback inside setState function
  const decrHandle = () => setCount((prevCount) => prevCount - 1);

  const incrHandle = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <button onClick={decrHandle}>-</button>
      <span>{count}</span>
      <button onClick={incrHandle}>+</button>
    </>
  );
}

export default App;
