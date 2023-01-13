# Why does react logs twice in console

=> Because of React uses `React.StrictMode` to future proof our code & to avoid any kind of un-intended side-effects. And that strictmode is the reason for logging twice.

If we remove the `<React.StrictMode></React.StrictMode>` tags then it will log once.

`React.StrictMode` is a tool for only the development purposes, if we push our code to production, it works as if the `React.StrictMode` is not enabled.

`React.StrictMode` is enabled in development mode so that - it's easy to find bugs & different errors in our code that react thinks it should changed.

<br>

## To fix this:

```
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [usersData, setUsersData] = useState([]);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        // console.log(data);
        const userArr = await data.results;
        console.log(userArr);
        setUsersData(userArr);
      };
      fetchData().catch((error) => console.log(error.message));
    }
    return () => {
      console.log("unmounted");
      effectRan.current = true;
    };
  }, []);

  return (
    <React.Fragment>
      <div>
        {usersData.map((user) => {
          return (
            <div
              key={user.email}
              style={{
                display: "flex",
                border: "1px solid",
                padding: "10px",
                margin: "10px",
              }}
            >
              <span>
                Name:{" "}
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </span>
              <span>DOB: {user.dob.date}</span>
              <span>Email: {user.email}</span>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
```

Resources: https://www.youtube.com/watch?v=81faZzp18NM & https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development

<br>

## React is broken into 2 different sections - 1. Render phase, 2. Commit phase

1. **Render Phase** - React runs the component and goes through and does all the calculations & determines how the JSX sholud look like. The slow phase.

2. **Commit Phase** - Find the differences between the new JSX and the Old one, and update those new parts. The quick phase.
