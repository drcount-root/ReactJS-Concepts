## useReducer() hook

Using useState() hook, is not the only the way to update state in react.

useReducer() is a hook in react which allows to manage state & re-render component whenever that state changes.

Similar to useState, useReducer takes an initial state as one of its arguments and returns to us the current state and a way to update that state.

###

```
const [count, dispatch] = useReducer(reducer, 0)
```

In the above code you can see that the default state of 0 is passed as the second argument to useReducer and the `count` is returned as the first element in the array just like with useState. Now instead of having a setCount function we have a `dispatch` function which allows us to call the `reducer` function we pass to `useReducer()`. This is a little bit complicated to think about in your head so here is a simple example based on our counter.

```
function reducer(count, action) {
  switch (action.type) {
    case 'increment':
      return count + 1
    default:
      return count
  }
}

const [count, dispatch] = useReducer(reducer, 0);
```

We now have defined the reducer function and it takes two parameters. The first parameter is the current state of our component. In our case this is just our count. The second parameter is our action which is going to be set to whatever you pass to dispatch.







### useState() vs useReducer()

The only major difference is that we also need to pass a reducer function to useReducer which contains all the logic for modifying our state.

| useState()                                                                                                              | useReducer()                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Updates state with `setState()`                                                                                         | Updates state with `dispatch` function                                                       |
| Passes down all the `setState()` custom helper functions `addItem()`, `setItemCompleted()`, `toggleAllItemsCompleted()` | Passes down just the `dispatch` function                                                     |
| Needs to wrap functions in `useCallback()` (if we want to memoize them)                                                 | `dispatch` function is already memoized                                                      |
| Harder to test but easier to write                                                                                      | Easier to test but harder to write; one can just test the `reducer` function that is exposed |
