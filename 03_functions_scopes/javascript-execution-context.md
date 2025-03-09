# 🚀 JavaScript Execution Context

## 🔹 What is Execution Context?
Execution Context (EC) is the **environment** where JavaScript code **runs**. It includes:
- **Variables & Functions**
- **Lexical Environment**
- **Value of `this`**

## 🔹 Types of Execution Context
1️⃣ **Global Execution Context (GEC)** → Created when JS starts  
2️⃣ **Function Execution Context (FEC)** → Created for each function call  
3️⃣ **Eval Execution Context** → Created when `eval()` is used (not recommended)  

## 🔹 JavaScript Execution Phases
🔹 **1. Creation Phase**  
- **Memory allocated**  
- `var` → `undefined`, `let` & `const` → **TDZ (Temporal Dead Zone)**  
- Function declarations **hoisted**  

🔹 **2. Execution Phase**  
- Code runs **line by line**  
- Variables & functions get **assigned values**  

## 🔹 Call Stack (Execution Flow)
Manages function execution using **LIFO (Last In, First Out)**  

### 🛠 Example:
```js
function first() { second(); }
function second() { third(); }
function third() { console.log("Hello!"); }
first();
```
📌 **Call Stack Execution:**  
1️⃣ `first()` → `second()` → `third()` pushed onto stack  
2️⃣ `third()` executes & exits  
3️⃣ `second()` executes & exits  
4️⃣ `first()` executes & exits  
5️⃣ Stack is now **empty** ✅  

## 🔹 Example: Execution Context in Action
```js
console.log(x); // ❌ undefined (Hoisting)
var x = 5;
greet(); // ✅ "Hello!"

function greet() {
    console.log("Hello!");
}
```
📌 **Behind the Scenes:**  
- `x = undefined` (hoisting) → then assigned `5`  
- `greet()` is hoisted **with full function definition**  

## 🔹 Key Interview Questions
💡 **1. What is the first Execution Context?** → **GEC**  
💡 **2. What does the Call Stack do?** → **Manages function calls using LIFO**  
💡 **3. What happens if too many function calls occur?** → **Stack Overflow**  
💡 **4. Why `let` & `const` are in TDZ?** → **Uninitialized in Creation Phase**  
💡 **5. Why avoid `eval()`?** → **Security Risk & Bad Practice**  

## 🎯 Summary
✔ **Execution Context = Environment for JS Code**  
✔ **Two Phases: Creation & Execution**  
✔ **Call Stack = Manages function execution**  
✔ **Hoisting: `var` = undefined, `let` & `const` in TDZ**  

🔥 **Mastering Execution Context is key to understanding Hoisting, Scope & Closures!**  
