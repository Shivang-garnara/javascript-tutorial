# Functional JavaScript: Currying, Composition & Pure Functions 🧮

Functional Programming (FP) treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data. Three fundamental tenets of FP in JavaScript are **Pure Functions**, **Currying**, and **Function Composition**.

---

## 1. Pure Functions (The Foundation)

A function is **pure** if:
1. **Deterministic:** Given the exact same inputs, it always returns the exact same output.
2. **No Side Effects:** It does not modify variables outside its scope, does not mutate its arguments, and performs no I/O operations (like `console.log`, DOM manipulation, or HTTP requests) inside its core logic.

```javascript
// ❌ Impure (relies on outside state and mutates input):
let tax = 0.18;
function calculateTotalImpure(items) {
  items.push({ name: "fee", price: 10 }); // Mutates parameter!
  tax = 0.20; // Side effect: mutates global!
  return items.reduce((s, i) => s + i.price, 0) * (1 + tax);
}

// ✅ Pure (Immutable, deterministic, self-contained):
function calculateTotalPure(items, taxRate) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return total * (1 + taxRate);
}
```

---

## 2. Function Currying

**Currying** is the process of translating a function that takes multiple arguments `f(a, b, c)` into a sequence of nested functions that each take a **single argument**: `f(a)(b)(c)`.

### Basic Example:
```javascript
// Standard function:
function multiply(a, b) {
  return a * b;
}

// Curried function:
function curriedMultiply(a) {
  return function (b) {
    return a * b;
  };
}

// Or with Arrow Syntax:
const curryMult = a => b => a * b;

const triple = curryMult(3); // Partial application!
console.log(triple(10)); // 30
console.log(triple(5));  // 15
```

### Writing a Universal Automatic `curry()` Utility:
How does a real functional library (like Lodash or Ramda) curry any function automatically? By checking `fn.length` (the number of declared parameters):

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

function sumThree(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sumThree);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```

---

## 3. Function Composition (`pipe` & `compose`)

Function composition is the process of combining two or more functions to produce a new function. Instead of nesting function calls inside each other:
`format(lowercase(trim(input)))` (ugly and hard to read!)

We build a clean data processing pipeline:

### A. `pipe()` — Left-to-Right Execution
The most intuitive format: Data flows naturally from the first function to the last.

```javascript
const pipe = (...fns) => (initialValue) =>
  fns.reduce((acc, fn) => fn(acc), initialValue);

// Discrete single-responsibility helper functions:
const trimString = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const wrapInHeading = str => `<h1>${str}</h1>`;

// Composed Pipeline:
const sanitizeHeading = pipe(trimString, toLowerCase, wrapInHeading);

console.log(sanitizeHeading("   WELCOME TO JAVASCRIPT!   "));
// "<h1>welcome to javascript!</h1>"
```

### B. `compose()` — Right-to-Left Execution (Mathematical Standard)
Runs from right-to-left: `compose(f, g)(x) === f(g(x))`:
```javascript
const compose = (...fns) => (initialValue) =>
  fns.reduceRight((acc, fn) => fn(acc), initialValue);
```

---

## 4. Why This Matters in Modern Frontend & React
- React hooks (`useCallback`, `useMemo`) rely on pure function concepts.
- Middleware in Redux and Express are built entirely using currying and function composition.
- Clean code architecture: Small, pure, testable functions chained together into pipelines.

