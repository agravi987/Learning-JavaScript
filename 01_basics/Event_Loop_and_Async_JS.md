# Event Loop & Async JS

## 📝 Key Points:
- JS is single-threaded, but async tasks run via Event Loop.
- Callbacks, Promises, and Async/Await for handling async code.

## 🔥 Example:
```js
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// Output: Start → End → Timeout
```

## ❓ Interview Question:
- Why does `setTimeout(fn, 0)` not execute immediately?  
  > It goes into the event queue and runs after the current execution stack is clear.
