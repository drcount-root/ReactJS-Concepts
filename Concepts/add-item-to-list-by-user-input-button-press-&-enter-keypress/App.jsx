import React, { useState } from "react";
import "./App.css";

function App() {
  // to keep track of list items
  const [lists, setLists] = useState([]);
  // to keep track of user input in the input label
  const [text, setText] = React.useState("");

  // fires on every time (every keypress) user input in the input label
  const userInputChange = (event) => {
    setText(event.target.value);
  };

  // triggered on button submit
  const addNewItemHandler = () => {
    setLists((prevList) => {
      return [...prevList, text];
    });

    setText("");
  };

  // triggered on 'enter' key press
  const enterKeyPressaddNewItem = (event) => {
    if (event.key === "Enter") {
      setLists((prevList) => {
        return [...prevList, text];
      });

      setText("");
    }
  };

  return (
    <React.Fragment>
      <h2>Add Items</h2>
      <ul>
        {lists.map((list) => {
          return <li key={Math.random()}>{list}</li>;
        })}
      </ul>

      <input
        value={text}
        onChange={userInputChange}
        onKeyPress={enterKeyPressaddNewItem}
      />

      <button onClick={addNewItemHandler}>Add new</button>
    </React.Fragment>
  );
}

export default App;
