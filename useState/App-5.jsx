import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

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
      <span>{theme}</span>
      <button onClick={incrHandle}>+</button>
    </>
  );
}

export default App;
