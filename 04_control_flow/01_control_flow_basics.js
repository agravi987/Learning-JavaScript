"use strict"; // 🚀 Enforce modern JavaScript standards

/* ------------------------------------------------------------------------
🔹 JavaScript Control Flow - Basics
------------------------------------------------------------------------- */

/*
📌 **Control flow** determines how code executes in a program.
    - Conditional Statements (`if`, `else if`, `else`, `switch`)
    - Loops (`for`, `while`, `do-while`)
    - Jump Statements (`break`, `continue`)
*/


// Falsy values in JavaScript: 
// false, 0, -0, 0n, "", '', ``, null, undefined, NaN.
// Everything else is truthy.

/* ------------------------------------------------------------------------
🎯 1. Conditional Statements (if, else if, else)
------------------------------------------------------------------------- */

let age = 18;

if (age < 18) {
    console.log("🔴 You are a minor.");
} else if (age === 18) {
    console.log("🟡 You just became an adult!");
} else {
    console.log("🟢 You are an adult.");
}

// ✅ **Ternary Operator (Shorter if-else)**
let isMember = true;
let discount = isMember ? "✅ 10% Discount Applied" : "❌ No Discount";
console.log(discount);

// ✅ **Switch Case (For Multiple Conditions)**
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("📅 Start of the week!");
        break;
    case "Friday":
        console.log("🎉 Weekend is near!");
        break;
    default:
        console.log("📆 A regular day.");
}

/* ------------------------------------------------------------------------
🎯 2. Loops in JavaScript (for, while, do-while)
------------------------------------------------------------------------- */

// ✅ **For Loop**
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration: ${i}`);
}

// ✅ **While Loop**
let count = 1;
while (count <= 3) {
    console.log(`While Loop Count: ${count}`);
    count++;
}

// ✅ **Do-While Loop** (Executes at least once)
let num = 0;
do {
    console.log("🔁 Do-while executed at least once!");
} while (num > 0);

/* ------------------------------------------------------------------------
🎯 3. Break & Continue
------------------------------------------------------------------------- */

// ✅ **Break (Stops Loop)**
for (let i = 1; i <= 5; i++) {
    if (i === 3) break; // Stops loop at 3
    console.log(i);
}

// ✅ **Continue (Skips Iteration)**
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Skips 3
    console.log(i);
}

/* ------------------------------------------------------------------------
🎯 4. Logical Operators (&&, ||, !)
------------------------------------------------------------------------- */

let isAdult = age >= 18 && isMember;
console.log("🏆 Eligible for premium:", isAdult);




/* ------------------------------------------------------------------------
💡 Interview Tips
------------------------------------------------------------------------- */

/*
✅ Use `switch` when you have **multiple fixed conditions**.
✅ Prefer `for` loop for **fixed iterations**, and `while` for **unknown conditions**.
✅ `break` exits the loop immediately, while `continue` skips the current iteration.
✅ Use `&&`, `||`, `!` to simplify condition checks.
*/
