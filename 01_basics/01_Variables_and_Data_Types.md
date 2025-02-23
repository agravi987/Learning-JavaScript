# Variables & Data Types

## 📝 Key Points:
- `var`, `let`, `const` – `let` and `const` are block-scoped.
- Primitive Types: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- Reference Types: `Array`, `Object`, `Function`
- `typeof null` is `"object"` (JS bug)

## 🔥 Example:
```js
let x = 10;
const y = 20;
x = 15; // ✅ Allowed
y = 25; // ❌ Error: Assignment to constant variable
```

## ❓ Interview Fact:
- Difference between `null` and `undefined`?  
  - `null` = intentional absence of value  
  - `undefined` = variable declared but not assigned  
