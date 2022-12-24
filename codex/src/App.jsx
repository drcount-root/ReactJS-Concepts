import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");
  const [even, setEven] = useState("Even");

  useEffect(() => {
    if (count === 0) setEven("Neither Odd nor Even");
    else if (count % 2 === 0) setEven("Even");
    else setEven("Odd");
  }, [count]);

  const decrHandle = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("red");
  };

  const incrHandle = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("blue");
  };

  return (
    <>
      <button onClick={decrHandle}>-</button>
      <span>{count}</span>
      <span>{` ${theme} + ${even} `}</span>
      <button onClick={incrHandle}>+</button>
    </>
  );
}

export default App;
