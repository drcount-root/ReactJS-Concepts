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

### setState() method of useState() is asynchronous or synchronous

The **setState of a class-based component is asynchronous** because it batches updates together and applies them as a single update. This is done to improve performance and avoid race conditions.

On the other hand, the **setState() returned by the useState hook is 100% synchronous but behaves like asynchronous**. This means that when you call setCount, the state value isn't updated immediately. Happens like what happens in class bases components. Because, react checks all the requested updates & completes the updates and then render them at once.

`useState()` is an asynchronous hook, it will wait for the component to finish its cycle, re-render, and then it will update the state.

`useState()` is an asynchronous hook and it doesn’t change the state immediately, it has to wait for the component to re-render.

`useRef()` is a synchronous hook that updates the state immediately and persists its value through the component’s lifecycle, but it doesn’t trigger a re-render.

### Example

(unfinished)

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
