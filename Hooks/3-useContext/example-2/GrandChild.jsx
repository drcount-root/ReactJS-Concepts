import React, { useContext } from "react";
import { ThemeContext } from "./App";

const GrandChild = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const theme = {
    color: darkTheme ? "white" : "black",
    backgroundColor: darkTheme ? "black" : "white",
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <React.Fragment>
      <div style={theme}>
        <h2>Dark Theme Toggler</h2>
        <p>This is a paragraph,</p>
      </div>
      <button onClick={toggleTheme}>{`${
        darkTheme ? "Disable" : "Enable"
      } Dark Theme`}</button>
    </React.Fragment>
  );
};

export default GrandChild;
