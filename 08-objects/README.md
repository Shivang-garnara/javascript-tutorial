# Level 8 — Objects

---

### A. Topic
- **Roadmap Location:** Level 8 (Topics 1 to 15)
- **Topics Covered:**
  1. What is an object?
  2. Properties and values
  3. Dot notation vs Bracket notation
  4. Adding, modifying, deleting properties
  5. Object methods and the `this` keyword
  6. Nested objects
  7. Object destructuring & renaming
  8. Object spread syntax (`...obj`)
  9. `Object.keys()`, `Object.values()`, and `Object.entries()`
  10. JSON serialization: `JSON.stringify()` & `JSON.parse()`
  11. Shallow vs Deep cloning

---

### B. Simple Explanation

#### 1. What is an Object?
While an array stores a simple ordered list (`[1, 2, 3]`), an **object** stores structured data using **key-value pairs**.
Think of a real-world passport:
- Name: Shivang
- Age: 24
- Nationality: Indian
- IsActive: true

In JavaScript:
```javascript
const user = {
  name: "Shivang",
  age: 24,
  isActive: true
};
```

#### 2. Accessing Properties
- **Dot notation:** `user.name` (cleanest and most common).
- **Bracket notation:** `user["name"]` (required when the property key is stored in a variable or contains spaces).

#### 3. Methods & `this`
A function stored as an object property is called a **method**.
Inside a regular method, the keyword `this` refers to the object itself!

#### 4. JSON (JavaScript Object Notation)
JSON is the standard format for exchanging data between frontend websites and backend servers.
- `JSON.stringify(object)`: Converts a JS object into a JSON string to send over the network.
- `JSON.parse(jsonString)`: Converts a JSON string received from a server back into a JS object.

---

### C. Why Do We Need Objects?
Virtually every real-world entity in an application is represented as an object: a user account, a product listing, a database record, a shopping cart, or an API response.

---

### D. Syntax

```javascript
// Destructuring & default values
const { name, age, role = "User" } = user;

// Methods and `this`
const account = {
  owner: "Alice",
  balance: 1000,
  withdraw(amount) {
    this.balance -= amount;
    return `Remaining balance: $${this.balance}`;
  }
};
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const smartphone = {
  brand: "Google",
  model: "Pixel 9",
  price: 799,
  specs: {
    ram: "12GB",
    storage: "256GB"
  },
  getSummary() {
    return `${this.brand} ${this.model} (${this.specs.ram} RAM) - $${this.price}`;
  }
};

console.log(smartphone.getSummary());
```

---

### F. Expected Output
```text
Google Pixel 9 (12GB RAM) - $799
```

---

### G. Real-World Usage: API User Profile & Preferences
```javascript
const userSession = {
  id: "u_1024",
  profile: {
    username: "shivang_dev",
    email: "shivang@example.com"
  },
  settings: {
    theme: "dark",
    notificationsEnabled: true
  }
};

// Safe access using optional chaining
const currentTheme = userSession.settings?.theme ?? "light";
console.log("Active theme:", currentTheme);
```

---

### H. Common Mistakes
1. **Using arrow functions for object methods when needing `this`:**
   Arrow functions do NOT have their own `this`. They inherit `this` from outer scope, causing `this.name` to be `undefined`!
2. **Mutating an object while copying with `=`:**
   ```javascript
   const userA = { name: "Aarav" };
   const userB = userA; // This does NOT copy! It copies the reference.
   userB.name = "Rohan";
   console.log(userA.name); // "Rohan" (unintentionally changed!)
   // Solution: const userB = { ...userA };
   ```

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Create a `car` object with properties: `make`, `model`, `year`. Print `"I drive a [year] [make] [model]"`.
2. **🟢 Beginner 2:** Add a new property `mileage` to the `car` object, and delete the `year` property.
3. **🟡 Intermediate 3:** Use destructuring to extract `title` and `author` from a `book` object. Provide a default value `"Unknown"` for `pages`.
4. **🔴 Real-World Challenge 4:** Convert a complex order object into JSON using `JSON.stringify()`, then parse it back into a new object and verify deep equality.

---

### J. Lesson Recap
- Objects hold key-value pairs.
- Access via `obj.key` or `obj["key"]`.
- Use regular function syntax for methods that need `this`.
- Copy objects safely with spread `{ ...obj }` or `structuredClone(obj)` for deep copies.
- `JSON.stringify` converts object to string; `JSON.parse` does the reverse.

---

### K. Progress
- ✅ Level 8 Completed
- 🔜 Next: Level 9 — Built-in Utilities (Strings, Math, Dates)

