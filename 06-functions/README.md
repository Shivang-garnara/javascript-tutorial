# Level 6 — Functions

---

### A. Topic
- **Roadmap Location:** Level 6 (Topics 1 to 16)
- **Topics Covered:**
  1. What is a function?
  2. Declaring and calling functions
  3. Parameters vs arguments
  4. Return values
  5. Function expressions
  6. Arrow functions (`() => {}`)
  7. Default parameters
  8. Rest parameters (`...args`)
  9. Callback functions
  10. Higher-order functions
  11. Scope: Global, Function, and Block scope
  12. Lexical scope and Closures
  13. Pure functions & side effects

---

### B. Simple Explanation

#### 1. What is a Function?
A function is a reusable block of code designed to perform a particular task.
Think of a function like a blender:
- **Inputs (Arguments):** Bananas and milk.
- **Recipe (The function logic):** Blend for 30 seconds.
- **Output (Return value):** Banana smoothie.

Instead of writing the same 10 lines of code every time you need to calculate tax or format a date, you write a function once and call it whenever needed!

#### 2. Declarations vs Expressions vs Arrow Functions
```javascript
// 1. Function Declaration (Hoisted)
function greet(name) {
  return `Hello, ${name}!`;
}

// 2. Function Expression (Not hoisted)
const greetExpr = function(name) {
  return `Hello, ${name}!`;
};

// 3. Arrow Function (Modern & concise)
const greetArrow = (name) => `Hello, ${name}!`;
```

#### 3. Parameters vs Arguments
- **Parameters:** The placeholder variable names listed in the function definition (e.g. `name`).
- **Arguments:** The actual values you pass into the function when invoking it (e.g. `"Shivang"`).

#### 4. Scope & Closures
- **Block Scope:** Variables declared with `let` and `const` inside `{ ... }` only exist within those brackets.
- **Closure:** A function "remembers" and maintains access to variables from its parent scope even after the parent function has finished executing!

---

### C. Why Do We Need Functions?
Functions provide the **DRY** (Don't Repeat Yourself) principle. They make code modular, readable, easy to test, and maintainable.

---

### D. Syntax

```javascript
// Arrow function with default parameter
const calculateDiscount = (price, discountPercent = 10) => {
  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
};

const finalPrice = calculateDiscount(200); // Uses default 10% -> 180
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

console.log(formatCurrency(49.9)); // "$49.90"
```

---

### F. Expected Output
```text
$49.90
```

---

### G. Real-World Usage: Shopping Cart Tax & Discount Engine
```javascript
function computeOrderTotal(cartSubtotal, couponCode) {
  let discount = 0;
  if (couponCode === "SAVE20") {
    discount = cartSubtotal * 0.20;
  }
  const tax = (cartSubtotal - discount) * 0.08;
  return {
    subtotal: cartSubtotal,
    discount: discount,
    tax: tax,
    grandTotal: (cartSubtotal - discount) + tax
  };
}
```

---

### H. Common Mistakes
1. **Forgetting to return a value:**
   If you forget `return`, the function returns `undefined` by default!
2. **Confusing parameters with arguments:**
3. **Overusing global variables:** Functions should take inputs via arguments and return results rather than modifying global variables.

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Write a function `square(num)` that returns the square of a number.
2. **🟢 Beginner 2:** Convert `square(num)` into an arrow function.
3. **🟡 Intermediate 3:** Write a function `isEven(number)` that returns `true` if the number is even, and `false` if it is odd.
4. **🔴 Real-World Challenge 4:** Write a closure function `createCounter()` that returns a function which increments and returns a counter variable every time it is called.

---

### J. Lesson Recap
- Functions take inputs (parameters/arguments) and return outputs.
- Arrow functions `(x) => x * 2` are concise and modern.
- Variables declared inside `{}` with `let`/`const` are block-scoped.
- Closures allow inner functions to retain access to outer variables.

---

### K. Progress
- ✅ Level 6 Completed
- 🔜 Next: Level 7 — Arrays

