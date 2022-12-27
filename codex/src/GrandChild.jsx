import React, { useContext } from "react";
import { ThemeContext } from "./App";

const GrandChild = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <div>
        This theme is <b>{theme}</b> theme
      </div>
      <button
        onClick={() => {
          setTheme("red");
        }}
      >
        change
      </button>
    </React.Fragment>
  );
};

export default GrandChild;
