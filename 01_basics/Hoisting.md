# Hoisting

## 📝 Key Points:
- Variables (`var`) are hoisted but initialized as `undefined`.
- Functions are hoisted entirely.

## 🔥 Example:
```js
console.log(a); // undefined
var a = 5;

hoistedFunc(); // ✅ Works
function hoistedFunc() {
  console.log("I'm hoisted!");
}
```

## ❓ Interview Fact:
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone).
