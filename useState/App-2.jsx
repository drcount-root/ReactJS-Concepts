import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    console.log("run function only first time component renders");
    return 0; // This whole callback runs only the first time this App component get renders
    // And the initial value is set by return keyword
  });

  //
  //
  //
  //

  // Now what if we do, the below function setup outside of our component function

  // function countInitial() {
  //   console.log("run function every time component renders");
  //   return 0; // initial value
  // }

  // Then if we setup our state like this, inside our component function

  // const [count, setCount] = useState(countInitial());

  // Then the countInitial() function will run every time component renders & re-renders
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
