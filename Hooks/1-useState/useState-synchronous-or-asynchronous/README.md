### setState() method of useState() is asynchronous or synchronous

The **setState of a class-based component is asynchronous** because it batches updates together and applies them as a single update. This is done to improve performance and avoid race conditions. Otherwise rendering multiple times could be expensive.

On the other hand, the **setState() returned by the useState hook is 100% synchronous but behaves like asynchronous**. This means that when you call setCount, the state value isn't updated immediately. Happens like what happens in class bases components. Because, react checks all the requested updates & completes the updates and then render them at once. Otherwise rendering multiple times could be expensive.

`useState()` is an asynchronous hook, it will wait for the component to finish its cycle, re-render, and then it will update the state.

`useState()` is an asynchronous hook and it doesn’t change the state immediately, it has to wait for the component to re-render.

`useRef()` is a synchronous hook that updates the state immediately and persists its value through the component’s lifecycle, but it doesn’t trigger a re-render.

<br>

`useState()` is synchronous hook. But the way it happens or behaves, it seems like it's asynchronous. When we request react to update multiple states using useState(), react checks all the requested updates & completes the updates and then render them at once. Otherwise it could be expensive for react to render for each state update. So here it takes the time, for which we thing useState() is an asynchronous hook.

See both examples(App-1.jsx, App-2.jsx) to understand better.

<br>

### Example

(unfinished)
