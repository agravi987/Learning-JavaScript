// 📁 datatypes.js

/*
    JavaScript is Dynamically typed language 
    - because type of variable is determined when the program is running
*/

"use strict"; // 🚀 Enforce modern JavaScript standards

// ⚠️ alert("This is alert");
// Note: 'alert' works in browsers, not in Node.js

/* -----------------------------------------------------------------------
🔤 Primitive Data Types (Call by Value) 
------------------------------------------------------------------------- */

// Primitives are stored directly in the stack memory.
// When assigned or passed, a **copy** is made (Call by Value).

let name = "Ravi";          // string
let age = 20;               // number
let isLoggedIn = false;     // boolean
let score = null;           // null
let userEmail;              // undefined
const uniqueId = Symbol("id"); // symbol
const bigNumber = 1234567890123456789012345678901234567890n; // bigInt

/*
📚 JavaScript Primitive Data Types:
- **number**     ➔ Numeric values (Range: ±(2^53 - 1))
- **bigInt**     ➔ For integers beyond Number limits (use 'n' suffix)
- **string**     ➔ Text values ("", '', ``) — immutable
- **boolean**    ➔ true / false
- **null**       ➔ Standalone value (intentional absence of value)
- **undefined**  ➔ Declared but not assigned
- **symbol**     ➔ Unique and immutable value (often for object keys)

💡 Key Points:
- Primitives are **immutable** (can't be changed directly).
- Stored in **stack** memory for fast access.
- Passed by **value** ➔ a new copy is created during assignment or function calls.
*/

// 🧮 Type Checking - Primitives
console.log(typeof name);          // "string"
console.log(typeof age);           // "number"
console.log(typeof isLoggedIn);    // "boolean"
console.log(typeof score);         // "object" (💡 JS quirk - typeof null is "object")
console.log(typeof userEmail);     // "undefined"
console.log(typeof uniqueId);      // "symbol"
console.log(typeof bigNumber);     // "bigint"

/* -----------------------------------------------------------------------
🏗️ Non-Primitive Data Types (Call by Reference)
------------------------------------------------------------------------- */

// Non-primitives are stored in heap memory. Variables hold references (not actual data).

const languages = ["JavaScript", "Python", "C++"]; // Array
const user = {                                     // Object
    name: "Ravi",
    age: 20
};
function greet() {                                 // Function
    console.log("Hello World");
}

/*
📚 JavaScript Non-Primitive Data Types:
- **Object**   ➔ Key-value pairs (e.g., { name: "Ravi" })
- **Array**    ➔ Ordered collection (e.g., [1, 2, 3]) — technically an object
- **Function** ➔ Callable object with code (special type)

💡 Key Points:
- Stored in **heap** memory, with variables holding references.
- Passed by **reference** ➔ changes to one reference affect all.
- Complex structures can be nested.
*/

// 🧮 Type Checking - Non-Primitives
console.log(typeof languages);     // "object" (Arrays are objects)
console.log(typeof user);          // "object"
console.log(typeof greet);         // "function" (Functions have a special typeof)

console.log(Array.isArray(languages)); // true (✅ Best way to check for arrays)

/* -----------------------------------------------------------------------
🔄 Primitive vs Non-Primitive: Key Differences
------------------------------------------------------------------------- */
/*
1️⃣ **Memory Storage:**
- Primitives ➔ Stored in **stack**.
- Non-Primitives ➔ Stored in **heap**, with a reference in stack.

2️⃣ **Mutability:**
- Primitives ➔ Immutable (e.g., strings can't be changed in place).
- Non-Primitives ➔ Mutable (e.g., objects/arrays can be modified).

3️⃣ **Passing to Functions:**
- Primitives ➔ Passed by **value** (creates a copy).
- Non-Primitives ➔ Passed by **reference** (modifies original).

4️⃣ **Type Checking:**
- Primitives ➔ `typeof` works directly.
- Non-Primitives ➔ Use `Array.isArray()` for arrays, or `instanceof` for objects.
*/

/* -----------------------------------------------------------------------
⚡ Interesting Facts & Interview Nuggets
------------------------------------------------------------------------- */
/*
💡 **1. typeof null is "object"**  
- A known JavaScript quirk due to legacy reasons.

💡 **2. Symbol Uniqueness:**  
- Symbols are always unique:
    const sym1 = Symbol("id");
    const sym2 = Symbol("id");
    console.log(sym1 === sym2); // false

💡 **3. Copying Objects/Arrays (Avoiding Reference Issues):**  
- Shallow copy ➔ `const copy = { ...original }` or `[...array]`
- Deep copy ➔ `JSON.parse(JSON.stringify(obj))` (⚠️ loses functions & symbols)

💡 **4. null vs undefined:**  
- `null` ➔ Intentional absence of value (set by dev).
- `undefined` ➔ Variable declared but not assigned (default by JS).

💡 **5. Checking for Object:**  
- `typeof []` ➔ "object" (arrays are objects)
- `typeof {}` ➔ "object"
- Use `Array.isArray()` for arrays.
- To check for pure objects:  
    `Object.prototype.toString.call(obj) === "[object Object]"`
*/

/* -----------------------------------------------------------------------
🧪 Code Examples: Call by Value vs Reference
------------------------------------------------------------------------- */

// 🟢 Call by Value (Primitives)
let a = 10;
let b = a;  // Copies the value
b++;
console.log(a); // 10 (original remains unchanged)
console.log(b); // 11

// 🔴 Call by Reference (Non-Primitives)
let obj1 = { key: "value" };
let obj2 = obj1;  // Copies the reference
obj2.key = "new value";
console.log(obj1.key); // "new value" (both point to same object)

/* -----------------------------------------------------------------------
🚀 Best Practices:
------------------------------------------------------------------------- 
- Use **const** for arrays/objects unless reassignment is needed.
- Use `Array.isArray()` for accurate array checking.
- Be mindful of reference copying when working with objects/arrays.
*/
