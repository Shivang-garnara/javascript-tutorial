# Level 3 — Operators

---

### A. Topic
- **Roadmap Location:** Level 3 (Topics 1 to 11)
- **Topics Covered:**
  1. Arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`)
  2. Assignment operators (`=`, `+=`, `-=`, `*=`, `/=`)
  3. Comparison operators (`>`, `<`, `>=`, `<=`)
  4. Equality: `==` (loose) vs `===` (strict)
  5. Logical operators: `&&` (AND), `||` (OR), `!` (NOT)
  6. Nullish coalescing: `??`
  7. Optional chaining: `?.`
  8. String concatenation vs Template literals
  9. Ternary operator (`condition ? exprIfTrue : exprIfFalse`)
  10. Operator precedence

---

### B. Simple Explanation

#### 1. What is an Operator?
An operator is a special symbol used to perform operations on values and variables (called operands). E.g. in `10 + 5`, `+` is the operator.

#### 2. Equality: `==` vs `===`
- `==` (Loose Equality): Compares values **after converting their types** (type coercion).
  `5 == "5"` is `true` (can cause unexpected bugs!).
- `===` (Strict Equality): Compares **both value AND type** without conversion.
  `5 === "5"` is `false`. **Always prefer `===` in modern JavaScript.**

#### 3. Logical Operators
- `&&` (AND): Both conditions must be true.
- `||` (OR): At least one condition must be true.
- `!` (NOT): Flips the boolean (`!true` is `false`).

#### 4. Modern Superstars: `??`, `?.`, and Template Literals
- **Template Literals (Backticks `` ` ``):** Allows inserting variables and expressions directly into strings using `${variable}`.
- **Nullish Coalescing (`??`):** Returns the right-hand value only if the left-hand is `null` or `undefined` (unlike `||`, it does not treat `0` or `""` as missing).
- **Optional Chaining (`?.`):** Safely reads a property from an object without throwing an error if the object is `null` or `undefined`.

#### 5. Ternary Operator
A shortcut for a simple `if...else`:
`const status = score >= 50 ? "Passed" : "Failed";`

---

### C. Why Do We Need Operators?
Operators are the fundamental building blocks of application logic: calculating cart subtotals, checking user permissions, formatting display messages, and handling defaults.

---

### D. Syntax

```javascript
// Arithmetic & Assignment
let score = 10;
score += 5; // score = score + 5 (now 15)

// Strict Equality
const isCorrect = score === 15; // true

// Template Literals
const user = "Shivang";
const greeting = `Welcome back, ${user}!`;

// Ternary
const access = isCorrect ? "Granted" : "Denied";

// Nullish Coalescing
const customTheme = null;
const activeTheme = customTheme ?? "dark"; // "dark"
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const price = 25;
const taxRate = 0.08;
const total = price + (price * taxRate);

const hasCoupon = false;
const isMember = true;
const canGetDiscount = hasCoupon || isMember;

console.log(`Total: $${total.toFixed(2)} | Discount eligible: ${canGetDiscount}`);
```

---

### F. Expected Output
```text
Total: $27.00 | Discount eligible: true
```

---

### G. Real-World Usage: E-Commerce Checkout Calculation
```javascript
const itemPrice = 40;
const quantity = 3;
const shippingCost = 10;
const isFreeShipping = (itemPrice * quantity) >= 100;

const finalShipping = isFreeShipping ? 0 : shippingCost;
const grandTotal = (itemPrice * quantity) + finalShipping;

console.log(`Subtotal: $${itemPrice * quantity}, Shipping: $${finalShipping}, Grand Total: $${grandTotal}`);
```

---

### H. Common Mistakes
1. **Using `==` instead of `===`:**
   ```javascript
   0 == false; // true (loose equality converts types!)
   0 === false; // false (different types: number vs boolean)
   ```
2. **Confusing `=` (assignment) with `===` (comparison):**
   ```javascript
   let x = 10;
   // Writing if (x = 20) assigns 20 instead of checking equality!
   ```
3. **Using `+` with numbers and strings without converting:**
   ```javascript
   let a = 10;
   let b = "20";
   console.log(a + b); // "1020" instead of 30!
   ```

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Use `%` (remainder/modulo) to check if `17` is even or odd (`17 % 2`).
2. **🟢 Beginner 2:** Create variables `product = "Laptop"` and `price = 999`. Use a template literal to log: `"The Laptop costs $999."`
3. **🟡 Intermediate 3:** Use a ternary operator to set `shippingFee` to `0` if `cartTotal >= 50`, otherwise `10`.
4. **🔴 Real-World Challenge 4:** An app needs user permissions: check if `isLoggedIn && (isAdmin || hasEditorRole)`. Test with sample booleans.

---

### J. Lesson Recap
- Always use `===` and `!==` for strict equality comparisons.
- Template literals (`` `Hello, ${name}` ``) replace messy string concatenation.
- Use `??` for safe default fallbacks when handling `null` or `undefined`.
- Ternary `condition ? trueVal : falseVal` keeps simple conditionals clean.

---

### K. Progress
- ✅ Level 3 Completed
- 🔜 Next: Level 4 — Conditions and Decision Making
