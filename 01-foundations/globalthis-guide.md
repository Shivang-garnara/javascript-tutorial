# `globalThis`: The Universal Global Object (ES2020) 🌐

Before ECMAScript 2020, accessing the top-level global object in JavaScript across different execution environments was notoriously messy and fragmented.

---

## 1. The Global Object Fragmentation Problem

Different JavaScript host environments historically used completely different names for their global object:

| Environment | Global Object Identifier |
|---|---|
| **Web Browsers (Tabs & Windows)** | `window` (or `frames`) |
| **Web Workers** | `self` (No access to `window`) |
| **Node.js** | `global` (No `window` or `self`) |
| **Stand-alone Engines (Rhino, V8 shell)** | `this` at top level (unless in strict mode, where `this` is `undefined`!) |

### The Ugly Pre-ES2020 Polyfill Hack:
To write a library (like Lodash or Axios) that worked seamlessly across both Node.js and the Browser, developers had to write:
```javascript
const universalGlobal = (function () {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw new Error("Unable to locate global object");
})();
```

---

## 2. The Solution: `globalThis`

Introduced in **ECMAScript 2020**, `globalThis` provides a **single, standardized name** for the global object that works identically across **every JavaScript environment**:

- In the Browser: `globalThis === window` ✅
- In Node.js: `globalThis === global` ✅
- In Web Workers: `globalThis === self` ✅
- In Deno / Bun: `globalThis` ✅

```javascript
// Attaching a global configuration safely:
globalThis.__APP_VERSION__ = "2.5.0";

// Reading from anywhere:
console.log(globalThis.__APP_VERSION__); // "2.5.0"
```

---

## 3. Best Practices
1. **Never pollute the global scope unnecessarily:** Keep variables contained in modules (`export`/`import`) or closures.
2. Use `globalThis` primarily for universal feature detection (e.g., checking if `fetch` or `crypto` exists across Node and Browser):
   ```javascript
   if (typeof globalThis.fetch === "function") {
     console.log("Native Fetch API is available!");
   }
   ```
