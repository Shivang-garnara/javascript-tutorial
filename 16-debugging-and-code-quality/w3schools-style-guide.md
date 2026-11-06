# JavaScript Style Guide & Coding Conventions (W3Schools)

Consistent coding style makes programs easier to read, debug, and maintain across developer teams.

---

## 1. Variable and Function Names (camelCase)
- Use **camelCase** for variable and function names:
  ```javascript
  let firstName = "Shivang";
  let itemsInCart = 5;
  function calculateTotalAmount() { ... }
  ```
- Use **UPPERCASE_SNAKE_CASE** for global immutable constants:
  ```javascript
  const MAX_RETRY_ATTEMPTS = 3;
  const PI = 3.14159;
  ```
- Use **PascalCase** for Classes and Constructor Functions:
  ```javascript
  class BankAccount { ... }
  ```

---

## 2. Spaces Around Operators
Always place spaces around binary operators (`+`, `-`, `*`, `/`, `=`, `===`):
```javascript
// ✅ Good:
let x = y + 5;

// ❌ Bad:
let x=y+5;
```

---

## 3. Code Indentation
- Always use **2 spaces** (or 4 spaces, but be consistent!) for indentation of code blocks.
- Never mix tabs and spaces.

---

## 4. Statement Rules & Semicolons
- Always end a statement with a **semicolon (`;`)**.
- Keep lines under **80 characters** for readability. If a statement does not fit on a single line, break it after an operator:
  ```javascript
  document.getElementById("demo").innerHTML =
    "Hello World! This is a clean multi-line statement.";
  ```

---

## 5. Brackets & Blocks: Opening Curly Brace on Same Line
Always use the K&R (Kernighan & Ritchie) bracket style:
```javascript
// ✅ Good:
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// ❌ Bad (Never put opening brace on new line in JS):
function toCelsius(fahrenheit)
{
  return (5 / 9) * (fahrenheit - 32);
}
```
> ⚠️ **Why this matters in JS:** Automatic Semicolon Insertion (ASI) can insert an unintended semicolon after `return` if the returned object/value is on the next line!

---

## 6. Object & Array Declarations
```javascript
// Short object:
const person = { firstName: "Shivang", lastName: "Patel", age: 24 };

// Multi-line object (with trailing comma recommended in modern JS):
const user = {
  firstName: "Shivang",
  lastName: "Patel",
  age: 24,
};
```

---

## 7. Comparison: Always Use Strict Equality (`===`)
```javascript
// ✅ Good:
if (status === "active") { ... }

// ❌ Bad (Allows unintended type coercion):
if (status == "active") { ... }
```
