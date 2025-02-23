# Prototypes & Inheritance

## 📝 Key Points:
- Every JS object has a prototype.
- Prototypal inheritance allows sharing properties.

## 🔥 Example:
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};
const p1 = new Person("Alice");
p1.greet(); // Hello, Alice
```

## ❓ Interview Fact:
- `Object.create()` is used to set up prototypal inheritance without constructors.
