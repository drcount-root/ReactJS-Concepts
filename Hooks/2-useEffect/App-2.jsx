import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Now for example we wanna delete the component (unmount). We want to remove the event listener because otherwise we gonna have event listeners that hooked up & constantly been added & never actually removed, which is gonna slow down our app.

    // Fix of this is to return a cleanup function from useEffect().
    // A better example in App-3.jsx
    // This cleanup function get called whenever the useEffect() get cleaned up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This will render the dynamic value of width in the screen on first render & also on windowWidth state update as our listener attached with that

  return <div>{windowWidth}</div>;
}

export default App;
