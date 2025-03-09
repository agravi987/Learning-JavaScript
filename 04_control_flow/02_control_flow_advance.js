"use strict"; // 🚀 Enforce modern JavaScript standards

/* ------------------------------------------------------------------------
🔹 JavaScript Control Flow - Advanced
------------------------------------------------------------------------- */

/*
📌 **Advanced Control Flow Concepts**
    - Nested Conditions & Loops
    - Labelled Break & Continue
    - Error Handling (try-catch)
    - Short-Circuiting & Nullish Coalescing
    - Iterating Over Objects & Arrays
    - Recursion
*/

/* ------------------------------------------------------------------------
🎯 1. Nested Conditions (if inside if)
------------------------------------------------------------------------- */

let temperature = 30;

if (temperature > 35) {
    console.log("🔥 It's too hot!");
} else {
    if (temperature < 15) {
        console.log("❄️ It's too cold!");
    } else {
        console.log("🌤️ The weather is nice.");
    }
}

/* ------------------------------------------------------------------------
🎯 2. Nested Loops (Loop inside a Loop)
------------------------------------------------------------------------- */

for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

/* ------------------------------------------------------------------------
🎯 3. Labelled Break & Continue
------------------------------------------------------------------------- */

outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break outerLoop; // Exits entire outer loop
        console.log(`i=${i}, j=${j}`);
    }
}

/* ------------------------------------------------------------------------
🎯 4. Error Handling (Try-Catch)
------------------------------------------------------------------------- */

try {
    let x = undefinedVariable; // ❌ This will throw an error
} catch (error) {
    console.log("⚠️ Caught an error:", error.message);
} finally {
    console.log("✅ This always runs.");
}

/* ------------------------------------------------------------------------
🎯 5. Short-Circuiting & Nullish Coalescing
------------------------------------------------------------------------- */

// ✅ Short-Circuiting (|| -> Fallback Value)
let user = null;
let userName = user || "Guest"; // If `user` is null, use "Guest"
console.log(userName);

// ✅ Nullish Coalescing Operator (?? -> Only Checks null/undefined)
let score = 0;
let finalScore = score ?? "No score available"; // 0 is valid, but null/undefined fallback
console.log(finalScore);

/* ------------------------------------------------------------------------
🎯 6. Iterating Over Objects & Arrays
------------------------------------------------------------------------- */

// ✅ **For..of Loop (For Arrays)**
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// ✅ **For..in Loop (For Objects)**
let person = { name: "Ravi", age: 20, city: "Nepal" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

/* ------------------------------------------------------------------------
🎯 7. Recursion (Function Calling Itself)
------------------------------------------------------------------------- */

function countdown(n) {
    if (n === 0) {
        console.log("🚀 Blast Off!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}
countdown(5);

/* ------------------------------------------------------------------------
💡 Interview Tips
------------------------------------------------------------------------- */

/*
✅ **Try-Catch** is essential for handling runtime errors gracefully.
✅ **Short-circuiting (||, &&, ??)** helps optimize conditions.
✅ **For..of** is best for arrays, while **For..in** is best for objects.
✅ **Recursion** is useful for problems like tree traversal, factorial, etc.
✅ Use **Labelled Break/Continue** carefully to avoid unnecessary complexity.
*/
