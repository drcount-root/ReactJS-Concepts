// Why React doesn't update state immediately

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("initial");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("initial");

  const [inputText, setInputText] = useState("");

  // to capture updated values in 1st button click after initial render
  useEffect(() => {
    console.log("from 1st useEffect : " + name, age, address);
  }, [name, age, address]);

  const handleClick = () => {
    setName("updated");
    console.log("from handleClick : " + name);

    setAge(25);
    console.log("from handleClick : " + age);

    setAddress("updated");
    console.log("from handleClick : " + address);
  };

  useEffect(() => {
    if (inputText === "caveat") {
      console.log(
        "Text Matched from useEffect() : Caveat of useState() get captured"
      );
    }
  }, [inputText]);

  const inputChangeHandler = (event) => {
    setInputText(event.target.value);

    if (inputText === "caveat") {
      console.log("After state updater function");
    }
  };

  return (
    <React.Fragment>
      <div>
        <p>
          DB: {name} {age} {address}
        </p>
        <button onClick={handleClick}>Click</button>
      </div>
      <hr />
      <div>
        <input value={inputText} onChange={inputChangeHandler} />
      </div>
    </React.Fragment>
  );
};

export default App;

// initial rendering will log initial values of all the state varibales (from line number 16)

// first time button click will log (line - 21, 24, 27) the initial values of all state variables. But render all updated values. But log (line - 16) from the useEffect will logs all updated values.

// second time button click will log (line - 21, 24, 27) the updated values of all state variables.

// Why that?
// =>
// Because, react checks all the requested updates & completes the updates and then render them at once.

// When we type 'caveat' in the input section, in the console it will log 'Text Matched from useEffect() : Caveat of useState() get captured' from line 33 (2nd useEffect)

// But when we type something after 'caveat' or delete something after typing 'caveat' in the input section, it will log 'After state updater function'.

// using useEffect is the fix for that type of behaviour. (line 30-36)
