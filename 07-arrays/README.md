# Level 7 — Arrays

---

### A. Topic
- **Roadmap Location:** Level 7 (Topics 1 to 19)
- **Topics Covered:**
  1. What is an array?
  2. Indexing and `length`
  3. Adding/removing items: `push()`, `pop()`, `shift()`, `unshift()`
  4. Non-mutating slice vs mutating splice
  5. Searching: `includes()`, `indexOf()`, `find()`, `findIndex()`
  6. Functional iteration: `forEach()`, `map()`, `filter()`, `reduce()`
  7. Verification: `some()`, `every()`
  8. Sorting and reversing (`sort()`, `toSorted()`)
  9. Modern syntax: Array destructuring & spread operator (`...`)
  10. Immutable array operations

---

### B. Simple Explanation

#### 1. What is an Array?
An array is an ordered list of items. Instead of creating 50 separate variables for 50 students, you store them in a single array:
`const students = ["Aarav", "Priya", "Rohan"];`

#### 2. Zero-Based Indexing
In JavaScript, arrays start counting at index `0`:
- `students[0]` is `"Aarav"`
- `students[1]` is `"Priya"`
- `students.length` is `3`

#### 3. Core Array Methods
- `push(item)`: Adds to the end.
- `pop()`: Removes from the end.
- `unshift(item)`: Adds to the beginning.
- `shift()`: Removes from the beginning.

#### 4. The Powerhouse Functional Methods
- `map()`: Transforms every item and returns a **new array** of equal length.
- `filter()`: Selects only items that match a condition and returns a **new filtered array**.
- `reduce()`: Rolls up all array elements into a single aggregated value (like a total sum).

---

### C. Why Do We Need Arrays?
Almost all dynamic data in modern web development arrives as an array of items: list of tweets, products in a catalog, search results, or comments.

---

### D. Syntax

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: multiply each number by 2
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: keep only even numbers
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: compute sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const cartPrices = [29.99, 9.99, 49.50];

// Calculate cart total with reduce
const total = cartPrices.reduce((accumulator, price) => accumulator + price, 0);
console.log(`Cart total: $${total.toFixed(2)}`);
```

---

### F. Expected Output
```text
Cart total: $89.48
```

---

### G. Real-World Usage: Filtering Products by Price & Category
```javascript
const products = [
  { name: "Mouse", price: 25, inStock: true },
  { name: "Monitor", price: 199, inStock: false },
  { name: "Keyboard", price: 45, inStock: true }
];

// Find only in-stock items under $100
const availableBudgetItems = products
  .filter(item => item.inStock && item.price < 100)
  .map(item => item.name);

console.log("Budget products available:", availableBudgetItems); // ["Mouse", "Keyboard"]
```

---

### H. Common Mistakes
1. **Accidental Mutation with `sort()`:**
   Calling `arr.sort()` mutates the original array in place! Always make a copy first: `[...arr].sort()`.
2. **Alphabetical sorting bug with numbers:**
   `[10, 5, 100].sort()` gives `[10, 100, 5]` because it converts numbers to strings!
   Always provide a compare function: `arr.sort((a, b) => a - b)`.
3. **Using `forEach` when you want a transformed array:**
   `forEach` returns `undefined`. If you want a new modified array, use `map()`!

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Create an array of 4 favorite foods. Add one more using `push()`, and remove the first using `shift()`.
2. **🟢 Beginner 2:** Use `.map()` on `[2, 4, 6, 8]` to produce an array with all values squared.
3. **🟡 Intermediate 3:** Given an array of test scores `[45, 82, 90, 63, 71]`, use `.filter()` to extract all passing scores (>= 70).
4. **🔴 Real-World Challenge 4:** Given an array of cart item objects `[{name: "Book", price: 15, qty: 2}, {name: "Pen", price: 3, qty: 5}]`, use `.reduce()` to compute the grand total price.

---

### J. Lesson Recap
- Arrays are zero-indexed ordered collections.
- Use `map()`, `filter()`, `reduce()` to process data without mutating the original array.
- Spread operator `[...arr]` creates shallow copies.
- Sort numbers with `(a, b) => a - b`.

---

### K. Progress
- ✅ Level 7 Completed
- 🔜 Next: Level 8 — Objects
