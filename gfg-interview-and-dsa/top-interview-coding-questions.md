# Top 15 JavaScript Technical Interview Questions (GeeksforGeeks Placement 360)

The most commonly asked conceptual and code-output questions in technical interviews.

---

### Q1: What is the difference between `null` and `undefined`?
- `undefined`: A variable that has been declared but not assigned a value. `typeof undefined === "undefined"`.
- `null`: An intentional assignment representing "no value" or "empty". `typeof null === "object"` (a historical JS quirk).

---

### Q2: What will be the output and why?
```javascript
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 - - "2" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
```
**Answers:**
1. `"122"` — First `1 + "2"` coerces to `"12"`, then `"12" + "2"` becomes `"122"`.
2. `"32"` — The unary `+"2"` converts `"2"` to number `2`. So `1 + 2 = 3`, then `3 + "2" = "32"`.
3. `"32"` — Unary `-"2"` is `-2`. `1 - (-2) = 3`. Then `3 + "2" = "32"`.
4. `"NaN2"` — `"A" - "B"` cannot do math on letters, so it produces `NaN`. Then `NaN + "2" = "NaN2"`.
5. `NaN` — `NaN + 2 = NaN`.

---

### Q3: What is the Event Loop output order?
```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```
**Output:** `1`, `4`, `3`, `2`.
**Why?**
- `1` and `4` are synchronous code on the **Call Stack**.
- `3` is in the **Microtask Queue** (Promises).
- `2` is in the **Macrotask / Task Queue** (`setTimeout`).
- The Event Loop always empties the Microtask Queue before picking from the Task Queue!

---

### Q4: Explain the famous `var` in a loop problem and how `let` fixes it:
```javascript
// ❌ Using var:
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Outputs: 3, 3, 3 (Because `var` is function-scoped; all callbacks share the same final `i` = 3)

// ✅ Using let:
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Outputs: 0, 1, 2 (Because `let` is block-scoped; every loop iteration creates a new `i` binding!)
```

---

### Q5: How do you implement a `memoize` function using closures?
```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Returning cached result for:", key);
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = (n) => {
  // Simulate slow work
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // Computed: 25
console.log(fastSquare(5)); // Cached: 25
```

---

### Q6: What is the difference between `call()`, `apply()`, and `bind()`?
- `call(thisArg, arg1, arg2)`: Invokes immediately with arguments listed individually.
- `apply(thisArg, [argsArray])`: Invokes immediately with arguments passed as an array.
- `bind(thisArg, arg1, arg2)`: Returns a **new function** permanently bound to `thisArg`, to be invoked later.

---

### Q7: What is Currying?
Currying transforms a function taking multiple arguments `f(a, b, c)` into a sequence of functions each taking a single argument `f(a)(b)(c)`:
```javascript
const multiply = (a) => (b) => (c) => a * b * c;
console.log(multiply(2)(3)(4)); // 24
```
