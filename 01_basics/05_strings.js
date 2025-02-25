// 📁 strings.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🧵 String Basics
------------------------------------------------------------------------- */

// Strings in JavaScript are **primitive** data types and **immutable**.
// They can be created using literals or the String constructor.

const nam = "Ravi";        // String literal
let repoCount = 50;

// ❌ Traditional Concatenation (Outdated)
console.log(nam + " has " + repoCount + " repositories.");

// ✅ Modern Approach: Template Literals (String Interpolation)
console.log(`${nam} has ${repoCount} repositories.`); // Uses backticks (``)

/*
💡 **Why Template Literals?**
- Supports multi-line strings.
- Easy variable interpolation.
- Can embed expressions directly.
*/

// 📋 Multi-line String Example:
const multiLine = `This is a
multi-line string using
template literals.`;
console.log(multiLine);

/* -----------------------------------------------------------------------
🏗️ String Objects vs String Primitives
------------------------------------------------------------------------- */

// 📌 String Primitive
const lang1 = "JavaScript";

// 📌 String Object (using Constructor)
const lang2 = new String("JavaScript");
console.log(lang2); // Outputs: [String: 'JavaScript']

/*
💡 **Difference:**
- **String literals** are primitive and stored in stack memory.
- **String objects** are non-primitive and stored in heap (as objects).
- Comparing them using `==` and `===` shows differences:
*/
console.log(lang1 == lang2);  // true  (value comparison)
console.log(lang1 === lang2); // false (strict comparison: type + value)

/* -----------------------------------------------------------------------
📚 String Properties & Methods
------------------------------------------------------------------------- */

// 🧮 Indexing (0-based)
console.log(lang1[0]);   // 'J'
console.log(nam[2]);     // 'v'

// 📏 String Length
console.log(lang1.length); // 10

// 🔡 Case Conversion
console.log(lang1.toUpperCase()); // "JAVASCRIPT"
console.log(lang1.toLowerCase()); // "javascript"

// 🔍 Character Methods
console.log(lang1.charAt(0));     // "J"  (char at index 0)
console.log(lang1.indexOf('a'));  // 1    (first occurrence)

// ✂️ Substring Extraction
console.log(lang1.substring(0, 4)); // "Java" (start, end - excludes end)
console.log(lang1.slice(-6));       // "Script" (supports negative indexes)

// 📋 Trimming
const paddedString = "   Hello World!   ";
console.log(paddedString.trim()); // "Hello World!" (removes whitespace)

// 🔗 String Concatenation
const firstName = "Ravi";
const lastName = "Agrahari";
console.log(firstName.concat(" ", lastName)); // "Ravi Agrahari"

// 🔄 Replace & ReplaceAll
const bio = "I love JavaScript and JavaScript is awesome!";
console.log(bio.replace("JavaScript", "JS"));       // Replaces first occurrence
console.log(bio.replaceAll("JavaScript", "JS"));    // Replaces all

// 📊 Searching & Matching
console.log(bio.includes("love"));   // true
console.log(bio.startsWith("I love")); // true
console.log(bio.endsWith("awesome!")); // true

// 🔗 Splitting Strings
const csv = "HTML, CSS, JavaScript, Node.js";
const skills = csv.split(", "); // Converts to array
console.log(skills); // ["HTML", "CSS", "JavaScript", "Node.js"]

/* -----------------------------------------------------------------------
🔠 Capitalizing Strings (Custom Example)
------------------------------------------------------------------------- */

const word = "javascript";

// ❌ Incorrect: `.toUpperCase` is a function and needs `()`
console.log(word.charAt(0).toUpperCase + word.slice(1)); // [Function: toUpperCase]

// ✅ Correct Approach:
const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
console.log(capitalized); // "Javascript"

/* -----------------------------------------------------------------------
⚡ Interesting Facts & Interview Nuggets
------------------------------------------------------------------------- */
/*
💡 **1. String Immutability:**
- Strings are immutable in JavaScript.
- Methods like `toUpperCase()` return a **new string** rather than modifying the original.

💡 **2. Template Literals:**
- Can evaluate expressions:
    const a = 5, b = 10;
    console.log(`Sum is ${a + b}`); // "Sum is 15"

💡 **3. Difference Between slice(), substring(), and substr():**
- `slice(start, end)` ➔ Supports negative indices.
- `substring(start, end)` ➔ Negative indices treated as 0.
- `substr(start, length)` ➔ Deprecated, but extracts based on length.

💡 **4. Comparing Strings:**
- Use `.localeCompare()` for advanced string comparison:
    console.log('a'.localeCompare('b')); // -1 (means 'a' < 'b')

💡 **5. Unicode & Emojis in Strings:**
- JavaScript strings use UTF-16 encoding.
- Emojis and special symbols may be counted as 2 units:
    console.log("😀".length); // 2

💡 **6. Escape Characters in Strings:**
- `\n` ➔ New line
- `\t` ➔ Tab
- `\\` ➔ Backslash
- `\'` ➔ Single quote
- `\"` ➔ Double quote
*/

/* -----------------------------------------------------------------------
🚀 Best Practices:
------------------------------------------------------------------------- 
- Use **template literals** (`) over traditional concatenation.
- Avoid using `new String()` unless necessary (can lead to bugs in comparisons).
- Always trim user input: `input.trim()`
- Use `replaceAll()` over `replace()` when replacing multiple occurrences.
- For safe HTML rendering, be cautious with `.innerHTML` to avoid XSS attacks.
*/

/* -----------------------------------------------------------------------
🧪 Quick Practice:
------------------------------------------------------------------------- */

// ✅ Convert "hello world" ➔ "Hello World" (Capitalize each word)
const sentence = "hello world";
const titleCase = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(titleCase); // "Hello World"

// ✅ Reverse a String
const str = "JavaScript";
const reversed = str.split("").reverse().join("");
console.log(reversed); // "tpircSavaJ"
 