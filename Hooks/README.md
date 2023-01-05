# Introduction to react hooks (What are Hooks? | Rules | Advantages)

### What are Hooks ?

> Hooks are a new addition in React v16.8.
> Hooks are functions that let you “hook into” or use React **state** and **lifecycle features** without writing a class based components, we can use hooks in function based components.
>
> Hooks don’t work inside classes — they let you use React features without classes.

Till React v17 Hooks are **backward-compatible**, meaning they have no breaking changes (very minor breaking points)

> React v16.8 is a rewrite, but it has the same public API.
>
> So, it is very much compatible with previous ones with very minor breaking points which are very easily manageable.
>
> Unlike React 17, **React 18** contains actual API changes that **may not be backward-compatible**.

<br>

### Rules

> 1.  Call Hooks only at the top of react function based components.
> 2.  Hooks are invoked in the same order every time a component is rendered. (for example we have to set useEffect() hook with empty array of dependency before useEffect() with some dependencies). So set them in order to ensure they get called in the same order every time.
> 3.  Make sure not to call them inside loops, nested functions, or inside conditions.
> 4.  Call Hooks from React function based components only. It is not allowed to call Hooks from standard JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks). A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.

> React also provides a **linter plugin** to ensure that these rules apply automatically.

<br>

### Advantages

> 1. With hooks we can write smaller functions or split bigger functions which enhance readability.
> 2. Hooks allow you to reuse stateful logic without changing your component hierarchy. By using hooks (useState()) we can manage states in function based components and make them stateful components. And we can avoid writing class based components.
> 3. enables using lifecycle features in function components using useEffect() hook.
> 4. Much more easy to deal with Context API (useContext())
