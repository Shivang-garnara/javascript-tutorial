# Level 2 — Variables and Data Types

---

### A. Topic
- **Roadmap Location:** Level 2 (Topics 1 to 15)
- **Topics Covered:**
  1. What is a variable?
  2. `let`, `const`, and `var`
  3. Variable naming rules
  4. Strings
  5. Numbers
  6. Booleans
  7. `undefined`
  8. `null`
  9. BigInt
  10. Symbols
  11. `typeof` operator
  12. Primitive vs reference values
  13. Type conversion (explicit)
  14. Type coercion (implicit)
  15. Truthy and falsy values

---

### B. Simple Explanation

#### 1. What is a Variable?
A variable is a labeled storage container in the computer's memory that holds information you want to reuse later.
Think of a cardboard box labeled `"userName"`: inside, you put the text `"Shivang"`. Whenever your program asks for `"userName"`, it retrieves `"Shivang"`.

#### 2. `let` vs `const` vs `var`
- `const`: For values that should **never change** (constant). Default choice for clean code!
- `let`: For values that **can change or get reassigned** later (e.g. counters, game scores).
- `var`: The older way (before 2015). Has scope quirks and can cause bugs. **Avoid using `var` in modern code.**

#### 3. Data Types in JavaScript
JavaScript has **8 primary data types**:
1. **String:** Text wrapped in quotes (`"hello"` or `'world'`).
2. **Number:** Integers and decimals (`42`, `3.14`).
3. **Boolean:** Logical values: only `true` or `false`.
4. **undefined:** A variable declared but not yet given a value.
5. **null:** An intentional empty or blank value.
6. **BigInt:** For extraordinarily large numbers beyond \(2^{53}-1\).
7. **Symbol:** Unique and immutable identifier.
8. **Object:** Complex collections of key-value pairs (covered in Level 8).

#### 4. Type Conversion vs Coercion
- **Conversion (Explicit):** You deliberately change the type (e.g., `Number("42")` becomes `42`).
- **Coercion (Implicit):** JavaScript automatically converts types behind the scenes (e.g., `"5" + 2` results in `"52"` because JS treats `+` with a string as text concatenation).

#### 5. Truthy and Falsy Values
In JavaScript, any value can be evaluated as true or false in conditions.
There are only **8 falsy values** in JavaScript:
- `false`, `0`, `-0`, `0n`, `""` (empty string), `null`, `undefined`, `NaN` (Not a Number).
*Everything else is truthy!*

---

### C. Why Do We Need Variables & Data Types?
Programs must remember user inputs, calculations, and application states. Using the right data types prevents math bugs (like adding a string to a number) and makes code reliable.

---

### D. Syntax

```javascript
// Declare constant
const storeName = "Super Mart";

// Declare reassignable variable
let itemsInCart = 0;
itemsInCart = itemsInCart + 1; // Reassigning is allowed

// Check type
console.log(typeof storeName);   // "string"
console.log(typeof itemsInCart); // "number"
```

---

### E. Basic Example

```javascript
const customerName = "Aarav";
let walletBalance = 50.00;
const isVipMember = true;
let discountCoupon = null; // Currently no coupon applied

console.log("Customer:", customerName);
console.log("Wallet Balance:", walletBalance);
console.log("Is VIP?", isVipMember);
```

---

### F. Expected Output
```text
Customer: Aarav
Wallet Balance: 50
Is VIP? true
```

---

### G. Real-World Usage: User Profile State
In an application like Netflix or Spotify:
- `const userId = "USR_9921";` (ID never changes)
- `let userSubscription = "Free";` (May upgrade to Premium)
- `let isCurrentlyPlaying = false;` (Tracks playback state)
- `let lastPlayedSong = null;` (Empty until a song starts)

---

### H. Common Mistakes
1. **Reassigning a `const`:**
   ```javascript
   const birthYear = 2000;
   birthYear = 2001; // ❌ TypeError: Assignment to constant variable.
   ```
2. **Confusing `null` and `undefined`:**
   - `undefined` means a variable has been declared but not assigned any value yet.
   - `null` is intentionally assigned by the developer to represent "empty / nothing".
3. **Accidental string concatenation:**
   ```javascript
   let price = "100"; // string from an HTML input
   let tax = 15;
   console.log(price + tax); // "10015" ❌ (use Number(price) + tax -> 115 ✅)
   ```

---

### I. Practice Exercises

Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Declare a `const` for your birth year, and a `let` for your current age. Reassign your age to next year's age.
2. **🟢 Beginner 2:** Use `typeof` to check the data types of `"JavaScript"`, `99`, `true`, and `undefined`.
3. **🟡 Intermediate 3:** Convert the string `"45.90"` to a number using `Number()` or `parseFloat()`, then add `10` to it.
4. **🔴 Real-World Challenge 4:** Create variables for a food delivery order: `restaurantName`, `orderTotal`, `hasFreeDeliveryCoupon`, and print a formatted summary.

---

### J. Lesson Recap
- Prefer `const` by default. Use `let` only when the value must change. Never use `var`.
- Primitives: string, number, boolean, undefined, null, BigInt, symbol.
- Use `typeof` to inspect any value's type.
- Remember the 8 falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

---

### K. Progress
- ✅ Level 2 Completed
- 🔜 Next: Level 3 — Operators
