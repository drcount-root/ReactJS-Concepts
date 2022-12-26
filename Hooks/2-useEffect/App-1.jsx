import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  //
  //
  //
  //

  // useEffect(() => {
  //   console.log(resourceType + " get clicked");
  // }, [resourceType]);

  // here the log happens when component get mounted for the first time & only when the resourceType state variable get changed (updated)

  //
  //
  //
  //

  // useEffect(() => {
  //   console.log("render");
  // }, []);

  // render get logged to console only the first time component get mounted, as we are setting empty array of dependencies.

  //
  //
  //
  //

  // useEffect(() => {
  //   console.log("render");
  // });

  // render get logged to console every time component get mounted & re-rendered (updated). As we are not setting the dependencies array.

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default App;
