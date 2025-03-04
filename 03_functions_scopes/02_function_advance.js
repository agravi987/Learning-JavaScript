"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
📌 Rest Parameters (Handling Multiple Arguments)
------------------------------------------------------------------------- */

// ✅ **Using Rest Parameters to Handle Dynamic Arguments**
const sumAll = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumAll(1, 2, 3, 4, 5)); // 15

/* -----------------------------------------------------------------------
📌 Passing Objects in Functions
------------------------------------------------------------------------- */

const user = {
    username: "Ravi",
    age: 20,
};

function userDetail(user) {
    return `User name is ${user.username} and His/Her age is ${user.age}`;
}

console.log(userDetail(user));

/* -----------------------------------------------------------------------
🛠️ Function Scopes: Global, Local & Block Scope
------------------------------------------------------------------------- */

let globalVar = "I am global";

function checkScope() {
    let localVar = "I am local";
    console.log(globalVar); // ✅ Accessible
    console.log(localVar); // ✅ Accessible
}

// console.log(localVar); // ❌ ERROR: localVar is not defined

/* -----------------------------------------------------------------------
🎭 Callback Functions (Functions as Arguments)
------------------------------------------------------------------------- */

// ✅ **Example: Using Callback with `forEach()`**
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * 2);
}); // [2, 4, 6, 8, 10]

/* -----------------------------------------------------------------------
📌 IIFE (Immediately Invoked Function Expressions)
------------------------------------------------------------------------- */

// ✅ **Syntax of IIFE**
(function () {
    console.log("IIFE Executed!");
})(); // "IIFE Executed!"

// ✅ **IIFE with Arrow Function**
(() => {
    console.log("Arrow Function IIFE");
})(); // "Arrow Function IIFE"

/* -----------------------------------------------------------------------
📌 Closures (Advanced)
------------------------------------------------------------------------- */

// ✅ **Closure Example: Counter Function**
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
📌 Interview Tips & Best Practices
------------------------------------------------------------------------- */

/*
💡 **1. Function vs Arrow Function**
  - Regular functions have their own `this`, but arrow functions inherit `this` from the surrounding scope.
  - Use regular functions when `this` is needed (e.g., object methods).
  - Use arrow functions for concise syntax and no `this` binding.

💡 **2. Default Parameters vs Logical OR (`||`)**
  - `function greet(name = "Guest")` ✅ (Best Practice)
  - `function greet(name) { return name || "Guest"; }` ✅ (Alternative)

💡 **3. Arguments Object vs Rest Parameters**
  - `arguments` exists in **regular functions** but not in arrow functions.
  - Use `...rest` instead of `arguments`.

💡 **4. Immediately Invoked Function Expressions (IIFE)**
  - Useful for avoiding global variables and executing code immediately.

💡 **5. Closures (Advanced)**
  - Functions can **remember** variables even after execution.
  - Example:
    ```js
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
    ```
*/

