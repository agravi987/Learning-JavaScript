// 📁 conversionOperation.js

"use strict"; // 🚀 Enforce modern JavaScript standards

// 🔢 Conversion to Number

// Example 1: Converting a string to number
let score = "95"; // Try with undefined, true, false, or "Ravi"
console.log(score, typeof score); // "95" string

let scoreInNumber = Number(score);
console.log(scoreInNumber, typeof scoreInNumber); // 95 number

// Example 2: Converting null
let score1 = null;
console.log(score1, typeof score1); // null "object"

let score1InNumber = Number(score1);
console.log(score1InNumber, typeof score1InNumber); // 0 number

// Example 3: Invalid string to number
let score2 = "95abc";
console.log(score2, typeof score2); // "95abc" string

let score2InNumber = Number(score2);
console.log(score2InNumber, typeof score2InNumber); // NaN number

/* 
📚 Notes on Number Conversion:
- "95"        ➔ 95
- "95abc"     ➔ NaN (Not a Number)
- true        ➔ 1
- false       ➔ 0
- null        ➔ 0
- undefined   ➔ NaN
*/

// 🔄 Conversion to Boolean

let isLoggedIn = null; // Try with 0, 23, "Ravi", "", NaN, undefined
console.log(isLoggedIn, typeof isLoggedIn); // null "object"

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn, typeof boolIsLoggedIn); // false boolean

/* 
📚 Notes on Boolean Conversion:
✅ Truthy Values:
- 1, 23 ➔ true
- "Ravi" ➔ true

❌ Falsy Values:
- 0 ➔ false
- "" ➔ false
- NaN ➔ false
- undefined ➔ false
- null ➔ false
*/

// 📝 Conversion to String

let num = 25; // Try with NaN, null, undefined, true, false
console.log(num, typeof num); // 25 number

let string = String(num);
console.log(string, typeof string); // "25" string

/* 
📚 Notes on String Conversion:
- 25        ➔ "25"
- NaN       ➔ "NaN"
- null      ➔ "null"
- undefined ➔ "undefined"
- true      ➔ "true"
- false     ➔ "false"
*/

/* 
💡 Quick Tips:
- Use `Number()`, `Boolean()`, and `String()` for explicit type conversions.
- Be cautious with loose type coercion (`==`) in JavaScript—prefer strict equality (`===`).
- Use `isNaN()` to check if a value is NaN.
*/
