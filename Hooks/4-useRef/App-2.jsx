import React, { useState, useRef } from "react";

export default function App() {
  const [name, setName] = useState("");

  const inputRef = useRef();

  // useRef() allows to directly create a reference to the DOM element in the functional component.

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      {/* Now whenever inputRef get rendered on the screen, it's going to set inputRef variable equal to this input dom element*/}
      <input ref={inputRef} onChange={onInputChange} />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </React.Fragment>
  );
}
