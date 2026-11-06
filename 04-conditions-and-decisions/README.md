# Level 4 — Conditions and Decision Making

---

### A. Topic
- **Roadmap Location:** Level 4 (Topics 1 to 7)
- **Topics Covered:**
  1. `if` statement
  2. `else` clause
  3. `else if` ladder
  4. Nested conditions
  5. `switch` statement
  6. Conditional expressions
  7. Practical validation & decision-making logic

---

### B. Simple Explanation

#### 1. What are Conditions?
Every application needs to make decisions. For example:
- *If* the user password matches, let them log in; *else*, show an error message.
- *If* cart total > \$100, give a 10% discount; *else if* > \$50, give 5%; *else*, no discount.

Conditions allow your code to execute different branches based on whether a test evaluates to `true` or `false`.

#### 2. `if...else if...else` Ladder
Evaluates conditions in sequential order from top to bottom. The first condition that is `true` runs its code block, and JavaScript skips the remaining branches.

#### 3. `switch` Statement
When you are comparing one variable against multiple exact values (e.g., days of the week, user roles, order status), `switch` is often cleaner than a long list of `else if` statements.

---

### C. Why Do We Need Conditions?
Real-world software is completely interactive and conditional: form validation, authentication, authorization, discount calculations, theme switching, and game rules all rely on conditional decision making.

---

### D. Syntax

```javascript
// if / else if / else
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// switch
switch (userRole) {
  case "admin":
    console.log("Full dashboard access");
    break; // Stops falling through to next case!
  case "editor":
    console.log("Edit access");
    break;
  default:
    console.log("Viewer only");
}
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const userAge = 19;
const hasId = true;

if (userAge >= 18) {
  if (hasId) {
    console.log("Entry permitted.");
  } else {
    console.log("Please present valid ID.");
  }
} else {
  console.log("Entry denied: Must be at least 18.");
}
```

---

### F. Expected Output
```text
Entry permitted.
```

---

### G. Real-World Usage: E-Commerce Shipping Calculator
```javascript
const destination = "International";
const orderAmount = 120;
let shippingCost = 0;

if (destination === "Domestic") {
  shippingCost = orderAmount >= 100 ? 0 : 5;
} else if (destination === "International") {
  shippingCost = orderAmount >= 200 ? 10 : 25;
} else {
  shippingCost = 15;
}
console.log(`Shipping cost: $${shippingCost}`);
```

---

### H. Common Mistakes
1. **Forgetting `break` in a `switch` statement:**
   Without `break`, execution "falls through" into the next cases even if they don't match!
2. **Using `=` instead of `===` inside `if`:**
   ```javascript
   if (status = "active") { ... } // ❌ This assigns "active" instead of comparing!
   ```
3. **Checking conditions out of order:**
   Checking `score >= 50` before `score >= 90` will trigger the 50 branch first for a score of 95!

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Write an `if...else` statement that checks if a temperature is above `30`. If so, print `"Hot day"`, else print `"Pleasant day"`.
2. **🟢 Beginner 2:** Use a `switch` statement on `dayOfWeek` (1 to 7) to print whether it's `"Weekend"` (6 or 7) or `"Weekday"` (1-5).
3. **🟡 Intermediate 3:** Write a password strength validator:
   - Length < 6: `"Too weak"`
   - Length between 6 and 10: `"Moderate"`
   - Length > 10: `"Strong"`
4. **🔴 Real-World Challenge 4:** Implement an ATM withdrawal decision checker:
   Check if `requestedAmount <= accountBalance` AND `requestedAmount % 10 === 0` (ATM only dispenses $10 notes). Provide appropriate error or success messages.

---

### J. Lesson Recap
- `if`, `else if`, `else` controls flow based on boolean expressions.
- Remember `===` for comparisons.
- Always include `break;` in each `case` of a `switch` statement.
- Keep conditions ordered from most specific to general.

---

### K. Progress
- ✅ Level 4 Completed
- 🔜 Next: Level 5 — Loops and Repetition
