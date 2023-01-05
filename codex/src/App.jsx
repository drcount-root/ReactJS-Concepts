// Why React doesn't update state immediately

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  // const [name, setName] = useState("initial");
  // const [age, setAge] = useState(0);
  // const [address, setAddress] = useState("initial");

  const [inputText, setInputText] = useState("");

  // useEffect(() => {
  //   console.log(name, age, address);
  // }, [name, age, address]);

  // const handleClick = () => {
  //   setName("updated");
  //   console.log(name);

  //   setAge(25);
  //   console.log(age);

  //   setAddress("updated");
  //   console.log(address);
  // };

  useEffect(() => {
    if (inputText === "caveat") {
      console.log("Caveat of useState() get captured");
    }
  }, [inputText]);

  const inputChangeHandler = (event) => {
    setInputText(event.target.value);

    // if (inputText === "caveat") {
    //   console.log("Caveat of useState() get captured");
    // }
  };

  return (
    <React.Fragment>
      <div>
        <p>{/* DB: {name} {age} {address} */}</p>
        {/* <button onClick={handleClick}>Click</button> */}
      </div>
      <div>
        <input value={inputText} onChange={inputChangeHandler} />
      </div>
    </React.Fragment>
  );
};

export default App;

// first time button click will log (line - 18, 21, 24) the initial values of all state variables. But render all updated values. But log (line - 13) from the useEffect will logs all updated values.

// second time button click will log (line - 18, 21, 24) the updated values of all state variables.

// Why that?
// =>
// Because, react checks all the requested updates & completes the updates and then render them at once.
