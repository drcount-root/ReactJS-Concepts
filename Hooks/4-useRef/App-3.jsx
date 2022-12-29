import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");

  const prevName = useRef("");

  // Another great usecase of useRef() hook is to store the previous value of any state

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <React.Fragment>
      <input onChange={onInputChange} />
      <div>
        My name is <strong>{name}</strong>(current) and it used to be{" "}
        <strong>{prevName.current}</strong>(previous)
      </div>
    </React.Fragment>
  );
}
