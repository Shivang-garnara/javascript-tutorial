# Ternary, Short-Circuit Evaluation & Optional Chaining ⚡

Modern JavaScript provides concise operators that replace verbose `if/else` ladders while keeping code clean, expressive, and safe against crashes.

---

## 1. Ternary Operator (`condition ? exprIfTrue : exprIfFalse`)

The only JavaScript operator that takes **three operands**. It returns a value directly, making it ideal for variable assignments and UI rendering (e.g., in React or template literals).

### Syntax:
```javascript
const result = condition ? valueIfTrue : valueIfFalse;
```

### Basic Example:
```javascript
const score = 85;
const status = score >= 50 ? "Passed 🎉" : "Failed ❌";
console.log(status); // "Passed 🎉"
```

### Chained Ternary (Use with caution for readability):
```javascript
const marks = 78;
const grade = marks >= 90 ? "A+"
            : marks >= 75 ? "A"
            : marks >= 60 ? "B"
            : marks >= 40 ? "C"
            : "F";
```

---

## 2. Short-Circuit Evaluation (`&&` and `||`)

In JavaScript, `&&` and `||` do **not** merely return `true` or `false` — they return the **actual value** of one of their operands!

### A. Logical OR (`||`) — Fallback Operator
Returns the **first truthy** value it encounters, or the last value if all are falsy:
```javascript
const username = inputName || "Anonymous Guest";
```
⚠️ **Gotcha with `||`:** `0`, `""`, and `false` are considered falsy.
```javascript
const count = 0;
const displayCount = count || 10;
console.log(displayCount); // 10 (Oops! The user actually had 0 items!)
```

### B. Logical AND (`&&`) — Guard Operator
Returns the **first falsy** value it encounters, or the last value if all are truthy:
```javascript
// Run a function only if condition is true:
isLoggedIn && showUserProfile();

// Access a property safely:
const street = user && user.address && user.address.street;
```

---

## 3. Nullish Coalescing Operator (`??`) (ES2020)

`??` solves the flaw in `||`! It returns the right-hand value **ONLY** when the left-hand value is strictly `null` or `undefined`.
It treats `0`, `""`, `false`, and `NaN` as valid existing values.

```javascript
const userScore = 0;

// Flawed with ||
const result1 = userScore || 100; // 100 (wrong! 0 is overwritten)

// Correct with ??
const result2 = userScore ?? 100; // 0 (correct! 0 is preserved)
```

| Value | `value \|\| "fallback"` | `value ?? "fallback"` |
|---|---|---|
| `"Shivang"` | `"Shivang"` | `"Shivang"` |
| `""` (empty) | `"fallback"` ❌ | `""` ✅ |
| `0` | `"fallback"` ❌ | `0` ✅ |
| `false` | `"fallback"` ❌ | `false` ✅ |
| `null` | `"fallback"` | `"fallback"` |
| `undefined` | `"fallback"` | `"fallback"` |

---

## 4. Optional Chaining (`?.`) (ES2020)

Before ES2020, attempting to read a nested property on `null` or `undefined` crashed your entire application with:
`TypeError: Cannot read properties of undefined (reading 'street')`

Optional chaining `?.` short-circuits and safely returns `undefined` if the reference before `?.` is `null` or `undefined`.

### Syntax & Variations:
```javascript
const user = {
  name: "Aman",
  // address is omitted/undefined
};

// 1. Property access:
const city = user?.address?.city; 
console.log(city); // undefined (No crash!)

// 2. Combining with Nullish Coalescing for default value:
const finalCity = user?.address?.city ?? "Not Provided";
console.log(finalCity); // "Not Provided"

// 3. Array index access:
const firstHobby = user?.hobbies?.[0] ?? "None";

// 4. Safe Method Calls:
user?.sendNotification?.(); // Won't throw error if sendNotification is not a function
```

---

## 5. Logical Assignment Operators (ES2021)

Combines logical operations with assignment:
```javascript
// 1. Logical OR Assignment (x ||= y -> assign if x is falsy)
let title = "";
title ||= "Untitled Document"; // "Untitled Document"

// 2. Nullish Assignment (x ??= y -> assign ONLY if x is null or undefined)
let maxRetries = 0;
maxRetries ??= 3; // Remains 0! (0 is not null/undefined)

// 3. Logical AND Assignment (x &&= y -> assign ONLY if x is truthy)
let loggedUser = { token: "xyz" };
loggedUser &&= { token: "xyz", lastActive: Date.now() };
```

---

## 6. Interview Practice Summary
- Use **Ternary (`? :`)** when choosing between two expressions.
- Use **`??`** instead of `||` whenever `0`, `""`, or `false` are valid user values.
- Use **`?.`** to guard deeply nested API responses from crashing your UI.
- Chain **`?.` with `??`** for clean, bulletproof fallback patterns:
  `const theme = config?.user?.preferences?.theme ?? "dark";`

