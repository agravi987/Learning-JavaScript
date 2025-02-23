# Functions & Scope

## 📝 Key Points:
- Function scope, block scope, lexical scope.
- Function declarations vs expressions.
- `this` behavior depends on execution context.

## 🔥 Example:
```js
function greet() {
  console.log("Hello!");
}
const greetArrow = () => console.log("Hi!");
```

## ❓ Interview Fact:
- Arrow functions don’t have their own `this`. They inherit it from the surrounding scope.
