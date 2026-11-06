# Level 9 — Strings, Numbers, Dates, and Built-in Utilities

---

### A. Topic
- **Roadmap Location:** Level 9 (Topics 1 to 11)
- **Topics Covered:**
  1. String manipulation: `trim()`, `toUpperCase()`, `toLowerCase()`, `slice()`, `replace()`, `replaceAll()`, `split()`
  2. Number methods: `toFixed()`, `parseInt()`, `parseFloat()`, `isNaN()`
  3. `Math` object: `Math.floor()`, `Math.ceil()`, `Math.round()`, `Math.random()`, `Math.max()`, `Math.min()`
  4. `Date` object: creation, timestamps, formatting
  5. `Set`: Unique value collections
  6. `Map`: Key-value collections (accepting any key type)
  7. Regular Expressions (`RegExp`) & common validation patterns (email, phone)

---

### B. Simple Explanation

#### 1. Built-in Objects
JavaScript gives you powerful built-in toolboxes so you don't have to reinvent the wheel:
- **String utilities:** Clean up dirty form inputs (remove extra spaces with `trim()`, lowercase emails).
- **Math utilities:** Generate random numbers for games/dice rolls, round currency.
- **Date utilities:** Calculate timestamps, measure elapsed time, format local dates.
- **Set:** An array-like collection that automatically guarantees **no duplicates**.
- **Map:** Like an object, but keeps insertion order and keys can be any type.
- **RegExp:** Pattern-matching syntax for text search and form validation.

---

### C. Why Do We Need Them?
Every production website deals with messy user inputs: emails typed with accidental spaces, credit card numbers formatted with dashes, random coupon generators, timestamps for chat messages, and deduplicating tag lists.

---

### D. Syntax

```javascript
// Clean text
const cleanEmail = rawEmail.trim().toLowerCase();

// Generate random number between min and max
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

// Deduplicate an array using Set
const uniqueTags = [...new Set(["tech", "news", "tech", "ai"])]; // ["tech", "news", "ai"]

// Validate email with RegExp
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValid = emailPattern.test("test@example.com"); // true
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const birthDate = new Date("2000-05-15");
const now = new Date();
const ageInYears = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24 * 365.25));

console.log(`Calculated Age: ${ageInYears} years`);
```

---

### F. Expected Output
```text
Calculated Age: 26 years
```

---

### G. Real-World Usage: Input Sanitizer & Random Token Generator
```javascript
function generateOrderToken() {
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timestamp = Date.now().toString(36).toUpperCase();
  return `ORD-${timestamp}-${randomPart}`;
}
console.log("New Order Token:", generateOrderToken());
```

---

### H. Common Mistakes
1. **Comparing Dates with `===`:**
   `new Date("2025-01-01") === new Date("2025-01-01")` is `false` because they are two distinct objects in memory. Compare timestamps with `.getTime()` instead!
2. **`Math.random()` range confusion:**
   `Math.random()` generates a number from `0` (inclusive) up to `1` (exclusive). Multiply and use `Math.floor()` for integers.
3. **Strings are immutable:**
   `str.toUpperCase()` returns a **new** string; it does not change `str` in place!

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Given `"   Frontend Developer in JavaScript   "`, trim it, convert it to all uppercase, and check if it includes `"JAVASCRIPT"`.
2. **🟢 Beginner 2:** Generate a random integer between `1` and `6` (simulating a standard dice roll).
3. **🟡 Intermediate 3:** Deduplicate an array with duplicate names using `Set`.
4. **🔴 Real-World Challenge 4:** Write a phone number validator function using RegExp to check if a string matches a 10-digit phone number.

---

### J. Lesson Recap
- Strings are immutable: methods return fresh strings.
- Use `Math.floor(Math.random() * N)` for random integer generation.
- Use `Set` to instantly deduplicate arrays: `[...new Set(array)]`.
- Use `Date.now()` for fast millisecond timestamps.

---

### K. Progress
- ✅ Level 9 Completed
- 🔜 Next: Level 10 — DOM (Document Object Model)
