// 📁 operators.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* ------------------------ 🔢 Arithmetic Operators ------------------------ */
console.log("🔢 Arithmetic Operations:");
console.log("2 + 2 =", 2 + 2);    // ➔ 4 (Addition)
console.log("2 - 2 =", 2 - 2);    // ➔ 0 (Subtraction)
console.log("2 / 2 =", 2 / 2);    // ➔ 1 (Division)
console.log("2 * 2 =", 2 * 2);    // ➔ 4 (Multiplication)
console.log("2 ** 3 =", 2 ** 3);  // ➔ 8 (Exponentiation: 2^3)
console.log("5 % 2 =", 5 % 2);    // ➔ 1 (Modulus: remainder)
console.log("++count =", ++[2]);  // ➔ 3 (Pre-increment)
console.log("count-- =", [2]--);  // ➔ 2 (Post-decrement)

/*
📚 Arithmetic Operators:
- `+`  ➔ Addition
- `-`  ➔ Subtraction
- `*`  ➔ Multiplication
- `/`  ➔ Division
- `**` ➔ Exponentiation
- `%`  ➔ Modulus (Remainder)
- `++` ➔ Increment
- `--` ➔ Decrement
*/

/* ----------------------- 📝 Assignment Operators ------------------------ */
console.log("\n📝 Assignment Operators:");

let a = 10;
a += 5;  // Same as a = a + 5
console.log("a += 5 ➔", a); // ➔ 15

a -= 3;
console.log("a -= 3 ➔", a); // ➔ 12

a *= 2;
console.log("a *= 2 ➔", a); // ➔ 24

a /= 4;
console.log("a /= 4 ➔", a); // ➔ 6

a %= 4;
console.log("a %= 4 ➔", a); // ➔ 2

a **= 3;
console.log("a **= 3 ➔", a); // ➔ 8

/*
📚 Assignment Operators:
- `=`   ➔ Assign value
- `+=`  ➔ Add and assign
- `-=`  ➔ Subtract and assign
- `*=`  ➔ Multiply and assign
- `/=`  ➔ Divide and assign
- `%=`  ➔ Modulus and assign
- `**=` ➔ Exponentiate and assign
*/

/* ----------------------- 🔍 Comparison Operators ----------------------- */
console.log("\n🔍 Comparison Operators:");

console.log("2 == '2' ➔", 2 == '2');   // ➔ true (loose equality, type coercion)
console.log("2 === '2' ➔", 2 === '2'); // ➔ false (strict equality, no coercion)
console.log("5 != '5' ➔", 5 != '5');   // ➔ false
console.log("5 !== '5' ➔", 5 !== '5'); // ➔ true
console.log("5 > 3 ➔", 5 > 3);         // ➔ true
console.log("5 < 3 ➔", 5 < 3);         // ➔ false
console.log("5 >= 5 ➔", 5 >= 5);       // ➔ true
console.log("3 <= 5 ➔", 3 <= 5);       // ➔ true

/*
📚 Comparison Operators:
- `==`  ➔ Equal (loose)
- `===` ➔ Strict Equal (type-safe)
- `!=`  ➔ Not Equal
- `!==` ➔ Strict Not Equal
- `>`   ➔ Greater than
- `<`   ➔ Less than
- `>=`  ➔ Greater than or equal
- `<=`  ➔ Less than or equal
*/

/* ----------------------- ⚡ Logical Operators -------------------------- */
console.log("\n⚡ Logical Operators:");

console.log("true && false ➔", true && false); // ➔ false
console.log("true || false ➔", true || false); // ➔ true
console.log("!true ➔", !true);                 // ➔ false

/*
📚 Logical Operators:
- `&&` ➔ AND (returns first falsy or last truthy)
- `||` ➔ OR  (returns first truthy)
- `!`  ➔ NOT (inverts boolean)
*/

/* ----------------------- 🧵 String Concatenation ----------------------- */
console.log("\n🧵 String Concatenation:");

console.log('"Ravi" + " Agrahari" ➔', "Ravi" + " Agrahari");  // ➔ "Ravi Agrahari"
console.log('"1" + 2 ➔', "1" + 2);        // ➔ "12"
console.log('1 + "2" ➔', 1 + "2");        // ➔ "12"
console.log('"1" + 2 + 3 ➔', "1" + 2 + 3); // ➔ "123"
console.log('1 + 2 + "2" ➔', 1 + 2 + "2"); // ➔ "32"

/* 
💡 Type Coercion:
- If any operand is a string, JS converts the rest to strings.
- Left-to-right evaluation affects results.
*/

/* ----------------------- 🧮 Bitwise Operators ------------------------- */
console.log("\n🧮 Bitwise Operators:");

console.log("5 & 1 ➔", 5 & 1);   // ➔ 1 (AND)
console.log("5 | 1 ➔", 5 | 1);   // ➔ 5 (OR)
console.log("5 ^ 1 ➔", 5 ^ 1);   // ➔ 4 (XOR)
console.log("~5 ➔", ~5);         // ➔ -6 (NOT)
console.log("5 << 1 ➔", 5 << 1); // ➔ 10 (Left shift)
console.log("5 >> 1 ➔", 5 >> 1); // ➔ 2 (Right shift)

/*
📚 Bitwise Operators:
- `&`  ➔ AND
- `|`  ➔ OR
- `^`  ➔ XOR
- `~`  ➔ NOT
- `<<` ➔ Left shift
- `>>` ➔ Right shift
*/

/* ----------------------- ❓ Ternary Operator -------------------------- */
console.log("\n❓ Ternary Operator:");

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote? ➔", canVote); // ➔ Yes

/*
📚 Ternary Operator:
- Syntax: condition ? exprIfTrue : exprIfFalse
*/

/* ----------------------- 📏 Type Operators ---------------------------- */
console.log("\n📏 Type Operators:");

console.log("typeof 'Hello' ➔", typeof "Hello");  // ➔ string
console.log("typeof 123 ➔", typeof 123);          // ➔ number
console.log("typeof true ➔", typeof true);        // ➔ boolean
console.log("typeof {} ➔", typeof {});            // ➔ object
console.log("typeof [] ➔", typeof []);            // ➔ object (Array is an object)
console.log("typeof null ➔", typeof null);        // ➔ object (JavaScript quirk)
console.log("typeof undefined ➔", typeof undefined); // ➔ undefined
console.log("typeof function(){} ➔", typeof function(){}); // ➔ function

/*
📚 Type Operators:
- `typeof` ➔ Returns the data type as a string.
- `instanceof` ➔ Checks if an object is an instance of a constructor.
*/

