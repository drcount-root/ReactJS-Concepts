import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [ini, setIni] = useState("");

  const renderCount = useRef(1);
  // useRef(1) = {current: 1}
  // useRef(1) returns a object with current property 1

  // ref doesn't cause our component re-render when it get changed

  // The useRef() Hook allows to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

  useEffect(() => {
    renderCount.current += 1;
  });

  const onInputChange = (event) => {
    setIni(event.target.value);
  };

  return (
    <React.Fragment>
      <input onChange={onInputChange} />
      <div>{`My name is ${ini}`}</div>
      <div>It rendered {renderCount.current} times</div>
    </React.Fragment>
  );
}
