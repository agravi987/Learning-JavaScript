// 📁 array-basics.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
📚 JavaScript Arrays - Fundamentals
------------------------------------------------------------------------- */

// ✅ **What is an Array?**
// - Arrays store multiple values in a single variable.
// - JavaScript arrays are **zero-indexed** (first element at index `0`).
// - Arrays can store **mixed data types**.

const numbers = [10, 20, 30, 40, 50];
console.log(numbers);

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

const mixedArray = [1, "Hello", true, null, { name: "JS" }, [1, 2, 3]];
console.log(mixedArray);

// ✅ **Accessing Elements**
console.log(fruits[0]); // "Apple"
console.log(fruits[fruits.length - 1]); // Last element

// ✅ **Modifying Elements**
fruits[1] = "Mango"; // Replace "Banana" with "Mango"
console.log(fruits);

/* -----------------------------------------------------------------------
🛠️ Common Array Methods
------------------------------------------------------------------------- */

// ✅ **Adding & Removing Elements**
fruits.push("Orange"); // Adds to the end
console.log(fruits);

fruits.pop(); // Removes last element
console.log(fruits);

fruits.unshift("Grapes"); // Adds to the start
console.log(fruits);

fruits.shift(); // Removes first element
console.log(fruits);

// ✅ **Concatenating Arrays**
const moreFruits = ["Pineapple", "Strawberry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// ✅ **Using Spread Operator for Concatenation**
const allFruits2 = [...fruits, ...moreFruits];
console.log(allFruits2);

/* -----------------------------------------------------------------------
🍉 Extracting & Modifying Array Elements
------------------------------------------------------------------------- */

// ✅ **Extracting a Part of an Array using `slice()`**
const slicedFruits = allFruits.slice(1, 4); // ["Apple", "Mango", "Cherry"]
console.log(slicedFruits); // doesnot make change in original array

// ✅ **Modifying Elements with `splice()`**
// - `splice(startIndex, deleteCount, itemsToAdd...)`
const splicedFruits = allFruits.splice(2, 1, "Peach", "Plum");
console.log(allFruits); // ["Grapes", "Apple", "Peach", "Plum", "Cherry", "Pineapple", "Strawberry"]
console.log(splicedFruits); // Removed element(s): ["Mango"]
// make changes in original array

/* -----------------------------------------------------------------------
🎯 Array Iteration (Looping)
------------------------------------------------------------------------- */

const scores = [5, 10, 15, 20];

// ✅ **`forEach()` - Loops through each element**
scores.forEach((score, index) => console.log(`Index ${index}: ${score}`));

// ✅ **`map()` - Creates a new array with modified values**
const doubleScores = scores.map((score) => score * 2);
console.log(doubleScores); // [10, 20, 30, 40]

// ✅ **`filter()` - Returns a new array with matching elements**
const highScores = scores.filter((score) => score > 10);
console.log(highScores); // [15, 20]

// ✅ **`find()` - Returns the first matching element**
const firstHighScore = scores.find((score) => score > 10);
console.log(firstHighScore); // 15

// ✅ **`some()` - Checks if at least one element meets a condition**
console.log(scores.some((score) => score > 15)); // true

// ✅ **`every()` - Checks if all elements meet a condition**
console.log(scores.every((score) => score > 2)); // true
