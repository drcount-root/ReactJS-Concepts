# Why does react logs twice in console

=> Because of React uses `React.StrictMode` to future proof our code. And that strictmode is the reason for logging twice.

If we remove the `<React.StrictMode></React.StrictMode>` tags then it will log once.

`React.StrictMode` is a tool for only the development purposes, if we push our code to production, it works as if the `React.StrictMode` is not enabled.

`React.StrictMode` is enabled in development mode so that - it's easy to find bugs & different errors in our code that react thinks it should changed.
