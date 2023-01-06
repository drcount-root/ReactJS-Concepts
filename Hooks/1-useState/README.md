# useState() hook

A React hook that we use to add & update state to functional components. It is an alternative to writing a class-based component with a state object and lifecycle methods.

It returns exactly two value pairs, the current state, and a function to update the state.

```
// 1. Integer as initial value. Although all data types are supported. Even can pass null/undefined if you want to initialize the state value later, or if the initial state value is determined by an asynchronous operation.

const [count, setCount] = useState(0);

// 2. Obj as initiial value

const [database, setDatabase] = useState({ name: 'Subham', age: 25, designation: 'Full Stack SDE' });

// 3. Callback function as initial value

const [number, setNumber] = useState(() => {
    console.log("run function only first time component renders");
    return 5;
    // This whole callback runs only the first time this component get renders
    // And the initial value is set by return keyword, so here initial of number is 5
  });
```

1. **count** is the initial state variable with value **0** & **setCount()** is the state i.e. count updater function.

2. **database** is the initial state variable with value **{ name: 'Subham', age: 25, designation: 'Full Stack SDE' }** Object & **setDatabase()** is the state updater function.
3. **number** is the initial state variable with value **5** & **setNumber()** is the state i.e. number updater function.

<hr>

### 1. useState() with initial state value (Single value)

There is no bound on using multiple state hooks in a single component; we can use as many as we want.

Refer to `App-1.jsx`

### 2. useState() with initial state value (Object)

Refer to `App-4.jsx`

### 3. useState() with callback function

Refer to `App-2.jsx`

### Fix: Solution of commented section in App-2.jsx

Refer to `App-3.jsx`

### Multiple States

Refer to `App-5.jsx`

### Changing a state depending on another state change, without getting into infinite loop

Refer to `App-6.jsx`
