# JavaScript Error Types & Custom Errors Master Guide 🚨

Effective error handling is the hallmark of a senior JavaScript engineer. JavaScript provides a hierarchy of built-in error constructors and allows you to create custom application errors.

---

## 1. Anatomy of an `Error` Object

Every standard error object in JavaScript has three primary properties:
- `error.name`: The string name of the error class (e.g., `"TypeError"`, `"ReferenceError"`).
- `error.message`: The human-readable explanation of what went wrong.
- `error.stack`: The stack trace showing the file, line number, and function call history where the error occurred.
- `error.cause` (ES2022): The underlying error that triggered this error (error chaining).

```javascript
try {
  throw new Error("Something broke!");
} catch (err) {
  console.log(err.name);    // "Error"
  console.log(err.message); // "Something broke!"
  console.log(err.stack);   // Stack trace with line numbers
}
```

---

## 2. The 7 Built-in JavaScript Error Types

### 1. `TypeError`
Occurs when an operation is performed on a value of the wrong type.
```javascript
// Examples:
const num = 10;
num.toUpperCase(); // TypeError: num.toUpperCase is not a function

null.toString();   // TypeError: Cannot read properties of null
```

### 2. `ReferenceError`
Occurs when attempting to access a variable that has not been declared or is in the Temporal Dead Zone (TDZ).
```javascript
console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined
```

### 3. `SyntaxError`
Occurs when the JavaScript engine encounters code that violates JS grammar rules, or when parsing invalid JSON.
```javascript
JSON.parse("{ invalid json }"); // SyntaxError: Unexpected token i in JSON
```

### 4. `RangeError`
Occurs when a numeric value or parameter falls outside its allowed range.
```javascript
new Array(-5);        // RangeError: Invalid array length
(123).toFixed(150);   // RangeError: toFixed() digits argument must be between 0 and 100
```

### 5. `URIError`
Occurs when global URI encoding or decoding functions receive an invalid sequence.
```javascript
decodeURI("%"); // URIError: URI malformed
```

### 6. `AggregateError` (ES2021)
Represents multiple errors wrapped into a single object (thrown by `Promise.any()` when all promises reject).
```javascript
const aggErr = new AggregateError([new Error("A failed"), new Error("B failed")], "Batch failed");
console.log(aggErr.errors); // Array of individual errors
```

---

## 3. Creating Custom Error Classes

In modern JavaScript, you create custom errors by extending the built-in `Error` class:

```javascript
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} with ID ${id} was not found.`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
```

---

## 4. Differentiated Error Handling with `instanceof`

Inside a `try...catch` block, use `instanceof` to gracefully handle different failure categories:

```javascript
function processUserProfile(data) {
  try {
    if (!data.email) {
      throw new ValidationError("Email is required!", "email");
    }
    if (typeof data.age !== "number" || data.age < 18) {
      throw new RangeError("Age must be at least 18");
    }
    // Proceed with saving...
  } catch (err) {
    if (err instanceof ValidationError) {
      console.warn(`Validation failed on field [${err.field}]: ${err.message}`);
    } else if (err instanceof RangeError) {
      console.warn(`Out of range: ${err.message}`);
    } else {
      console.error("Unexpected system crash! Re-throwing...", err);
      throw err; // Re-throw unknown errors
    }
  }
}
```

---

## 5. Modern Error Chaining with `cause` (ES2022)

Instead of losing the original low-level error stack trace, attach it via `{ cause: originalError }`:

```javascript
async function loadUserData(userId) {
  try {
    return await database.fetchUser(userId);
  } catch (dbError) {
    // Wrap low-level DB error inside a high-level application error:
    throw new Error(`Failed to load profile for user ${userId}`, { cause: dbError });
  }
}
```

---

## 6. Summary Rules
1. Never throw raw strings (`throw "Error"` ❌). Always throw real `Error` instances (`throw new Error(...)` ✅).
2. Extend `Error` for business domain errors (`ValidationError`, `AuthError`, `PaymentError`).
3. Use `instanceof` to branch catch blocks gracefully.
