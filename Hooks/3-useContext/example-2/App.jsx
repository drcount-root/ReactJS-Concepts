import React, { useState } from "react";
import Child from "./Child";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Child />
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
