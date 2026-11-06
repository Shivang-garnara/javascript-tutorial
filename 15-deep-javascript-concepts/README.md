# Level 15 — Deeper JavaScript Concepts

---

### A. Topic
- **Roadmap Location:** Level 15 (Topics 1 to 17)
- **Topics Covered:**
  1. Execution Context & The Call Stack
  2. Hoisting & The Temporal Dead Zone (TDZ)
  3. Scope Chain & Lexical Environment
  4. Closures in Depth
  5. The `this` keyword across contexts
  6. Explicit binding: `call()`, `apply()`, and `bind()`
  7. Prototypal Inheritance & Prototype Chain
  8. ES6 Classes: `class`, `constructor`, `extends`, `super`
  9. Encapsulation & Private Class Fields (`#privateField`)
  10. Getters (`get`) and Setters (`set`)
  11. Static methods & properties
  12. Iterators and Generators (`function*`, `yield`)
  13. Memory Management & Garbage Collection (Mark-and-Sweep)

---

### B. Simple Explanation

#### 1. How JavaScript Executes Code Behind the Scenes
Before running your code, the JavaScript engine performs two phases:
1. **Creation Phase:** Memory is allocated for variables and functions (known as **Hoisting**).
   - Functions declared with `function` are fully hoisted.
   - Variables declared with `let` and `const` are hoisted into an uninitialized state called the **Temporal Dead Zone (TDZ)**. Accessing them before declaration throws `ReferenceError`.
2. **Execution Phase:** Code executes line by line on the single-threaded **Call Stack**.

#### 2. Prototypes & Prototypal Inheritance
In JavaScript, objects inherit properties directly from other objects through their **prototype**. When you call `arr.push()`, `push` does not exist on your specific array; JavaScript looks up the **prototype chain** to find it on `Array.prototype`!

#### 3. Modern Classes with Private Fields
ES6 Classes provide clean syntax for object-oriented programming:
```javascript
class BankAccount {
  #balance = 0; // Private field, cannot be touched from outside!

  constructor(owner, initialDeposit) {
    this.owner = owner;
    this.#balance = initialDeposit;
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
}
```

#### 4. Explicit Binding: `call`, `apply`, `bind`
- `func.call(obj, arg1, arg2)`: Executes `func` with `this` set to `obj`.
- `func.apply(obj, [arg1, arg2])`: Same, but arguments passed as an array.
- `func.bind(obj)`: Returns a **new function** permanently bound to `this`.

---

### C. Why Do We Need Deeper Concepts?
Understanding the engine, hoisting, prototypes, and memory management separates junior coders from senior engineers. It lets you write leak-free, performant code and easily crack technical interviews.

---

### D. Syntax

```javascript
// Generator Function
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++; // Pauses and returns current value!
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // Calls parent constructor
    this.department = department;
  }

  getDetails() {
    return `${super.getDetails()} (Dept: ${this.department})`;
  }
}
```

---

### F. Expected Output
```text
Shivang earns $120000 (Dept: Engineering)
```

---

### G. Real-World Usage: Protected Authentication Manager
```javascript
class AuthManager {
  #token = null;

  login(token) {
    this.#token = token;
  }

  isAuthenticated() {
    return this.#token !== null;
  }
}
```

---

### H. Common Mistakes
1. **Losing `this` in callback handlers:**
   Passing an object method to an event listener or `setTimeout` strips its `this` binding unless you use an arrow function or `.bind(this)`.
2. **Accessing `let`/`const` in TDZ:**
   ```javascript
   console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
   let age = 25;
   ```

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Create a `Car` class with a `constructor(make, model)` and a method `drive()`.
2. **🟢 Beginner 2:** Create an `ElectricCar` class that `extends Car` and adds a `batteryCapacity` property.
3. **🟡 Intermediate 3:** Use `.bind()` to fix the `this` context when an object method is passed to `setTimeout`.
4. **🔴 Real-World Challenge 4:** Write a generator function `paginate(items, pageSize)` that yields one page of items at a time.

---

### J. Lesson Recap
- Hoisting moves declarations to the top; `let`/`const` live in the Temporal Dead Zone until initialized.
- Prototypal inheritance connects objects via the prototype chain.
- Classes provide structured OOP; use `#` for true private variables.
- Control `this` using `.bind()`, `.call()`, or arrow functions.

---

### K. Progress
- ✅ Level 15 Completed
- 🔜 Next: Level 16 — Error Handling, Debugging, and Code Quality
