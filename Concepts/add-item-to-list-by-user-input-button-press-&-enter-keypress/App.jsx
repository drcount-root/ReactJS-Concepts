import React, { useState } from "react";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);

  const [text, setText] = React.useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  const addNewEventHandler = () => {
    setLists((prevList) => {
      return [...prevList, text];
    });

    setText("");
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
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setLists((prevList) => {
              return [...prevList, text];
            });

            setText("");
          }
        }}
      />

      <button onClick={addNewEventHandler}>Add new</button>
    </React.Fragment>
  );
}

export default App;
