"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🔹 JavaScript Functions - Basics
------------------------------------------------------------------------- */

// ✅ **Function Declaration (Regular Function)**
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

console.log(greetUser("Ravi")); // "Hello, Ravi! Welcome to JavaScript."

/* -----------------------------------------------------------------------
📌 Function Expressions (Assigning Functions to Variables)
------------------------------------------------------------------------- */

// ✅ **Anonymous Function Expression**
const add = function (a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
};

add(20, 30); // "The sum of 20 and 30 is 50"

// ✅ **Named Function Expression**
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

console.log(multiply(5, 10)); // 50

/* -----------------------------------------------------------------------
🎯 Arrow Functions (ES6+)
------------------------------------------------------------------------- */

// ✅ **Arrow Function Syntax**
const greet = (username) => {
    return `Hello ${username}, how are you?`;
};

console.log(greet("Ravi")); // "Hello Ravi, how are you?"

// ✅ **Implicit Return (Shorter Syntax)**
const square = (num) => num * num;
console.log(square(4)); // 16

// ✅ **Arrow Function Without Parentheses (Single Parameter)**
const sayHello = name => `Hey ${name}!`;
console.log(sayHello("John")); // "Hey John!"

/* -----------------------------------------------------------------------
⚠️ Handling Missing Parameters & Default Values
------------------------------------------------------------------------- */

console.log(greet()); // ❌ "Hello undefined, how are you?"

// ✅ **Using Default Parameters**
const greetWithDefault = (username = "Guest") => `Hello, ${username}!`;
console.log(greetWithDefault()); // ✅ "Hello, Guest!"

// ✅ **Using Logical OR (`||`) for Default Values**
const greetUserAlt = (name) => `Hello, ${name || "User"}!`;
console.log(greetUserAlt()); // ✅ "Hello, User!"

/* -----------------------------------------------------------------------
📌 Passing Arrays in Functions
------------------------------------------------------------------------- */

const numbers = [10, 20, 30, 40, 50];

function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray(numbers)); // 150

// ✅ **Using Spread Operator to Pass Elements Individually**
function findMax(...nums) {
    return Math.max(...nums);
}

console.log(findMax(...numbers)); // 50

