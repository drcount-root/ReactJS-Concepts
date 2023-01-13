// import React from "react";
// import DataComponent from "./Components/DataComponent";

// function App() {
//   return (
//     <React.Fragment>
//       <DataComponent />
//     </React.Fragment>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('oh man!')
  },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}