


// 📁 date-time.js

"use strict"; // 🚀 Enforce modern JavaScript standards

/* -----------------------------------------------------------------------
🕒 Date & Time in JavaScript
------------------------------------------------------------------------- */

// JavaScript uses the **Date** object to work with **dates & times**.
// The `Date` object represents a single moment in time (internally stored as the number of milliseconds since **January 1, 1970 UTC** - UNIX Epoch).

const myDate = new Date(); 
console.log(myDate);            // Full date-time object
console.log(myDate.toString()); // Readable string format

/*
💡 **Ways to Create Dates**
- `new Date()` ➝ Current date & time
- `new Date(year, month, day, hours, minutes, seconds, milliseconds)`
- `new Date("YYYY-MM-DD")` ➝ ISO String format
- `new Date(timestamp)` ➝ Milliseconds from Unix Epoch (Jan 1, 1970)
*/

// 🎯 Example: Creating Dates
const date1 = new Date(2025, 1, 23);  // Month starts from 0 (Feb 23, 2025)
console.log(date1.toDateString());    // "Sun Feb 23 2025"

const date2 = new Date("2025-12-25"); // YYYY-MM-DD format (ISO)
console.log(date2.toDateString());    // "Thu Dec 25 2025"

const date3 = new Date(1717977600000); // Milliseconds timestamp
console.log(date3.toDateString());    // Converts timestamp to readable date

/* -----------------------------------------------------------------------
📅 Date Methods
------------------------------------------------------------------------- */

// 🗓️ Date Representation Methods
console.log(myDate.toDateString());      // "Sat Feb 23 2025" (Short readable format)
console.log(myDate.toISOString());       // "2025-02-23T12:34:56.789Z" (Universal standard)
console.log(myDate.toJSON());            // Similar to ISO string
console.log(myDate.toLocaleDateString()); // "2/23/2025" (Based on user locale)
console.log(myDate.toTimeString());      // "12:34:56 GMT+0530 (IST)"

// ⏳ Getting Date Components
console.log(myDate.getFullYear());   // Year (e.g., 2025)
console.log(myDate.getMonth());      // Month (0-11, January is 0)
console.log(myDate.getDate());       // Day of the month (1-31)
console.log(myDate.getDay());        // Day of the week (0-6, Sunday is 0)
console.log(myDate.getHours());      // Hours (0-23)
console.log(myDate.getMinutes());    // Minutes (0-59)
console.log(myDate.getSeconds());    // Seconds (0-59)
console.log(myDate.getMilliseconds()); // Milliseconds (0-999)
console.log(myDate.getTime());       // Milliseconds since 1970 (timestamp)

// 🌍 Timezone Methods
console.log(myDate.getTimezoneOffset()); // Timezone difference in minutes from UTC
console.log(myDate.toUTCString());       // Date in UTC format

/* -----------------------------------------------------------------------
🛠️ Setting Date Values
------------------------------------------------------------------------- */

// 🔧 Modifying Dates
myDate.setFullYear(2030);
console.log(myDate.getFullYear()); // 2030

myDate.setMonth(5); // June (0-based index)
console.log(myDate.getMonth()); 

myDate.setDate(15); // Change day
console.log(myDate.getDate());

// ⏰ Changing Time
myDate.setHours(10);
myDate.setMinutes(45);
myDate.setSeconds(30);
console.log(myDate.toTimeString()); 

/* -----------------------------------------------------------------------
🎯 Formatting Dates (Internationalization)
------------------------------------------------------------------------- */

// 🏆 `toLocaleString()` is best for formatting dates for different locales
const options = {
  weekday: "long", // "Monday"
  year: "numeric", // "2025"
  month: "long",  // "February"
  day: "numeric", // "23"
};

console.log(myDate.toLocaleString("en-US", options)); // "Sunday, February 23, 2025"
console.log(myDate.toLocaleString("en-IN", options)); // "Sunday, 23 February 2025"

/* -----------------------------------------------------------------------
⏳ Date Calculations & Comparisons
------------------------------------------------------------------------- */

// ⏳ Getting Timestamp Difference
const today = new Date();
const newYear = new Date("2026-01-01");
const diffMs = newYear - today; // Difference in milliseconds
console.log(`Milliseconds until New Year: ${diffMs}`);

// 🕒 Convert Milliseconds to Days
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Days until New Year: ${diffDays} days`);

/* -----------------------------------------------------------------------
⏳ Working with Timestamps
------------------------------------------------------------------------- */

// 📌 Unix Timestamp (milliseconds since Jan 1, 1970)
const now = Date.now();
console.log(`Current Timestamp: ${now}`); // Example: 1717977600000

// 🔄 Convert Timestamp to Date
const newDate = new Date(now);
console.log(newDate.toString()); // Converts timestamp back to date

/* -----------------------------------------------------------------------
📌 Interesting Facts & Interview Nuggets
------------------------------------------------------------------------- */

/*
💡 **1. Why are Months Zero-Indexed?**
- JavaScript months start from `0` (January) to `11` (December).
- This is because JavaScript was modeled after Java, which follows the same convention.

💡 **2. How to Measure Execution Time?**
- Use `Date.now()` to get timestamps before and after execution:
  
  const start = Date.now();
  // Your code here
  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);

💡 **3. ISO 8601 Format is Best for Storage**
- Always store dates in `YYYY-MM-DDTHH:MM:SSZ` format.
- `new Date().toISOString()` gives an ISO-formatted string.

💡 **4. Comparing Dates in JavaScript**
- Always use `.getTime()` for accurate comparison:

  const dateA = new Date("2025-02-23");
  const dateB = new Date("2025-02-24");
  console.log(dateA < dateB); // true (23rd is before 24th)
  console.log(dateA.getTime() < dateB.getTime()); // true

💡 **5. How to Add Days to a Date?**
- Use `.setDate()` to modify days:

  const today = new Date();
  today.setDate(today.getDate() + 7); // Adds 7 days
  console.log(today.toDateString());

💡 **6. Leap Year Check**
- A year is a leap year if:
  - Divisible by 4.
  - Not divisible by 100 unless also divisible by 400.

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  console.log(isLeapYear(2024)); // true
  console.log(isLeapYear(2025)); // false
*/

/* -----------------------------------------------------------------------
🚀 Best Practices:
------------------------------------------------------------------------- 
✅ Always store dates in **ISO format** (`toISOString()`).
✅ Use `.getTime()` for accurate **date comparisons**.
✅ Use `toLocaleString()` for **formatted output based on user locale**.
✅ Avoid using `setYear()`, it's deprecated. Use `setFullYear()` instead.
✅ Use `Date.now()` for **performance benchmarks**.
✅ Always check for **timezone differences** when working with global applications.
*/

/* -----------------------------------------------------------------------
🧪 Quick Practice:
------------------------------------------------------------------------- */

// ✅ Generate a Date 30 Days from Today
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 30);
console.log(`30 Days from today: ${futureDate.toDateString()}`);

// ✅ Convert Date to Timestamp & Back
const timestamp = new Date().getTime();
console.log(`Timestamp: ${timestamp}`);
console.log(new Date(timestamp).toString());

// ✅ Check if Two Dates are Equal
const d1 = new Date("2025-02-23");
const d2 = new Date("2025-02-23");
console.log(d1.getTime() === d2.getTime()); // true
