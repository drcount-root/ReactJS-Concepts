## useReducer() hook

Using useState() hook, is not the only the way to update state in react.

useReducer() is a hook in react which allows to manage state & re-render component whenever that state changes.

Similar to useState, useReducer takes an initial state as one of its arguments and returns to us the current state and a way to update that state.

### useState() vs useReducer()

The only major difference is that we also need to pass a reducer function to useReducer which contains all the logic for modifying our state.

| useState()                                                                                              | useReducer()                                                                                 |
| ------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Updates state with `setState()`                                                                         | Updates state with `dispatch` function                                                       |
| Passes down all the setState custom helper functions addItem, setItemCompleted, toggleAllItemsCompleted | Passes down just the `dispatch` function                                                     |
| Needs to wrap functions in `useCallback()` (if we want to memoize them)                                 | `dispatch` function is already memoized                                                      |
| Harder to test but easier to write                                                                      | Easier to test but harder to write; one can just test the `reducer` function that is exposed |
