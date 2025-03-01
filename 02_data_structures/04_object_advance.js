// 📁 object-advanced.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
📦 JavaScript Objects - Advanced Concepts
------------------------------------------------------------------------- */

// ✅ **Creating an Object (Dynamic Assignment)**
const faceBookUser = {}; // Empty object

// ✅ **Dynamically Adding Properties**
faceBookUser.id = "Ravi";
faceBookUser.password = "something";
faceBookUser.age = 20;
faceBookUser.isLoggedIn = false;

console.log(faceBookUser);

/* -----------------------------------------------------------------------
📌 Extracting Keys, Values & Entries
------------------------------------------------------------------------- */

// ✅ **Getting Keys & Values from an Object**
console.log(Object.keys(faceBookUser)); // ["id", "password", "age", "isLoggedIn"]
console.log(Object.values(faceBookUser)); // ["Ravi", "something", 20, false]
console.log(Object.entries(faceBookUser)); // [["id", "Ravi"], ["password", "something"], ...]

// ✅ **Checking if an Object has a Specific Property**
console.log(faceBookUser.hasOwnProperty("isLoggedIn")); // true

/* -----------------------------------------------------------------------
🏗️ Nested Objects (Objects Inside Objects)
------------------------------------------------------------------------- */

const regularUser = {
    info: {
        name: {
            fullName: {
                firstName: "Ravi",
                lastName: "Agrahari",
            },
            nickName: "Ravi",
        },
    },
    address: {
        permanentAddress: {},
        temporaryAddress: {},
    },
};

// ✅ **Accessing Nested Object Properties**
console.log(regularUser);
console.log(regularUser.info);
console.log(regularUser.info.name);
console.log(regularUser.info.name.fullName);
console.log(regularUser.info.name.fullName.firstName); // "Ravi"

/* -----------------------------------------------------------------------
❓ Optional Chaining (?.) - Avoid Errors with Deeply Nested Objects
------------------------------------------------------------------------- */

// ✅ **Using Optional Chaining to Prevent Errors**
console.log(regularUser.info?.name?.fullName); // ✅ If `info` or `name` is missing, returns `undefined`

/* -----------------------------------------------------------------------
📌 Merging & Combining Objects
------------------------------------------------------------------------- */

let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "x", 4: "y" };

// ❌ **Incorrect Merging (Objects inside Objects)**
let obj3 = { obj1, obj2 };
console.log(obj3); // { obj1: {1:'a', 2:'b'}, obj2: {3:'x', 4:'y'} }
console.log(obj3.obj1[1]); // "a"

// ✅ **Correct Merging using `Object.assign()`**
const obj4 = Object.assign({}, obj1, obj2); // Similar to `[].flat()` in arrays
console.log(obj4); // {1:'a', 2:'b', 3:'x', 4:'y'}

// ✅ **Best Method: Using Spread Operator**
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // {1:'a', 2:'b', 3:'x', 4:'y'}

/* -----------------------------------------------------------------------
📌 Array of Objects (Common Use Case)
------------------------------------------------------------------------- */

const users = [
    { id: 1, email: "one@gmail.com" },
    { id: 2, email: "two@gmail.com" },
    { id: 3, email: "three@gmail.com" },
];

// ✅ **Accessing Elements in an Array of Objects**
console.log(users[0].email); // "one@gmail.com"

/* -----------------------------------------------------------------------
📌 Interview Tips & Best Practices
------------------------------------------------------------------------- */

/*
💡 **1. Object.keys(), Object.values(), Object.entries()**
  - Helps iterate over objects easily.
  
💡 **2. Checking Property Existence**
  - `'key' in obj` ✅ Best for checking if a key exists.
  - `obj.hasOwnProperty('key')` ✅ Works but not on inherited properties.

💡 **3. Cloning Objects (Avoid Direct Reference)**
  - `const newUser = { ...user };` (Best method)
  - `const newUser = Object.assign({}, user);` (Alternative)

💡 **4. Performance Considerations**
  - Use `Object.freeze()` to prevent modifications.
  - Use `Object.seal()` if you want to prevent adding/removing keys but allow modifications.

💡 **5. Deep Copying vs. Shallow Copying**
  - `const newObj = { ...oldObj }` (Shallow copy)
  - `const deepClone = JSON.parse(JSON.stringify(oldObj))` (Deep copy but loses functions)
*/

