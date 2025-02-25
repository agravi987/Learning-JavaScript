// 📁 datatypes.js

"use strict"; // 🚀 Enforce modern JavaScript standards

// ⚠️ alert("This is alert"); 
// Note: 'alert' works in browsers, not in Node.js

// 🔤 Primitive Data Types
let name = "Ravi";          // string
let age = 20;               // number
let isLoggedIn = false;     // boolean

/*
📚 JavaScript Primitive Data Types:
- number   ➔ Numeric values (Range: ±(2^53 - 1))
- bigInt   ➔ For large integers beyond Number limits
- string   ➔ Text values wrapped in quotes ("", '', ``)
- boolean  ➔ true / false
- null     ➔ Standalone value (intentional absence of value)
- undefined ➔ Variable declared but not assigned
- symbol   ➔ Unique and immutable values (used for object property keys)
*/

// 🧮 Type Checking
console.log(typeof name);        // "string"
console.log(typeof age);         // "number"
console.log(typeof isLoggedIn);  // "boolean"

// ⚠️ Special Cases
console.log(typeof null);        // "object" (💡 JS quirk - officially a bug)
console.log(typeof undefined);   // "undefined"

// 🏗️ Complex Data Types
console.log(typeof []);          // "object" (Arrays are objects in JS)
console.log(typeof {});          // "object" (Standard object)
console.log(typeof function(){}); // "function" (Functions have their own type)

/*
💡 Interesting Facts:
- 'typeof null' returns "object" due to a legacy bug.
- Arrays, functions, and objects all return "object" with typeof, except functions which return "function".
- 'undefined' means a variable has been declared but not assigned a value.
- Use 'Array.isArray()' to check for arrays.
*/

// 🧪 Example:
const sampleArray = [1, 2, 3];
console.log(Array.isArray(sampleArray)); // true
