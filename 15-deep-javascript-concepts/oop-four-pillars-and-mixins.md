# The 4 Pillars of OOP & Mixins in JavaScript 🏛️

JavaScript is a multi-paradigm language. While it uses prototypal inheritance under the hood, modern ES6+ classes provide full-featured support for **Object-Oriented Programming (OOP)**.

---

## 1. The 4 Pillars of OOP in JavaScript

### Pillar 1: Encapsulation (Protecting Data)
Encapsulation means bundling state (data) and behavior (methods) together into a single unit, and hiding internal implementation details from unauthorized outside tampering.

Modern JavaScript provides **Private Class Fields** using the `#` hash prefix:
```javascript
class BankAccount {
  #balance = 0; // Truly private field! Cannot be accessed outside class

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Shivang", 5000);
// console.log(acc.#balance); // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class!
```

---

### Pillar 2: Inheritance (`extends` & `super`)
Inheritance allows a subclass to reuse code from a superclass (parent class).

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getRole() {
    return "Standard User";
  }
}

class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email); // Calls the parent constructor!
    this.permissions = permissions;
  }

  // Overriding parent method:
  getRole() {
    return "Administrator (Elevated Permissions)";
  }
}
```

---

### Pillar 3: Polymorphism (Many Forms)
Polymorphism allows different classes to implement the same method name, each responding with behavior tailored to its specific type.

```javascript
class Shape {
  calculateArea() {
    throw new Error("calculateArea() must be implemented by subclass!");
  }
}

class Circle extends Shape {
  constructor(radius) { super(); this.radius = radius; }
  calculateArea() { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(w, h) { super(); this.w = w; this.h = h; }
  calculateArea() { return this.w * this.h; }
}

// Polymorphic behavior: We don't care what shape it is; we just call .calculateArea()!
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => console.log("Area:", shape.calculateArea().toFixed(2)));
```

---

### Pillar 4: Abstraction (Hiding Complexity)
Abstraction hides complex internal operations and exposes only a clean, simple interface to the consumer.

```javascript
class CoffeeMachine {
  // Simple public method:
  makeEspresso() {
    this.#heatWater();
    this.#grindBeans();
    this.#pumpPressure();
    return "☕ Fresh hot espresso is ready!";
  }

  // Complex internal steps hidden from consumer:
  #heatWater() { /* boil to 95C */ }
  #grindBeans() { /* 18 grams fine grind */ }
  #pumpPressure() { /* 9 bars of pressure */ }
}

const machine = new CoffeeMachine();
console.log(machine.makeEspresso()); // The user doesn't need to know how pump pressure works!
```

#### Simulating Abstract Classes in JS:
JavaScript doesn't have an `abstract` keyword. We simulate abstract classes using `new.target`:
```javascript
class AbstractDatabase {
  constructor() {
    if (new.target === AbstractDatabase) {
      throw new Error("Abstract class 'AbstractDatabase' cannot be instantiated directly!");
    }
  }

  connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }
}
```

---

## 2. Static Methods & Properties (`static`)

Static members belong to the **class itself**, not to individual instances.

```javascript
class MathUtils {
  static PI = 3.14159;

  static calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
}

// Call directly on the class without using 'new':
console.log(MathUtils.calculateHypotenuse(3, 4)); // 5
```

---

## 3. The Mixins Pattern (Multiple Inheritance Simulation)

JavaScript classes can only have **one single superclass** (`extends SingleParent`). If a class needs capabilities from multiple independent domains (e.g., `Loggable`, `Serializable`, `EventEmitter`), we use **Mixins**.

A Mixin is a standalone object or factory function containing reusable methods.

### Object Mixin Example:
```javascript
// Mixin 1: Logging capability
const canLog = {
  log(message) {
    console.log(`[${this.name || "LOG"}]: ${message}`);
  }
};

// Mixin 2: Serializable capability
const canSerialize = {
  toJSONString() {
    return JSON.stringify(this);
  }
};

class Robot {
  constructor(name) {
    this.name = name;
  }
}

// Compose mixins into Robot's prototype:
Object.assign(Robot.prototype, canLog, canSerialize);

const bot = new Robot("Atlas");
bot.log("System diagnostic completed."); // Inherited from canLog mixin!
console.log(bot.toJSONString());          // Inherited from canSerialize mixin!
```

