# Top-Level `await` (ES2022) & Optional Catch Binding (ES2019) ⚡🛡️

---

## 1. Top-Level `await` (ECMAScript 2022)

Before ECMAScript 2022, using `await` outside of an `async` function produced a syntax error:
`SyntaxError: await is only valid in async functions`

To load asynchronous data at application launch, developers had to wrap their startup code inside an async IIFE:
```javascript
// The Pre-ES2022 Workaround:
(async () => {
  const config = await fetch("/api/config").then(r => r.json());
  initializeApplication(config);
})();
```

### The Modern Way (Top-Level Await):
In any modern **ES Module** (files with `<script type="module">` in browsers or `.mjs` / `"type": "module"` in Node.js), you can write `await` **directly at the root of the file**:

```javascript
// In dbConnection.js (ES Module):
const connection = await connectToDatabase("postgres://localhost:5432");

export { connection };
```

### Real-World Use Cases:
1. **Dynamic Resource / Language Localization Initializer:**
   ```javascript
   const userLang = navigator.language.slice(0, 2);
   const translations = await import(`./locales/${userLang}.json`, { assert: { type: "json" } });
   export default translations;
   ```
2. **Dependency Fallback:**
   ```javascript
   let jQuery;
   try {
     jQuery = await import("https://cdn-primary.com/jquery.js");
   } catch {
     jQuery = await import("https://cdn-backup.com/jquery.js");
   }
   ```

---

## 2. Optional Catch Binding (ECMAScript 2019)

Before ES2019, every `try...catch` block strictly required an unused error identifier:
```javascript
// Old Way: Unused variable warning in linters!
try {
  JSON.parse(str);
} catch (unusedError) {
  // We don't care what the error was; we just know it's not valid JSON
}
```

Introduced in **ECMAScript 2019**, you can now omit the parentheses and error parameter completely:

```javascript
// Modern Clean Standard (ES2019+):
try {
  return JSON.parse(str);
} catch {
  return null; // Clean fallback without linting warnings!
}
```

### Best Use Cases:
- **Feature Detection:** Testing if an API exists or throws without logging error noise.
- **Local Storage Quota Fallback:**
  ```javascript
  function safeSetStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      console.warn("Storage quota exceeded or disabled in private browsing.");
    }
  }
  ```
