import React from "react";
import { ThemeContext } from "./App";
import { useContext } from "react";

const GrandChild = () => {
  const darkTheme = useContext(ThemeContext);

  const theme = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  return (
    <React.Fragment>
      <div style={theme}>
        <h2>Heading</h2>
        <p>Content Paragraph</p>
      </div>
    </React.Fragment>
  );
};

export default GrandChild;
