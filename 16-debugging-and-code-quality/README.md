# Level 16 — Error Handling, Debugging, and Code Quality

---

### A. Topic
- **Roadmap Location:** Level 16 (Topics 1 to 12)
- **Topics Covered:**
  1. Types of errors: Syntax, Runtime, and Logical errors
  2. Structured error handling: `try`, `catch`, `finally`
  3. Custom Error classes & `throw new Error()`
  4. Reading & analyzing Stack Traces
  5. Browser DevTools Debugging: Breakpoints, Step Over, Step Into, Watch Expressions
  6. Advanced Console Methods: `console.table()`, `console.time()`, `console.warn()`, `console.group()`
  7. Clean Code principles & DRY (Don't Repeat Yourself)
  8. Refactoring strategies
  9. Introduction to Unit Testing & Assertions

---

### B. Simple Explanation

#### 1. The 3 Types of Errors
- **Syntax Error:** You broke language grammar rules (e.g. missing parenthesis `)`). The script won't run at all.
- **Runtime Error:** Something went wrong while running (e.g. reading property of `null`, network drop).
- **Logical Error:** Code runs with no errors, but produces the **wrong answer** (e.g. using `+` instead of `*` in discount formula).

#### 2. `try...catch...finally`
- `try`: Code that might fail.
- `catch(error)`: Fallback code executed if an error happens.
- `finally`: Code that **always runs**, whether error occurred or not (used for cleanup).

#### 3. Professional Debugging with Breakpoints
Instead of filling your code with 50 `console.log()` statements, open DevTools (`F12`), go to the **Sources** tab, and click a line number to set a **Breakpoint**. The browser will pause execution right at that line so you can inspect variables live!

---

### C. Why Do We Need Error Handling & Debugging?
Production software crashes without graceful error handling. Handling errors prevents white screens of death and gives users clear feedback when issues occur.

---

### D. Syntax

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(age) {
  if (age < 18) {
    throw new ValidationError("Must be at least 18 years old.");
  }
  return "Registration complete!";
}
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
console.time("Processing Timer");

const users = [
  { id: 1, name: "Shivang", role: "Dev" },
  { id: 2, name: "Aarav", role: "Design" }
];

// Beautiful table format in console!
console.table(users);

console.timeEnd("Processing Timer");
```

---

### F. Expected Output
Displays a clean, styled ASCII/graphical table in the console showing IDs, Names, and Roles, along with the exact millisecond benchmark time!

---

### G. Real-World Usage: Graceful Payment Error Handling
```javascript
async function processPayment(paymentDetails) {
  try {
    showSpinner();
    const result = await chargeCard(paymentDetails);
    showSuccessReceipt(result);
  } catch (err) {
    if (err.name === "CardDeclinedError") {
      showErrorMessage("Your bank declined the card. Please try another.");
    } else {
      showErrorMessage("Payment network timeout. You have not been charged.");
    }
  } finally {
    hideSpinner();
  }
}
```

---

### H. Common Mistakes
1. **Silent catches (Swallowing errors):**
   ```javascript
   try { ... } catch (e) {
     // Empty! Now you have no idea why your program isn't working!
   }
   ```
2. **Not cleaning up in `finally`:**
   Always close connections or stop loading spinners in `finally`.

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Write a function `divide(a, b)` that throws an error if `b === 0`.
2. **🟢 Beginner 2:** Use `console.table()` to display an array of 3 laptop models with brand and price.
3. **🟡 Intermediate 3:** Create a custom `InvalidEmailError` and throw it if an email string does not contain an `@` symbol.
4. **🔴 Real-World Challenge 4:** Write a simple unit test assertion function `assert(actual, expected, testName)` that logs `"PASS: " + testName` if equal, or `"FAIL: Expected ... but got ..."` if not.

---

### J. Lesson Recap
- Never catch errors silently; log or handle them.
- Use `console.table()` and `console.time()` for advanced inspection.
- Set breakpoints in browser DevTools to step through execution.
- Use custom error classes to distinguish validation errors from server failures.

---

### K. Progress
- ✅ Level 16 Completed
- 🔜 Next: Level 17 — JavaScript Tools & Development Workflow

