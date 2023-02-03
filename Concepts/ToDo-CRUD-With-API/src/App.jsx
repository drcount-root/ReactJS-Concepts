import React, { useState, useEffect } from "react";

function App() {

  const [log, setLog] = useState('');

  let r = false;

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("http://localhost:3000/results");
      const data = response.data();
      console.log(data);
    };

    if (!r) {
      fetcher().catch((err) => err.message);
    }

    return () => {
      r = true;
    };
  }, []);

  return (
    <React.Fragment>
      <h1>App</h1>
    </React.Fragment>
  );
}

export default App;
