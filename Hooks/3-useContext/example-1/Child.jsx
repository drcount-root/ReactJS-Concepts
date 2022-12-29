import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return (
    <React.Fragment>
      <GrandChild />
    </React.Fragment>
  );
};

export default Child;
