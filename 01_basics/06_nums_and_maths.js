// 📁 numbers-maths.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🔢 Numbers in JavaScript
------------------------------------------------------------------------- */

// JavaScript has only one number type: **double-precision 64-bit floating-point (IEEE 754 standard).**  

const score = 500; 
console.log(score); // 500 (Number type)

// **Number Object (Non-Primitive)**
const amount = new Number(200);
console.log(amount); // [Number: 200] (Object wrapper for number)

/*
💡 **Primitive vs Object Number:**
- **Primitives** are stored directly in stack memory.
- **Objects** are stored in heap memory and have additional properties/methods.
*/

// 🔍 Decimal Numbers
const price = 10.34548576;
console.log(price); // 10.34548576

/* -----------------------------------------------------------------------
📚 Number Methods
------------------------------------------------------------------------- */

// 📝 Convert Number to String
console.log(score.toString());       // "500"
console.log(score.toString().length); // 3
console.log(score.toString()[2]);    // "0" (Indexing works like strings)

// 🎯 Formatting Decimal Places
console.log(price.toFixed(2)); // "10.35" (Rounds to 2 decimal places)

/*
💡 **Usage of `toFixed()`:**
- Used in financial calculations to ensure proper decimal formatting.
- Returns a **string**, not a number.
*/

// 🎯 Precision Control
const someNum = 111126.79565526; // Try 12.79565526, 126.79565526
console.log(someNum.toPrecision(3)); // "1.11e+5" (Returns a string with 3 significant digits)

/*
💡 **`toPrecision()` Notes:**
- Used for significant figure precision.
- Returns a string.
- Can return scientific notation (`e` notation) for large numbers.
*/

// 🎯 Formatting Numbers as Locale Strings
const largeNum = 100100001000100;
console.log(largeNum.toLocaleString("en-IN")); // "1,00,10,00,01,00,0100" (Indian format)
console.log(largeNum.toLocaleString("en-US")); // "100,100,001,000,100" (US format)

/*
💡 **Why use `toLocaleString()`?**
- Formats numbers with commas (useful for currency and readability).
- Supports different locales (`en-IN` for India, `en-US` for the US).
*/

/* -----------------------------------------------------------------------
🧮 Math Object (Built-in Utility for Mathematics)
------------------------------------------------------------------------- */

// The `Math` object provides various mathematical functions and constants.

console.log(Math.PI);  // 3.141592653589793
console.log(Math.E);   // Euler’s number (2.718)

// 🚀 Absolute Value
console.log(Math.abs(-42)); // 42

// 🔺 Rounding Methods
console.log(Math.round(4.6));  // 5  (Standard rounding)
console.log(Math.ceil(4.2));   // 5  (Always rounds up)
console.log(Math.floor(4.9));  // 4  (Always rounds down)
console.log(Math.trunc(4.9));  // 4  (Removes decimal part, no rounding)

// 🎲 Random Numbers
console.log(Math.random());      // Random number between 0 and 1
console.log(Math.random() * 10); // Between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Between 1 and 10 (Integer)

/*
💡 **Generating Random Numbers in a Range**
Formula: `Math.floor(Math.random() * (max - min + 1)) + min`
Example: Random number between 50 and 100
*/
const min = 50;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// 🔢 Power & Square Root
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.sqrt(16));  // 4 (√16)

// 🎯 Min & Max
console.log(Math.min(2, 8, 1, 5)); // 1 (Smallest value)
console.log(Math.max(2, 8, 1, 5)); // 8 (Largest value)

// 🎯 Trigonometry
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1

/* -----------------------------------------------------------------------
📌 Interesting Facts & Interview Nuggets
------------------------------------------------------------------------- */

/*
💡 **1. JavaScript Number Limitations**
- Numbers are stored as **64-bit floating points**.
- **Maximum Safe Integer:** `Number.MAX_SAFE_INTEGER` (≈ 9 quadrillion)
- **Minimum Safe Integer:** `Number.MIN_SAFE_INTEGER` (-9 quadrillion)
- Beyond this, use `BigInt`.

💡 **2. BigInt for Large Numbers**
- JavaScript introduced **BigInt** for numbers larger than `Number.MAX_SAFE_INTEGER`.
- Create a BigInt by appending `n`:
    const big = 9007199254740991n;  // BigInt
    console.log(typeof big); // "bigint"

💡 **3. `NaN` (Not-a-Number)**
- `typeof NaN === "number"` (weird but true!)
- `NaN` is the result of invalid mathematical operations:
    console.log(0 / 0);       // NaN
    console.log(Math.sqrt(-1)); // NaN
    console.log(parseInt("Hello")); // NaN

💡 **4. `Infinity` and `-Infinity`**
- `1 / 0` results in **Infinity**.
- `-1 / 0` results in **-Infinity**.
- Useful in boundary condition checks.

💡 **5. Why use `Math.trunc()` instead of `Math.floor()`?**
- `Math.trunc()` simply removes decimals (works for both positive & negative).
- `Math.floor()` rounds **down** (careful with negative numbers).
    console.log(Math.floor(-4.7)); // -5
    console.log(Math.trunc(-4.7)); // -4
*/

/* -----------------------------------------------------------------------
🚀 Best Practices:
------------------------------------------------------------------------- 
✅ Use `Number.isInteger(value)` to check if a number is an integer.
✅ Prefer `Math.trunc()` over `parseInt()` for removing decimals.
✅ Use `toFixed(2)` for currency display.
✅ Avoid floating-point precision issues (e.g., `0.1 + 0.2 !== 0.3`).
✅ Use `Number.EPSILON` for precision comparisons:
    function isEqual(a, b) {
        return Math.abs(a - b) < Number.EPSILON;
    }
*/

/* -----------------------------------------------------------------------
🧪 Quick Practice:
------------------------------------------------------------------------- */

// ✅ Generate a Random Number Between 1 and 100
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Random Number (1-100): ${randomNum}`);

// ✅ Convert Decimal to Fixed 2 Digits
const decimalNum = 45.6789;
console.log(decimalNum.toFixed(2)); // "45.68"

// ✅ Check if a Number is Integer
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.5)); // false

// ✅ Convert String to Number
console.log(Number("1234"));   // 1234
console.log(parseFloat("12.34")); // 12.34
console.log(parseInt("12px")); // 12 (Parses integer from string)

// ✅ Handle NaN Check
console.log(isNaN("hello")); // true
console.log(isNaN(123)); // false
