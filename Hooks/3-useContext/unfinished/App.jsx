import React from "react";
import Child from "./Child";

import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Child />
      </ThemeProvider>
    </React.Fragment>
  );
}
