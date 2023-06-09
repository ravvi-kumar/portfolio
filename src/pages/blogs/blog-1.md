---
layout: ../../layouts/BlogPostsLayout.astro
title: useAsync hook
---
# useAyncState hook

![](https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600)

## Understanding the useState Setter Function Batching State Updates in React

React is a popular front-end library for building user interfaces and it relies heavily on the concept of state. React's `useState` hook is a fundamental hook that allows us to manage state in functional components. When using `useState`, it's important to understand how the setter function works and how it can batch state updates.

## How Setter Function Batching Works

When we call the setter function returned by `useState`, React doesn't immediately update the state. Instead, it batches state updates together to optimize performance. This means that multiple calls to the same setter function within a single render cycle may only result in one actual update to the state.

Let's take a look at an example to see how this works. In the following code, we have a counter component that increments the count state variable twice:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment Twice</button>
    </div>
  );
}

```

If we click the "Increment Twice" button, we might expect the count to increase by two. However, due to batching, React will only perform one update to the state, resulting in the count increasing by only one.

This batching behavior can be useful for performance reasons, as it allows React to optimize updates and avoid unnecessary re-renders. However, it can also be confusing if you're not aware of how it works.

## Why Batching Matters

Understanding how state batching works is important for building performant React applications. By minimizing the number of state updates, we can avoid unnecessary re-renders and improve the overall performance of our app.

For example, imagine we have a form with multiple input fields, each of which updates a separate state variable. If we didn't use batching, updating one input field could potentially cause a re-render of the entire form, even if the other fields didn't change. By batching the state updates, we can ensure that the component only re-renders once, after all the state updates have been processed.

In addition to improving performance, batching can also help us avoid unexpected behavior. For example, if we have multiple state updates that depend on each other's values, batching ensures that they are processed together, preventing any race conditions or inconsistencies.

## Tips for Working with Batching

While batching can be a powerful tool, it's important to keep a few things in mind when working with it:

### 1. Use functional updates when possible

Functional updates allow us to update state based on its previous value, rather than the current value. This can be very useful when working with batching, as it ensures that our updates are always based on the latest value of state.

Here's an example:

```jsx
function increment() {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
}

```

In this example, we're using functional updates to increment the count state variable twice. This ensures that the second update is based on the latest value of `count`, rather than the original value.

### 2. Keep state updates separate

When updating multiple state variables, it's important to keep the updates separate. This helps to ensure that each update is processed separately and avoids any unexpected behavior.

Here's an example:

```jsx
function updateNameAndAge() {
  setName('Alice');
  setAge(25);
}

```

In this example, we're updating the `name` and `age` state variables separately, ensuring that each update is processed independently.

### 3. Be aware of dependencies

When working with multiple state variables, it's important to be aware of any dependencies between them. This can help to avoid any unexpected behavior that may arise from batching.

For example, if we have two state variables that depend on each other, we should use functional updates to ensure that they are updated together:

```jsx
function updateNameAndGreeting(name) {
  setName(name);
  setGreeting(`Hello, ${name}!`);
}

```

In this example, we're using functional updates to ensure that the `greeting` state variable is updated based on the latest value of `name`.

## Creating useAsyncState hook

In order to achieve latest state, we synchronize state updates using `useEffect` hook .

Here’s an example:

```jsx
function updateCount(by){
	setCount((prev)=> prev + by)
	console.log(count) // still getting old count value
}

useEffect(()=>{
	console.log(count) // here we have the latest value of count
},[count])
```

we can refactor this by creating our useAyncState hook to get latest/updated state right away after updating it . so here is the code :

```jsx
const useAsyncState =(initialState)=> {
  const [state, setState] = useState(initialState);

  const asyncSetState = (value) => {
    return new Promise((resolve) => {
      setState(value);
      setState((current) => {
        resolve(current);
        return current;
      });
    });
  };

  return [state, asyncSetState];
};
```

Here is the TypeScript version of useAsyncState :

```tsx
const useAsyncState = <T,>(
  initialState: T
): [T, (value: SetStateAction<T>) => Promise<T>] => {
  const [state, setState] = useState<T>(initialState);

  const asyncSetState = (value: SetStateAction<T>): Promise<T> => {
    return new Promise((resolve) => {
      setState(value);
      setState((current) => {
        resolve(current);
        return current;
      });
    });
  };

  return [state, asyncSetState];
};
export default useAsynState;
```

After refactoring ,we don’t need `useEffect` to synchronize our state updates . we can now get latest value out of setter function to use any-where we want .

```jsx
import React, { useState } from 'react';
import useAyncState from "./useAsyncState";

function Counter() {
  const [count, setCount] = useAsyncState(0);

  async function increment() {
    const latestCount=await setCount(count + 1);
    console.log(latestCount) // here we will get latest value
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

Remember, make sure to change your function to async function or you can chain then call also .

## Conclusion

In conclusion, the `useState` hook's setter function can batch state updates, meaning that multiple calls to the same setter function within a single render cycle may only result in one actual update to the state. This batching behavior can be useful for optimizing performance, but it's important to understand how it works to avoid confusion and ensure that our components behave as expected. By minimizing the number of state updates, we can build fast and efficient React applications that provide a great user experience.

So, next time you're working with `useState` in React, remember to keep in mind the batching behavior of the setter function and use it to your advantage to build performant and efficient apps.