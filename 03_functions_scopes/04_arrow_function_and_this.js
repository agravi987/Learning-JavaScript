"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🔹 Arrow Functions & `this` Keyword
------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------
📌 Understanding `this` in Regular Functions
------------------------------------------------------------------------- */

const User = {
    name: "Ravi",
    age: 20,
    address: "Nepal",

    detail: function () {
        console.log(`${this.name} of age ${this.age} from ${this.address}`);
        // ✅ `this` refers to the current object (`User`)
        console.log(this);
    },
};

User.detail(); // ✅ Works as expected

console.log(this); // ❌ `{}` in Node.js, `window` in browser

/* -----------------------------------------------------------------------
📌 `this` in Regular Functions vs Arrow Functions
------------------------------------------------------------------------- */

// ✅ `this` in Regular Function
function chai() {
    let teaName = "Black Tea";
    console.log(this); // 🌍 Refers to global object (Node.js: `global`, Browser: `window`)
    console.log(this.teaName); // ❌ Undefined (Does not work as expected)
}

chai();

// ❌ `this` in Arrow Function
const chaiArrow = () => {
    console.log(this); // ❌ Inherits `this` from surrounding scope (Global scope)
};

chaiArrow();

/* -----------------------------------------------------------------------
🎯 Arrow Functions - Syntax & Implicit Return
------------------------------------------------------------------------- */

// ✅ **Basic Arrow Function**
const add = (num1, num2) => {
    return num1 + num2;
};

console.log(add(10, 20)); // 30

// ✅ **Implicit Return (No `return` keyword needed)**
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(20, 10)); // 200

// ✅ **Implicit Return with Parentheses (More Readable)**
const multiply2 = (num1, num2) => (num1 * num2);
console.log(multiply2(5, 4)); // 20

/* -----------------------------------------------------------------------
📌 Returning Objects from Arrow Functions
------------------------------------------------------------------------- */

// ❌ Incorrect: Will cause an error
// const makeUser = (username) => {name: username, branch: "CSE"}; 

// ✅ Correct: Use parentheses `()` to wrap the object
const makeUser = (username) => ({ name: username, branch: "CSE" });

console.log(makeUser("Ravi")); // { name: 'Ravi', branch: 'CSE' }

/* -----------------------------------------------------------------------
📌 Interview Tips & Best Practices
------------------------------------------------------------------------- */

/*
💡 **1. Regular Function vs Arrow Function**
  - Regular functions have their own `this`, while arrow functions inherit `this` from their surrounding scope.
  - Use **regular functions** for methods inside objects (`this` works correctly).
  - Use **arrow functions** for short, simple functions (like callbacks).

💡 **2. Implicit Return in Arrow Functions**
  - Single-line expressions don't need `{}` or `return`.
  - Wrap objects in `()` to return implicitly.

💡 **3. `this` Behavior in Arrow Functions**
  - Arrow functions **do not have their own `this`**.
  - They inherit `this` from their lexical scope (the scope they are defined in).
*/
