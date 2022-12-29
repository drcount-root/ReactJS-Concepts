import React from "react";
import Child from "./Child";
import { useState } from "react";

export const ThemeContext = React.createContext();

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={darkTheme}>
        <Child />
        <button onClick={changeTheme}>Enable DarkMode</button>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
