# Prototypal Inheritance & The Prototype Chain Master Guide 🧬

Unlike classical object-oriented languages (like Java, C++, or C#) which use **class-based inheritance**, JavaScript uses **prototypal inheritance**.

Every object in JavaScript has an internal link to another object called its **prototype**. When you request a property or method that does not exist on the object itself, JavaScript searches up the **Prototype Chain** until it either finds the property or reaches `null`.

---

## 1. The Prototype Chain Diagram

```
[ customUser Object ]
     │  (holds: name, email)
     ▼
[ User.prototype ]
     │  (holds: login(), logout())
     ▼
[ Object.prototype ]
     │  (holds: hasOwnProperty(), toString(), valueOf())
     ▼
   null  (End of the chain!)
```

If you call `customUser.toString()`:
1. JS checks `customUser` → Not found.
2. JS moves to `User.prototype` → Not found.
3. JS moves to `Object.prototype` → **Found!** Executes `toString()`.

---

## 2. Key Terminology Clarified

| Term | What It Is | Who Owns It |
|---|---|---|
| `Constructor.prototype` | The blueprint object that will become the prototype for instances created by `new Constructor()` | Functions / Constructors |
| `instance.__proto__` | Historical reference to the object's parent prototype (Legacy; avoid in modern code) | Every Object |
| `Object.getPrototypeOf(obj)` | The official modern standard way to inspect an object's prototype | Standard Global Object method |
| `Object.setPrototypeOf(obj, proto)`| Dynamically sets an object's prototype | Standard Global Object method |

---

## 3. Implementing Prototypal Inheritance: 3 Ways

### Method 1: Using `Object.create(proto)` (Pure Prototype Delegation)
The cleanest, most direct expression of prototypal inheritance:
```javascript
const animal = {
  makeSound() {
    console.log(`${this.name} makes a noise.`);
  }
};

const dog = Object.create(animal);
dog.name = "Rocky";
dog.bark = function () {
  console.log("Woof woof!");
};

dog.bark();      // "Woof woof!" (Own method)
dog.makeSound(); // "Rocky makes a noise." (Inherited from animal!)
```

### Method 2: Constructor Function & `.prototype` (Pre-ES6 Standard)
```javascript
function Person(name, role) {
  this.name = name;
  this.role = role;
}

// Attach shared methods to the prototype to save RAM:
Person.prototype.introduce = function () {
  return `Hi, I am ${this.name}, working as ${this.role}.`;
};

const dev = new Person("Shivang", "Software Engineer");
console.log(dev.introduce());
```

### Method 3: ES6 `class` Syntax (Modern Syntactic Sugar)
Under the hood, JavaScript classes still use prototypal inheritance!
```javascript
class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  // Under the hood, this is attached to Person.prototype!
  introduce() {
    return `Hi, I am ${this.name}, working as ${this.role}.`;
  }
}
```

---

## 4. `hasOwnProperty()` vs The `in` Operator

- **`in` Operator:** Checks if property exists on the object **OR anywhere in its prototype chain**:
  `"toString" in dog; // true`
- **`Object.hasOwn(obj, prop)` (ES2022) / `obj.hasOwnProperty(prop)`:** Checks if property is an **own property** (not inherited):
  `Object.hasOwn(dog, "name"); // true`
  `Object.hasOwn(dog, "toString"); // false (inherited)`

---

## 5. Prototype-Free Dictionary (`Object.create(null)`)

In security-sensitive applications, creating an object with no prototype protects against prototype pollution:
```javascript
const secureMap = Object.create(null);
console.log(secureMap.toString); // undefined (No prototype chain at all!)
```

