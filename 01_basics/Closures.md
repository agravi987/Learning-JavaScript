# Closures

## 📝 Key Points:
- A function that remembers variables from its outer scope even after execution.

## 🔥 Example:
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

## ❓ Interview Question:
- What are closures?  
  > A closure is a function that captures variables from its outer lexical environment.
