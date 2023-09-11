# W08D01 - Data Fetching & Other Side Effects

### To Do
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] Dependencies
- [x] _useEffect_ Flow

### Pure Function
* always returns the same thing if the same argument is given
* and has no side effects

```js
let additive = 5;
let count = 0;

const addTwo = (num) => {
  count += 1;
  const result = num + additive;
  return result;
};
```

### Side Effect Examples
* writing to std out
* using variables from outer scope
* interacting directly with the DOM
* setting up a websocket connection
* data fetching
* setting up timers and intervals


```js
useEffect(() => {}) // our side effect will be called on every render
useEffect(() => {}, [username, props.onClick]) // our side effect will be called on initial render and then only if `username` changes
useEffect(() => {}, []) // only called on first render
```

useState
useEffect
useContext => prevents prop drilling


















