import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed"); // logs 2nd

    return () => {
      console.log("return from resource chnage"); // logs 1st
    };
  }, [resourceType]);

  // The return code runs first then the actual setup code. That happens as the return code is essentially setup for the cleanup. So every single time the useEffect() run, whatever in return get ran first, to cleanup whatever we did last time.

  // And when the component get unmounted or deleted from our app then also the return get called.

  // Anytime we want any side-effect to occur - when componnet mounts, unmounts, variable changed, state changes, props changes, when anything updates and we want to do something, this is where useEffect() is going to be used for.

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
