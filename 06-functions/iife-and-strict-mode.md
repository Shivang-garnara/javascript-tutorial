# IIFE & Strict Mode (`"use strict"`) Master Guide 🛡️

Two foundational concepts that shaped modern JavaScript architecture and defensive programming are **IIFE (Immediately Invoked Function Expressions)** and **Strict Mode**.

---

## 1. Immediately Invoked Function Expressions (IIFE)

An **IIFE** (pronounced *"iffy"*) is a JavaScript function that executes immediately as soon as it is defined.

### Syntax:
```javascript
(function () {
  // Code runs right away
})();

// Or with Arrow Syntax:
(() => {
  // Code runs right away
})();
```

### Why were IIFEs invented?
Before ES6 (prior to `let`, `const`, and ES Modules), JavaScript only had **function scope** and **global scope**. Variables created with `var` leaked everywhere:

```javascript
// Polluting global window object:
var apiToken = "secret_123";
var counter = 0;
```
If two third-party libraries both defined `var counter`, one would overwrite the other!

### The IIFE Solution (The Module Pattern):
An IIFE creates a private sandbox. Nothing inside leaks out:
```javascript
const counterModule = (function () {
  let privateCount = 0; // Completely private variable!

  return {
    increment() {
      privateCount++;
      return privateCount;
    },
    getCount() {
      return privateCount;
    }
  };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.increment()); // 2
console.log(counterModule.privateCount); // undefined (Protected from outside tampering!)
```

### Modern Use Cases for IIFE:
1. **Async IIFE for Top-Level Await in older environments / CommonJS:**
   ```javascript
   (async () => {
     const data = await fetch("https://api.example.com/users");
     console.log(await data.json());
   })();
   ```
2. **One-time initialization logic with complex calculations:**
   ```javascript
   const appConfig = (() => {
     const env = process.env.NODE_ENV || "development";
     const isProd = env === "production";
     return {
       apiUrl: isProd ? "https://api.prod.com" : "http://localhost:3000",
       logging: !isProd
     };
   })();
   ```

---

## 2. JavaScript Strict Mode (`"use strict"`)

Strict Mode was introduced in **ECMAScript 5 (ES5)**. Itopts JavaScript into a stricter variant of the engine, transforming silent bugs into loud, throw-able runtime errors.

### How to Enable Strict Mode:
```javascript
// 1. For an entire script (place at the very top of file):
"use strict";

// 2. Or inside a specific function only:
function secureOperation() {
  "use strict";
  // strict rules apply only here
}
```

> 💡 **Good to know:** All ES6 Modules (`import`/`export`) and ES6 `class` definitions are in Strict Mode **automatically**!

---

## 3. What Strict Mode Changes & Prevents

### 1. Eliminates Accidental Global Variables:
```javascript
// Sloppy Mode: Creates window.score = 100 quietly
score = 100;

// Strict Mode:
"use strict";
score = 100; // ❌ ReferenceError: score is not defined!
```

### 2. Makes `this` Safe in Standalone Functions:
In sloppy mode, `this` in a standalone function defaults to `window` or `global`. In strict mode, it remains `undefined`:
```javascript
"use strict";
function checkThis() {
  console.log(this); // undefined ✅ (Prevents accidentally mutating window!)
}
checkThis();
```

### 3. Disallows Duplicate Parameter Names:
```javascript
// Sloppy Mode: Allowed (second 'a' overrides first)
function add(a, a, b) { return a + a + b; }

// Strict Mode:
"use strict";
function add(a, a, b) {} // ❌ SyntaxError: Duplicate parameter name not allowed
```

### 4. Throws Error on Failing Assignments:
```javascript
"use strict";
// Assigning to a non-writable property:
const obj = {};
Object.defineProperty(obj, "readOnlyProp", { value: 42, writable: false });

obj.readOnlyProp = 99; // ❌ TypeError: Cannot assign to read only property
```

### 5. Prohibits Deleting Plain Variables:
```javascript
"use strict";
let x = 10;
delete x; // ❌ SyntaxError: Delete of an unqualified identifier in strict mode
```

---

## 4. Summary & Best Practices
- Use **Strict Mode (`"use strict"`)** in all traditional vanilla JS scripts to catch subtle mistakes early.
- Modern bundlers (Vite, Webpack) and ES modules turn on strict mode by default.
- Use **IIFEs** when you want self-executing initialization code with private variables without leaking into the global scope.
