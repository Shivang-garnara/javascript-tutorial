# Primitive Wrapper Types & Auto-Boxing in JavaScript 📦

In JavaScript, primitive values (like strings, numbers, and booleans) are **not objects**—they have no methods or properties of their own.

Yet, this code executes without error:
```javascript
const message = "hello world";
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.length);        // 11
```
How can a non-object primitive have methods and properties? The answer is **Auto-Boxing** via **Primitive Wrapper Types**.

---

## 1. The 3 Primary Primitive Wrapper Types

JavaScript provides 3 corresponding constructor functions:
- `String` for string primitives
- `Number` for number primitives
- `Boolean` for boolean primitives

---

## 2. What is Auto-Boxing? (The 3-Step Lifecycle)

Whenever you access a property or method on a primitive string, number, or boolean, the JavaScript engine executes the following behind the scenes:

```
Step 1: Creates an invisible temporary wrapper object:
        new String("hello world")

Step 2: Invokes the requested method (.toUpperCase()) on that temporary object

Step 3: Immediately destroys and garbage-collects the temporary object!
```

---

## 3. The "Disappearing Property" Mystery

A famous JavaScript interview question tests this temporary lifecycle:

```javascript
const greeting = "hello";
greeting.language = "English"; // Attempts to add a custom property

console.log(greeting.language); // Prints: undefined!
```

### Why is it `undefined`?
1. On line 2, JavaScript creates a temporary `String` wrapper, assigns `.language = "English"`, and **immediately destroys that wrapper object**.
2. On line 4, JavaScript creates a **brand new temporary wrapper object**, checks for `.language` (which doesn't exist on standard strings), returns `undefined`, and destroys this new wrapper!

In Strict Mode (`"use strict"`), attempting to assign properties to primitives throws:
`TypeError: Cannot create property 'language' on string 'hello'`

---

## 4. `String(...)` vs `new String(...)` (Fatal Mistake!)

Never use constructor invocation (`new String()`, `new Number()`, `new Boolean()`) in application code!

| Invocation | Returns | Type (`typeof`) | Truthiness |
|---|---|:---:|:---:|
| `String("hello")` | Primitive String | `"string"` | Truthy |
| `new String("hello")` | Wrapper Object | ⚠️ `"object"` | Truthy |
| `Boolean(false)` | Primitive Boolean `false` | `"boolean"` | Falsy |
| `new Boolean(false)` | Wrapper Object | ⚠️ `"object"` | 🚨 **TRUTHY! (Objects are always truthy!)** |

### The Dangerous `Boolean` Bug:
```javascript
const active = new Boolean(false);

if (active) {
  // THIS CODE RUNS! Because typeof active === "object", and all objects are truthy!
  console.log("Bug: false was treated as TRUE!");
}
```

---

## 5. Summary Rules
- Use `String(val)`, `Number(val)`, `Boolean(val)` without `new` for clean type conversions.
- Never use `new String()`, `new Number()`, or `new Boolean()`.
- Auto-boxing allows primitives to feel like objects while keeping memory consumption minimal.

