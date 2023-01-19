# What is Redux?

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

# Principles Of Redux

1. The global state of your application is stored as ab object inside a single store.

2. The only way to change the state is to dispatch an action, an object describing what happened.

3. Immutability, One-way data flow, Predictability of outcome

4. Changes are made with pure reducer functions depending upon actions.

<br>

# state is Read-only in redux

In Redux, the state is considered to be `read-only`, which means that the state can only be modified by dispatching actions that are processed by pure reducer functions. These reducer functions take the current state and an action as arguments and return a new state. The new state is then passed on to the components, which re-render based on the new state.

<br>

# What Makes Redux Predictable?

According to the creator of Redux,

Actions can be recorded and replayed later, so this makes state management predictable. With the same actions in the same order, you're going to end up in the same state.

Redux makes the state of the application predictable by enforcing a strict unidirectional data flow, in which the only way to change the state is by dispatching actions that are processed by pure reducer functions.

In summary, Redux's strict unidirectional data flow, pure reducer functions, and ability to track the history of state changes, and handling side-effects with middlewares makes it a predictable library for managing the state of JavaScript applications.

<br>

# Is reducer function of redux a pure function?

Yes, the reducer function in Redux is a pure function.

A pure function is a function that given the same input, will always produce the same output, and has no side effects. A pure function should not modify the original state, but rather create a new state object and return that.

In Redux, the reducer function takes the current state and an action as input, and returns a new state based on that input. The reducer function should not modify the original state, but rather create a new state object and return that. This is important because it ensures that the state of the application can only be modified in a predictable and consistent manner, and also allows for better tracking of the state changes through the use of the Redux DevTools.

The reducer function must not perform any side-effects, like accessing non-local data or modifying other parts of the app like calling an API, or changing the global state. That's the role of middlewares.

Also, the reducer function should be deterministic, meaning that it will return the same output for the same set of inputs, and should not depend on external factors such as the current time or the value of a global variable.

In summary, the reducer function in Redux is a pure function, which means it must be deterministic, without side-effects, and should not modify the original state but instead return a new state based on the input.

<br>

# Immutable function vs Pure function

An immutable function is a type of pure function that creates and returns a new object or data structure rather than modifying the original. This means that the original object or data structure is not changed, but rather a new one is created with the desired changes.

A pure function, on the other hand, is a function that given the same input, will always produce the same output, and has no side effects. It does not modify the original inputs and does not have any hidden side-effects.

An immutable function is a type of pure function that follows immutability principle, which is a principle that states that once an object is created, its state should not be modified. This is achieved by creating a new object with the desired changes, instead of modifying the original object.

In the context of Redux, the reducer function is a pure function which should be immutable, it should not modify the original state but instead return a new state based on the input, it should not perform any side-effects, and it should be deterministic, meaning that it will return the same output for the same set of inputs.

In summary, both immutable function and pure function are closely related, and an immutable function is a type of pure function that creates and returns a new object or data structure rather than modifying the original. Pure functions, on the other hand, are functions that given the same input, will always produce the same output, and have no side effects.

<br>

# INTV Qs:

Here are some common interview questions that may be asked about Redux during a job interview:

1. What is the role of the store in Redux?
2. How does the unidirectional data flow in Redux work?
3. Can you explain the concept of "reducers" in Redux?
4. How does the use of "actions" in Redux differ from traditional event handling?
5. How does Redux handle async actions?
6. Can you explain the concept of "middleware" in Redux?
7. How does the use of "immutable data" in Redux differ from traditional data manipulation?
8. How does the use of "pure functions" in Redux differ from traditional data manipulation?
9. How does Redux differ from other state management libraries such as MobX?
10. Can you explain the use of the "Redux DevTools" and their importance in debugging and tracing the flow of data in a Redux application?
11. How do you structure your Redux application?
12. How do you handle server-side rendering with Redux?
13. How do you test your Redux application?
14. How do you handle global state in a Redux application?
15. How do you handle complex state updates in a Redux application?
16. How does Redux handle multiple stores?
17. How do you handle state persistence in a Redux application?
18. How does Redux handle large data sets?
19. How do you handle real-time updates in a Redux application?
20. How do you handle security and sensitive data in a Redux application?

<br>

# installing & setup redux to react project

1. `$ npm i redux react-redux redux-thunk`

2. setting up state folder inside src

3. create 2 folders inside state folder - 1. action-creators, 2. reducers

4.
