# useEffect() hook : The Side Effect Hook

The **`useEffect`** hook in React allows you to perform side effects in function components. It serves a similar purpose as the following lifecycle methods in class components:

- **`componentDidMount()`**
- **`componentDidUpdate()`**
- **`componentWillUnmount()`**

<br>

## Here's how you can use **`useEffect`** to replicate the behavior of these three lifecycle methods:

```
import { useEffect } from 'react';

function MyComponent(props) {
  useEffect(() => {
    // This is equivalent to componentDidMount()
    // You can perform an action when the component mounts here,
    // such as fetching data or setting up an event listener
  }, []);
------------------------------------------------------------------
  useEffect(() => {
    // This is equivalent to componentDidUpdate()
    // You can perform an action when the component updates here,
    // such as updating the data in a local state
  });
------------------------------------------------------------------
	useEffect(() => {
    // This is equivalent to componentDidUpdate()
    // You can perform an action when the component updates here,
    // such as updating the data in a local state
  }, [dependent-state-varibales]);
------------------------------------------------------------------
  useEffect(() => {
    // This is equivalent to componentWillUnmount()
    // You can perform an action when the component unmounts here,
    // such as removing an event listener or cleaning up a subscription
    return () => {
      // Perform cleanup here
    };
  }, []);
------------------------------------------------------------------
  // Render the component as usual
  return <div>My component</div>;
}
```

Note that the second argument to **`useEffect`** is an array of dependencies. If you pass an empty array, the effect will only run once, when the component mounts, which is equivalent to **`componentDidMount`**.

If you omit the array or pass an array with dependencies, the effect will run every time the component updates, which is equivalent to **`componentDidUpdate`**.

To replicate the behavior of **`componentWillUnmount`** with the **`useEffect`** hook in a React function component, you can return a cleanup function from the effect.

The returned cleanup function will run when the component unmounts, regardless of the dependencies.

```
import { useEffect, useState } from 'react';

function MyComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This is equivalent to componentDidMount()
    // You can perform an action when the component mounts here,
    // such as fetching data or setting up an event listener
    fetch('https://my-api.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
------------------------------------------------------------------
  useEffect(() => {
    // This is equivalent to componentDidUpdate()
    // You can perform an action when the component updates here,
    // such as updating the data in a local state
    console.log('The data has been updated: ', data);
  }, [data]);
------------------------------------------------------------------
  useEffect(() => {
    // This is equivalent to componentWillUnmount()
    // You can perform an action when the component unmounts here,
    // such as removing an event listener or cleaning up a subscription
    return () => {
      // This is the place to remove an event handler or unsubscribe api
      console.log('The component is unmounting');
    };
  }, []);
------------------------------------------------------------------
  // Render the component as usual
  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading data...</p>}
    </div>
  );
}
```

In this example, the first **`useEffect`** hook fetches data from an API when the component mounts and updates the local state with the received data.

The second **`useEffect`** hook logs a message to the console whenever the **`data`** state changes.

The third **`useEffect`** hook logs a message to the console when the component unmounts.

<br>

## Two types of side effects reside in the React component:

1. **Effects Without Cleanup**
2. **Effects With Cleanup**

### 1. **Effects Without cleanup**

Some of the most common examples of effects that do not require clean-up are:

- Manual DOM mutations
- network requests
- logging

### 2. \***\*Effects with Cleanup\*\***

- Used to memory optimization practice during dealing with multiple event-listeners, API Subscriptions etc.

#### API Subscription & un-subscription

```
useEffect(() => {
  const subscription = props.source.subscribe(); // happens 2nd
  return () => {
    // Cleaning up the subscription 1st then subscription set
    subscription.unsubscribe(); // happens 1st
  };
});
```

In our example, this means every update creates a new subscription. So it is necessary to clean up memory so that we do not add a memory leak if we want to set up a subscription to any external data source.

So, the clean-up function runs before the component is eliminated from the UI to prevent memory leaks.

`UseEffect` is not only called when the item is unmounted. To clean up from the last run, it will run each time, even before the effect runs.

```
const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("resource changed"); // logs 2nd

    return () => {
      console.log("return from resource chnage"); // logs 1st
    };
  }, [resourceType]);
```

#### Can be used on adding & removing event-listeners continuously

```
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Now for example we wanna delete the component (unmount). We want to remove the event listener because otherwise we gonna have event listeners that hooked up & constantly been added & never actually removed, which is gonna slow down our app.

    // Fix of this is to return a cleanup function from useEffect().
    // A better example in App-3.jsx
    // This cleanup function get called whenever the useEffect() get cleaned up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
```
