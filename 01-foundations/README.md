# Level 1 — Programming and JavaScript Foundations

---

### A. Topic
- **Roadmap Location:** Level 1 (Topics 1 to 12)
- **Topics Covered:**
  1. What is programming?
  2. What is JavaScript?
  3. What can JavaScript do?
  4. Where JavaScript runs: browsers, Node.js, and environments
  5. JavaScript vs HTML vs CSS
  6. Setting up a learning environment
  7. Writing the first JavaScript program
  8. Connecting JavaScript to an HTML page
  9. `console.log()` and browser developer tools
  10. Comments and basic code formatting
  11. Statements, expressions, and basic syntax
  12. Strict mode (`"use strict"`)

---

### B. Simple Explanation

#### 1. What is Programming?
Programming is giving step-by-step instructions to a computer to perform tasks, calculate values, or solve problems.

#### 2. What is JavaScript?
JavaScript is a versatile programming language created in 1995 to add interactivity to static web pages. It is now the standard language for web applications, both on the client side (in browser) and backend (Node.js).

#### 3. What Can JavaScript Do?
- Modify webpage text, styles, and elements on the fly.
- Handle user interactions: clicks, mouse movements, form submissions.
- Communicate with servers to send and receive live data without page reloads.
- Animate elements, play sounds, build games, and store data locally in the browser.

#### 4. Where Does It Run?
- **Web Browsers:** Every modern browser (Chrome, Edge, Safari, Firefox) has an embedded JavaScript engine (like Google's V8 engine).
- **Node.js:** A runtime environment that lets JavaScript run directly on your computer or servers without needing a browser.

#### 5. JavaScript vs HTML vs CSS
- **HTML:** Defines the content and structure (headings, buttons, paragraphs).
- **CSS:** Defines visual presentation (colors, typography, margins, layouts).
- **JavaScript:** Defines logic and behavior (what happens when you interact).

#### 6. Statements vs Expressions
- **Expression:** A piece of code that produces a value (e.g., `5 + 10`, `"Hello"`, `true`).
- **Statement:** A complete line or block of instruction that performs an action (e.g., `console.log("Hi");`).

#### 7. Strict Mode (`"use strict"`)
Writing `"use strict";` at the top of your JS file enforces stricter parsing and error handling, preventing sloppy errors (like accidentally using undeclared variables).

---

### C. Why Do We Need It?
Without understanding foundational syntax, DevTools, and how JavaScript connects to web pages, you cannot diagnose errors or write interactive apps. Developer tools (`console.log`) allow you to inspect program execution in real time.

---

### D. Syntax

```javascript
"use strict"; // Enables strict mode

// Single-line comment

/*
  Multi-line
  comment
*/

// Statement printing an expression
console.log("Hello, World!");
console.log(20 + 5);
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
"use strict";

console.log("--- Level 1 Foundations ---");

// Text vs numbers
console.log("Order Total:");
console.log(100 + 15); // Adds numbers -> 115
console.log("100" + "15"); // Glues strings together -> "10015"
```

---

### F. Expected Output
```text
--- Level 1 Foundations ---
Order Total:
115
10015
```

---

### G. Real-World Usage: Connecting JS to an HTML Form
In any website signup form:
- HTML has `<input type="email" id="userEmail">`
- JavaScript connects via `<script src="app.js"></script>`
- When the user presses submit, JavaScript checks if `@` is in the email before allowing submission.

---

### H. Common Mistakes
1. **Missing quotes:** `console.log(Hello)` throws `ReferenceError: Hello is not defined`.
2. **Missing `script` tag link:** Putting `<script src="wrong-path.js">` means browser won't run your code.
3. **Typo in method names:** `console.Log()` fails because JavaScript is case-sensitive.

---

### I. Practice Exercises
Check `practice.js` in this folder to solve:
1. **🟢 Beginner 1:** Print a greeting message with your name and city.
2. **🟢 Beginner 2:** Use `console.log()` to compute `120 / 4`.
3. **🟡 Intermediate 3:** Turn on `"use strict";` and observe what happens when you write `message = "test";` without declaring it.
4. **🔴 Real-World Challenge 4:** Write code calculating the price of 2 movie tickets at \$14 each with a \$3 booking fee.

---

### J. Lesson Recap
- JavaScript executes top-to-bottom.
- Press `F12` in any browser to open DevTools and view the console.
- Always use `"use strict";` to write cleaner, safer code.
- Numbers calculate mathematically; strings in quotes combine as text.

---

### K. Progress
- ✅ Level 1 Completed
- 🔜 Next: Level 2 — Variables and Data Types

