// 📁 object-basics.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
📦 JavaScript Objects - Fundamentals
------------------------------------------------------------------------- */

// ✅ **What is an Object?**
// - Objects store **key-value pairs**.
// - Keys are **always strings or symbols** (Even if you write numbers).
// - Objects are **unordered** (Unlike arrays).
// - Objects can store **functions** (methods).

// ✅ **Creating an Object (Object Literal)**
const mySym = Symbol("key1"); // Creating a Symbol

const user = {
    name: "Ravi", 
    "full name": "Ravi Agrahari", // ✅ Key with space (must use quotes)
    [mySym]: "This is a Symbol as key", // ✅ Symbol as a key
    email: "ravi@gmail.com",
    location: "Parasi", 
    isLoggedIn: false, // ✅ Boolean value (corrected from "False")
};

// ✅ **Accessing Object Properties**
console.log(user.name); // "Ravi"
console.log(user["full name"]); // "Ravi Agrahari" (Bracket notation for special keys)
console.log(user[mySym]); // "This is a Symbol as key" ✅ Accessing Symbol key

// ❌ Incorrect ways:
// console.log(user."full name");  // ❌ Syntax Error
// console.log(user.mySym);        // ❌ Undefined (Symbols are not accessible like this)

/* -----------------------------------------------------------------------
✏️ Modifying & Freezing Objects
------------------------------------------------------------------------- */

// ✅ **Modifying Values**
user.email = "ravi0143@gmail.com"; 
console.log(user.email); // "ravi0143@gmail.com"

// ✅ **Locking an Object (Prevent Modifications)**
// Object.freeze(user); // 🔒 Freezes the object, preventing changes

user.location = "Nepal"; // ❌ Won't change if object is frozen
console.log(user.location); // "Parasi" (if frozen)

/* -----------------------------------------------------------------------
⚡ Methods in Objects (Functions inside Objects)
------------------------------------------------------------------------- */

// ✅ **Adding a Function to an Object**
user.greet = function() {
    return "HELLO, SIR!!!";
};

console.log(user.greet); // Prints the function definition
console.log(user.greet()); // Executes function -> "HELLO, SIR!!!"

// ✅ **Using `this` Keyword to Access Object Properties**
user.greetWithName = function() {
    return `Hello ${this.name}, how are you, man???`; 
    // `this` refers to the current object
};

console.log(user.greetWithName()); // "Hello Ravi, how are you, man???"

/* -----------------------------------------------------------------------
📌 Key Object Concepts & Best Practices
------------------------------------------------------------------------- */

/*
💡 **1. Object Property Shorthand**
  - If a variable name matches a key, you can write `{ name }` instead of `{ name: name }`.
  
💡 **2. Checking if a Key Exists in an Object**
  - `'name' in user` ➡ `true`
  - `'age' in user` ➡ `false`

💡 **3. Looping Over Object Keys**
  - `Object.keys(user)` ➡ Returns an array of keys.
  - `Object.values(user)` ➡ Returns an array of values.
  - `Object.entries(user)` ➡ Returns an array of `[key, value]` pairs.
  
💡 **4. Cloning Objects (Avoid Direct Reference)**
  - `const newUser = { ...user };` (Best method)
  - `const newUser = Object.assign({}, user);` (Alternative)
  
💡 **5. Merging Objects**
  - `const merged = { ...user, ...anotherUser };`
*/

