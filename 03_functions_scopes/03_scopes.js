"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🔹 JavaScript Scopes - Basics
------------------------------------------------------------------------- */

// ✅ **Block Scope (let & const) vs Function Scope (var)**

if (true) {
    let a = 10;
    const b = 20;
    var name = "Ravi"; // ❌ `var` is function-scoped, escapes the block
}

// console.log(a); // ❌ ERROR: Not accessible (Block Scope)
// console.log(b); // ❌ ERROR: Not accessible (Block Scope)
console.log(name); // ✅ Accessible (Function Scope) - "Ravi" (Drawback)

/* -----------------------------------------------------------------------
📌 Global Scope vs Local Scope
------------------------------------------------------------------------- */

// ✅ **Global Scope**
let globalVar = "I am global"; 

function showGlobal() {
    console.log(globalVar); // ✅ Accessible inside function
}

showGlobal();
console.log(globalVar); // ✅ Accessible globally

// ✅ **Local Scope**
function showLocal() {
    let localVar = "I am local";
    console.log(localVar); // ✅ Accessible inside function
}

// console.log(localVar); // ❌ ERROR: Not accessible outside function




/* -----------------------------------------------------------------------
📌 Lexical Scope (Nested Scope)
------------------------------------------------------------------------- */

function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar); // ✅ Accessible
        console.log(innerVar); // ✅ Accessible
    }

    innerFunction();
    // console.log(innerVar); // ❌ ERROR: Not accessible outside innerFunction
}

outerFunction();

/* -----------------------------------------------------------------------
📌 Closures (Functions Remember Their Scope)
------------------------------------------------------------------------- */

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

/* -----------------------------------------------------------------------
📌 Hoisting & Temporal Dead Zone (TDZ)
------------------------------------------------------------------------- */

// ✅ **Hoisting with `var`**
console.log(hoistedVar); // ✅ Undefined (Hoisted)
var hoistedVar = "I am hoisted";

// ❌ **Temporal Dead Zone (TDZ) with `let` & `const`**
// console.log(hoistedLet); // ❌ ERROR: Cannot access before initialization
let hoistedLet = "I am not hoisted";

/* -----------------------------------------------------------------------
📌 `this` in Different Scopes
------------------------------------------------------------------------- */

// ✅ **Global `this`**
console.log(this); // `window` in browsers, `global` in Node.js

// ✅ **Function `this`**
function showThis() {
    console.log(this); // Global object (window/global)
}

showThis();

// ✅ **Arrow Function `this` (Lexical Binding)**
const arrowShowThis = () => {
    console.log(this); // Inherits from surrounding scope
};

arrowShowThis();

/* -----------------------------------------------------------------------
📌 Best Practices
------------------------------------------------------------------------- */
/*
💡 **1. Prefer `let` & `const` over `var`**
  - `let` and `const` are block-scoped, avoiding scope pollution.
  - `const` is best for values that shouldn’t change.

💡 **2. Understand Lexical Scope & Closures**
  - Inner functions can access outer function variables.
  - Closures are useful for data encapsulation (e.g., private variables).

💡 **3. Be Aware of Hoisting & TDZ**
  - `var` is hoisted but initialized as `undefined`.
  - `let` and `const` are hoisted but in a **Temporal Dead Zone (TDZ)**.

💡 **4. Understand `this` Behavior**
  - In regular functions, `this` refers to the calling object.
  - In arrow functions, `this` is lexically inherited.
*/

