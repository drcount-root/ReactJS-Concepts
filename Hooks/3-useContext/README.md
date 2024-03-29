# What Is The Context API?

React uses state to store data and props to pass data between components. This works well for handling local state and for passing simple props between parent/child components. This system breaks down when you start to have global state or props that need to be passed to deeply nested components. With just props and state you end up having to resort to `prop drilling` which is when you pass down props through a bunch of different components so they can get to one single component far down the hierarchy.

This is where the Context API comes in. With the context API you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component. It is essentially semi-global state that is available anywhere inside the context.

```
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
```

In the above code we are creating a new context using `React.createContext`. This gives us a variable that has two parts-

1. The first part is the provider which provides a value to all components nested inside of it. In our case the value is a single object with the `darkTheme` and `setDarkTheme` properties.

```
import React from "react";
import GrandChild from "./GrandChild";

const Child = () => {
  return <GrandChild />;
};

export default Child;
```

```
Class based GrandChild component(not completed). For class based components, we need to wrap the consumers inside <ThemeContext.Consumer></ThemeContext.Consumer>
```

2. The second part is the consumer. This is what you must wrap your code in to access the value of the context. This component expects a function as the child of it and that function gives you the value of the context as the only argument for the function. Then in that function you can just return the JSX that utilizes the context.

This second part of the context is what makes context hard to work with. Having to wrap your JSX in a component which accepts a function to get the value of the context adds extra layers of nesting and mess to your code which is unavoidable in class components. Luckily, with function components we can avoid all that mess by using the `useContext` hook.

### useContext()

In order to use context in a function component you no longer need to wrap your JSX in a consumer. Instead all you need to do is pass your context to the `useContext` hook and it will do all the magic for you. Here is an example.

```
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
```

With the help of `useContext` we were able to cut out all the consumer portion of the context and remove all the complex nesting. Now context works just like a normal function where you call the context and it will give you the values inside of it for you to use later in the code. This drastically simplifies code related to context and makes working with context so much more enjoyable.

Also, setting up a context provider for use with the `useContext` hook is exactly the same as you would do for a normal context consumer, so you can use all the same code for the context provider portion of the class component example at the start of the article.
