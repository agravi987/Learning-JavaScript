// 📁 variables.js

// 🔒 Constants (cannot be reassigned)
const accountId = 2;

// 🔤 Variables (can be reassigned)
let accountName = "Ravi Agrahari"; 
let accountCity = "Parasi";

// ⚠️ Avoid using 'var' due to issues with block and function scope
var accountEmail = "ravi@gmail.com";

/* 
❌ Why avoid 'var'?
- 'var' is function-scoped, leading to potential bugs.
- 'let' and 'const' are block-scoped, making them safer.
*/

// 🖨️ Output using console.log and console.table
console.log("Account Name:", accountName); // Simple log
console.table({
  Account_ID: accountId,
  Account_Name: accountName,
  Account_Email: accountEmail,
  Account_City: accountCity
}); // Tabular display for better readability

/* 
💡 Quick Tips:
- Use 'const' for values that shouldn't change.
- Use 'let' for variables that will be reassigned.
- 'console.table()' is great for visualizing objects/arrays in a table format.
*/
