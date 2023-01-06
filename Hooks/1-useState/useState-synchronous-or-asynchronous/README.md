# setState() method of useState() is asynchronous or synchronous (conflicted question)

The **setState of a class-based component is asynchronous** because it batches updates together and applies them as a single update. This is done to improve performance and avoid race conditions. Otherwise rendering multiple times could be expensive.

On the other hand, the **setState() returned by the useState hook is 100% synchronous but behaves like asynchronous**. This means that when you call setCount, the state value isn't updated immediately. Happens like what happens in class bases components. Because, react checks all the requested updates & completes the updates and then render them at once. Otherwise rendering multiple times could be expensive.

`useState()` is an asynchronous hook, it will wait for the component to finish its cycle, re-render, and then it will update the state.

`useState()` is an asynchronous hook and it doesn’t change the state immediately, it has to wait for the component to re-render.

`useRef()` is a synchronous hook that updates the state immediately and persists its value through the component’s lifecycle, but it doesn’t trigger a re-render.

<br>

`useState()` is synchronous hook. But the way it happens or behaves, it seems like it's asynchronous. When we request react to update multiple states using useState(), react checks all the requested updates & completes the updates and then render them at once. Otherwise it could be expensive for react to render for each state update. So here it takes the time, for which we thing useState() is an asynchronous hook.



<br>

## Example
See both examples(App-1.jsx, App-2.jsx) to understand better.

<br>

# When is setState asynchronous?

Currently, setState is asynchronous inside event handlers.

This ensures, for example, that if both Parent and Child call setState during a click event, Child isn’t re-rendered twice. Instead, React “flushes” the state updates at the end of the browser event. This results in significant performance improvements in larger apps.

This is an implementation detail so avoid relying on it directly. In the future versions, React will batch updates by default in more cases.


```
incrementCount() {
  this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    return {count: state.count + 1}
  });
}

handleSomething() {
  // Let's say `this.state.count` starts at 0.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();

  // If you read `this.state.count` now, it would still be 0.
  // But when React re-renders the component, it will be 3.
}
```

## Why doesn’t React update this.state synchronously?

As explained in the previous section, React intentionally “waits” until all components call setState() in their event handlers before starting to re-render. This boosts performance by avoiding unnecessary re-renders.

However, you might still be wondering why React doesn’t just update state immediately without re-rendering.

There are two main reasons:

This would break the consistency between props and state, causing issues that are very hard to debug.
This would make some of the new features we’re working on impossible to implement.


By the react dev member:
https://github.com/facebook/react/issues/11527#issuecomment-360199710