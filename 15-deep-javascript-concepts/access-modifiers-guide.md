# Access Modifiers in JavaScript (GeeksforGeeks Guide)

In object-oriented programming (OOP), **Access Modifiers** define the visibility and accessibility of class properties and methods.

---

## 1. Summary Comparison

| Modifier | Access Level | JavaScript Support | Syntax |
| :--- | :--- | :---: | :--- |
| **Public** | Accessible everywhere (inside & outside the class) | ✅ Native | `this.property = value;` |
| **Private** | Accessible **ONLY inside the defining class** | ✅ Native (ES2022) | `#privateProperty;` |
| **Protected**| Accessible in defining class and **subclasses** | ⚠️ Convention / Simulated | `_protectedProperty;` (Naming convention) or `WeakMap` / `Symbol` |

---

## 2. Public Fields & Methods (Default)
By default, all fields and methods in JavaScript classes are public:
```javascript
class Person {
  constructor(name) {
    this.name = name; // Public property
  }

  sayHello() { // Public method
    return `Hello, ${this.name}!`;
  }
}

const p = new Person("Shivang");
console.log(p.name); // "Shivang" (Directly readable and writable)
```

---

## 3. Truly Private Fields (`#` Syntax - ES2022 Native)
Adding a `#` prefix creates a private field enforced by the JavaScript engine:
```javascript
class BankAccount {
  #balance = 0; // Private field!
  #accountPin;  // Private field!

  constructor(owner, initialDeposit, pin) {
    this.owner = owner;        // Public
    this.#balance = initialDeposit;
    this.#accountPin = pin;
  }

  // Public getter method
  get balance() {
    return this.#balance;
  }

  // Public method that safely interacts with private data
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  // Private method
  #validatePin(enteredPin) {
    return this.#accountPin === enteredPin;
  }

  withdraw(amount, pin) {
    if (!this.#validatePin(pin)) {
      throw new Error("Invalid PIN!");
    }
    if (amount > this.#balance) {
      throw new Error("Insufficient funds!");
    }
    this.#balance -= amount;
    return `Withdrawal complete. New balance: $${this.#balance}`;
  }
}

const acc = new BankAccount("Shivang", 500, 1234);
console.log(acc.owner);      // "Shivang"
console.log(acc.balance);    // 500

// ❌ Attempting to access private field from outside:
// console.log(acc.#balance); 
// SyntaxError: Private field '#balance' must be declared in an enclosing class
```

---

## 4. Protected Fields (Simulation in JavaScript)

JavaScript does not have a native `protected` keyword like Java or C#. Developers simulate protected members using:

### Pattern A: Underscore Convention (`_prop`)
The underscore indicates to fellow developers: *"Treat this as protected; do not access outside this class or its child classes."*
```javascript
class Vehicle {
  constructor(speed) {
    this._speed = speed; // Convention: Protected
  }
}

class Car extends Vehicle {
  accelerate() {
    this._speed += 10; // Subclass can access
  }
}
```

### Pattern B: Using Symbols or WeakMaps
For stronger privacy that allows child classes to access shared symbols while hiding them from external object inspection.

