import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column", backgroundColor:'whitesmoke', padding: '32px', borderRadius: '10px'}}>
        <h2 style={{color: '#1a1a1a'}}>React Counter App with Redux</h2>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:'gray',
            padding: '15px',
            borderRadius: '10px'
          }}
        >
          <button>-</button>
          <span style={{fontSize: '24px', backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '8px'}}>0</span>
          <button>+</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
