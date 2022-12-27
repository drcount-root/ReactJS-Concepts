import React, { useState } from "react";
import Child from "./Child";

import { createContext } from "react";

export const ThemeContext = createContext();
// or
// export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("blue");

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Child />
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
