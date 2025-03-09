"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🔹 Immediately Invoked Function Expressions (IIFE)
------------------------------------------------------------------------- */

/*
📌 **What is IIFE?**
   - An **Immediately Invoked Function Expression (IIFE)** is a function that runs **immediately after declaration**.
   - It **executes once** and does **not pollute the global scope**.
*/

/* -----------------------------------------------------------------------
🎯 Regular Function vs IIFE
------------------------------------------------------------------------- */

// ✅ **Regular Function**
function greet() {
    console.log("HELLO RAVI BHAIYA");
}

greet(); // ✅ Function is called manually

// ✅ **Equivalent IIFE (Immediately Invoked)**
(function greet2() {
    console.log("Hello from IIFE, Ravi Bhaiya");
})(); // ✅ Function is called instantly

// 🔴 **Note:** The semicolon (`;`) is necessary after an IIFE 
// to ensure proper execution of other code following it.

/* -----------------------------------------------------------------------
📌 IIFE using Arrow Functions (Modern Syntax)
------------------------------------------------------------------------- */

((name) => {
    console.log(`Hello ${name}, how are you???`);
})("Rithiga"); // ✅ Instantly executed with argument

/* -----------------------------------------------------------------------
🎯 Why Use IIFE?
------------------------------------------------------------------------- */

/*
💡 **1. Avoid Global Scope Pollution**
   - Prevents variable leaks into the global scope.
   - Helps in writing **self-contained modules**.

💡 **2. Private Variables**
   - Variables inside an IIFE **cannot be accessed outside**.

💡 **3. Execution on Load**
   - Useful for **one-time initialization code** (e.g., database connections, setup configs).
*/

/* -----------------------------------------------------------------------
📌 ✅ Example: How IIFE Prevents Global Scope Pollution
------------------------------------------------------------------------- */

// ❌ **Without IIFE: Global Variable Can Be Modified**
let counter = 0;  

function increment() {
    counter++; // Global variable is modified
}

increment();
console.log(counter); // 1 ✅

// ❌ Issue: If another part of the code modifies `counter`, it causes conflicts
counter = "Oops, changed!";
console.log(counter); // "Oops, changed!" ❌ (Accidental modification)

// ✅ **Solution: Encapsulating Code in IIFE**
(function () {
    let counter = 0; // Private variable (not accessible outside)

    function increment() {
        counter++;
        console.log(`Counter inside IIFE: ${counter}`);
    }

    increment(); // 1 ✅
    increment(); // 2 ✅
})(); 

// console.log(counter); // ❌ ERROR: counter is not defined (protected)
