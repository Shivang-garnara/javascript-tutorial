# Level 5 — Loops and Repetition

---

### A. Topic
- **Roadmap Location:** Level 5 (Topics 1 to 11)
- **Topics Covered:**
  1. Why loops are needed
  2. `for` loop
  3. `while` loop
  4. `do...while` loop
  5. `break` statement
  6. `continue` statement
  7. Nested loops
  8. `for...of` loop (iterating values in arrays/strings)
  9. `for...in` loop (iterating object keys)
  10. Choosing the right loop
  11. Real-world list processing examples

---

### B. Simple Explanation

#### 1. Why Do We Need Loops?
If you needed to print numbers from 1 to 100, writing 100 separate `console.log()` statements would be painful and error-prone. Loops allow you to execute a block of code repeatedly until a specific condition is met.

#### 2. The 3 Main Traditional Loops
- **`for` loop:** Used when you know in advance how many times you want to repeat (e.g. 10 times).
  `for (initialization; condition; increment)`
- **`while` loop:** Used when you want to repeat as long as a condition remains `true` (e.g. while the user is connected).
- **`do...while` loop:** Like `while`, but **always executes at least once** before checking the condition.

#### 3. Loop Control
- `break`: Immediately exits the loop.
- `continue`: Skips the rest of the current iteration and jumps directly to the next one.

#### 4. Modern Loops
- `for...of`: The cleanest way to loop through arrays, strings, and sets.
- `for...in`: Loops through keys of an object.

---

### C. Why Do We Need Loops?
Almost every application deals with collections: listing products on an e-commerce page, processing items in a shopping cart, sending notifications to a list of users, or searching for a specific item.

---

### D. Syntax

```javascript
// Classic for loop
for (let i = 1; i <= 5; i++) {
  console.log(`Step ${i}`);
}

// while loop
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// for...of loop (Modern & clean!)
const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
// Calculating total sum of numbers from 1 to 10
let totalSum = 0;

for (let i = 1; i <= 10; i++) {
  totalSum += i;
}

console.log("Sum of 1 to 10 is:", totalSum);
```

---

### F. Expected Output
```text
Sum of 1 to 10 is: 55
```

---

### G. Real-World Usage: Searching a Product Catalog
```javascript
const inventory = ["Headphones", "USB Cable", "Wireless Mouse", "Keyboard"];
const searchTerm = "Wireless Mouse";
let found = false;

for (const item of inventory) {
  if (item === searchTerm) {
    found = true;
    console.log(`Item "${item}" is available in warehouse!`);
    break; // No need to keep searching once found
  }
}
```

---

### H. Common Mistakes
1. **Infinite Loop (Forgetting to update counter):**
   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     // ❌ Forgot i++! This loop will freeze the browser or terminal forever!
   }
   ```
2. **Off-by-one errors:**
   Using `<` instead of `<=` or starting at 1 when indexing from 0.
3. **Using `for...in` on arrays:**
   `for...in` iterates over string keys, not item values. Always use `for...of` for array values!

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Write a `for` loop that logs all even numbers from `2` to `20`.
2. **🟢 Beginner 2:** Use a `while` loop that counts down from `5` to `1`, then logs `"Liftoff! 🚀"`.
3. **🟡 Intermediate 3:** Use a `for` loop from `1` to `15`. Use `continue` to skip the number `7`.
4. **🔴 Real-World Challenge 4:** Given an array of order prices `[12, 45, 70, 25, 90]`, use a loop to calculate the total revenue and find the highest single order.

---

### J. Lesson Recap
- `for` for known counts, `while` for conditional repetitions.
- `for...of` is best for looping over arrays.
- Always ensure your loop has a working termination condition to avoid infinite loops.
- `break` exits immediately; `continue` skips to the next round.

---

### K. Progress
- ✅ Level 5 Completed
- 🔜 Next: Level 6 — Functions
