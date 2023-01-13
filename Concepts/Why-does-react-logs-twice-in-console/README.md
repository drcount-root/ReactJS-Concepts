# Why does react logs twice in console

=> Because of React uses `React.StrictMode` to future proof our code & to avoid any kind of un-intended side-effects. And that strictmode is the reason for logging twice.

If we remove the `<React.StrictMode></React.StrictMode>` tags then it will log once.

`React.StrictMode` is a tool for only the development purposes, if we push our code to production, it works as if the `React.StrictMode` is not enabled.

`React.StrictMode` is enabled in development mode so that - it's easy to find bugs & different errors in our code that react thinks it should changed.


<br>

## React is broken into 2 different sections - 1. Render phase, 2. Commit phase

1. **Render Phase** - React runs the component and goes through and does all the calculations & determines how the JSX sholud look like. The slow phase.

2. **Commit Phase** - Find the differences between the new JSX and the Old one, and update those new parts. The quick phase.