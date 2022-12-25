import React, { useState } from "react";
import "./App.css";

function countInitial() {
  console.log("run function every time component renders");
  return 0; // initial value
}

function App() {
  const [count, setCount] = useState(() => countInitial());

  // Now this time countInitial() function get called only the first time component renders

  //
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
