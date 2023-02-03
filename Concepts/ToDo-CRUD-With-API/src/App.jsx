import React, { useState, useEffect } from "react";

function App() {
  const [log, setLog] = useState({});

  let r = false;

  useEffect(() => {
    if (!r) {
      const fetcher = async () => {
        const response = await fetch("http://localhost:3000/db");
        const data = await response.json();
        setLog(data.results[0]);
        console.log(data);
        console.log(data.results[0]);
      };

      fetcher().catch((err) => err.message);
    }

    return () => {
      r = true;
    };
  }, []);

  return (
    <React.Fragment>
      <h1>App</h1>
      <div>{log}</div>
    </React.Fragment>
  );
}

export default App;
