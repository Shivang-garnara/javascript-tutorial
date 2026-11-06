# Level 14 — Modern JavaScript (ES6+)

---

### A. Topic
- **Roadmap Location:** Level 14 (Topics 1 to 12)
- **Topics Covered:**
  1. Evolution of ECMAScript (ES6 / ES2015 to modern ESNext)
  2. Block scoping: `let` and `const`
  3. Arrow functions and lexical `this`
  4. Template literals & tagged templates
  5. Advanced destructuring (objects, arrays, nested, aliasing, defaults)
  6. Spread (`...`) vs Rest (`...`) operators
  7. Enhanced object literals (shorthand keys, computed properties)
  8. JavaScript Modules: `import` and `export` (Named vs Default)
  9. Optional chaining (`?.`) & Nullish coalescing (`??`)
  10. Dynamic `import()`
  11. Modern clean code conventions

---

### B. Simple Explanation

#### 1. What is ES6+?
In 2015, JavaScript received its biggest upgrade ever (called **ECMAScript 2015** or **ES6**). Since then, JavaScript releases new features every year. Modern JavaScript is cleaner, safer, more readable, and significantly more expressive than traditional JavaScript.

#### 2. ES Modules (`import` and `export`)
Instead of putting 5,000 lines of code into a single file, modern JavaScript breaks code into multiple focused modules:
```javascript
// mathUtils.js
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add } from "./mathUtils.js";
```

#### 3. Enhanced Object Literals
When your property name matches the variable name, you don't need to write it twice:
```javascript
const name = "Shivang";
const age = 25;
// Instead of { name: name, age: age }
const user = { name, age };
```

---

### C. Why Do We Need Modern ES6+?
Every modern framework (React, Vue, Angular, Node.js) is written in ES6+. Knowing ES6+ syntax is mandatory for professional JavaScript development.

---

### D. Syntax

```javascript
// Renaming while destructuring
const user = { first_name: "Shivang", user_role: "admin" };
const { first_name: firstName, user_role: role } = user;

// Computed property names
const dynamicKey = "status";
const item = {
  id: 101,
  [dynamicKey]: "active"
};
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const config = {
  env: "production",
  db: { host: "localhost", port: 5432 }
};

// Deep destructuring with fallbacks
const { env, db: { port, ssl = true } } = config;
console.log(`Environment: ${env}, Port: ${port}, SSL: ${ssl}`);
```

---

### F. Expected Output
```text
Environment: production, Port: 5432, SSL: true
```

---

### G. Real-World Usage: Modular Architecture
```javascript
// authService.js
export async function login(username, password) { ... }
export function logout() { ... }
export const getCurrentUser = () => { ... };
```

---

### H. Common Mistakes
1. **Forgetting `type="module"` in HTML:**
   If you use `import` / `export` in browser `<script>`, you MUST specify `<script type="module" src="app.js"></script>`.
2. **Confusing default and named exports:**
   Default export: `import myFunc from './file.js';` (no curly braces).
   Named export: `import { myFunc } from './file.js';` (must use curly braces).

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Use object shorthand syntax to construct a `person` object from existing variables `name`, `age`, and `country`.
2. **🟢 Beginner 2:** Destructure the first and third items from `["A", "B", "C", "D"]` into variables `first` and `third`.
3. **🟡 Intermediate 3:** Use destructuring with property renaming to extract `user_email` as `email` with a fallback default value.
4. **🔴 Real-World Challenge 4:** Write a utility module with named exports `formatCurrency`, `slugifyText`, and a default export `calculateTax`.

---

### J. Lesson Recap
- ES6+ modernized JavaScript with arrow functions, destructuring, and modules.
- Split large codebases into modules using `export` and `import`.
- Keep code clean with shorthand properties and optional chaining.

---

### K. Progress
- ✅ Level 14 Completed
- 🔜 Next: Level 15 — Deeper JavaScript Concepts
