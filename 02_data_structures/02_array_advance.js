// 📁 array-advanced.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
📊 Sorting & Reversing Arrays
------------------------------------------------------------------------- */

const numbers = [100, 3, 25, 7];

// ✅ Sorting Strings (Default)
const words = ["Banana", "Orange", "Apple", "Mango"];
words.sort();
console.log(words); // ["Apple", "Banana", "Mango", "Orange"]

// ⚠️ Sorting Numbers Incorrectly (Lexicographic)
numbers.sort();
console.log(numbers); // [100, 25, 3, 7] ❌ Wrong!

// ✅ Sorting Numbers Correctly (Ascending Order)
numbers.sort((a, b) => a - b);
console.log(numbers); // [3, 7, 25, 100] ✅ Correct

// ✅ Sorting Numbers in Descending Order
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 25, 7, 3]

// ✅ Reversing an Array
words.reverse();
console.log(words); // ["Mango", "Apple", "Orange", "Banana"]

/* -----------------------------------------------------------------------
📝 Advanced Methods & Performance Best Practices
------------------------------------------------------------------------- */

// ✅ **Reduce Method - Aggregating Values**
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // Sum of all elements

// ✅ **Flattening Nested Arrays (Removes Nested Levels)**
const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6]

// ✅ **Filling an Array with a Value**
const arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// ✅ **Finding Index of First Matching Element**
console.log(numbers.findIndex((num) => num > 10)); // Index of first match

// ✅ **Checking if an Array Includes an Element**
console.log(numbers.includes(25)); // true

/* -----------------------------------------------------------------------
🎭 Transforming & Converting Arrays
------------------------------------------------------------------------- */

// ✅ **Convert an Array to a String**
console.log(["A", "B", "C"].join("-")); // "A-B-C"

// ✅ **Convert a String to an Array**
console.log("Hello World".split(" ")); // ["Hello", "World"]

// ✅ **Reverse a String using Arrays**
console.log("JavaScript".split("").reverse().join("")); // "tpircSavaJ"

/* -----------------------------------------------------------------------
📌 Interview Tips & Tricks
------------------------------------------------------------------------- */

/*
💡 **1. How to check if a variable is an array?**
  - `Array.isArray([])` ✅ (Correct)
  - `typeof [] === "object"` ❌ (Incorrect)

💡 **2. Performance Optimization:**
  - Use `map()`, `filter()`, and `reduce()` instead of loops for readability.
  - Use `Set` to remove duplicates efficiently.

💡 **3. Removing Duplicates from an Array**
  - `[1, 2, 2, 3, 4, 4, 5]` ➡ `new Set([1, 2, 2, 3, 4, 4, 5])` ➡ `{1, 2, 3, 4, 5}`
  - Convert back to an array: `[...new Set(arr)]`
*/

/* -----------------------------------------------------------------------
🔄 Converting Other Data Types into Arrays
------------------------------------------------------------------------- */

// ✅ **Check if a Variable is an Array**
console.log(Array.isArray("Ravi Agrahari")); // false

// ✅ **Convert a String into an Array (Each Character as an Element)**
console.log(Array.from("Ravi Agrahari")); 
// ["R", "a", "v", "i", " ", "A", "g", "r", "a", "h", "a", "r", "i"]

// ❌ **Trying to Convert an Object into an Array**
console.log(Array.from({ name: "Ravi", age: 20 })); 
// Returns `[]` because objects need `keys` or `values` specified

// ✅ **Using `Array.of()` to Create an Array from Individual Values**
let mark1 = 40;
let mark2 = 45;
let mark3 = 75;
console.log(Array.of(mark1, mark2, mark3)); // [40, 45, 75]
