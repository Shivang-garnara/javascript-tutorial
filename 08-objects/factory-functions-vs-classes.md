# Factory Functions vs. Constructors vs. ES6 Classes 🏭

In JavaScript, there are 3 primary patterns for producing multiple objects of the same shape: **Factory Functions**, **Constructor Functions**, and **ES6 Classes**.

---

## 1. What is a Factory Function?

A **Factory Function** is any plain JavaScript function that constructs and returns a new object **without requiring the `new` keyword**.

```javascript
function createUser(name, role) {
  // Private variable via closure:
  const createdAt = Date.now();

  return {
    name,
    role,
    getProfile() {
      return `${name} (${role}) - Member since: ${new Date(createdAt).toLocaleDateString()}`;
    }
  };
}

const user = createUser("Shivang", "Engineer"); // No 'new' required!
console.log(user.getProfile());
```

---

## 2. Comparison Matrix

| Feature | Factory Function | Constructor Function (`function User`) | ES6 `class` Syntax |
|---|---|---|---|
| **Requires `new`?** | ❌ **No** | ✅ Yes (`new User()`) | ✅ Yes (`new User()`) |
| **`this` Dependency** | ❌ Minimal / None (uses closures) | ⚠️ High (`this.name = ...`) | ⚠️ High (`this.name = ...`) |
| **Private State** | 🔒 Natural via closures | Complex | 🔒 Built-in `#privateField` |
| **Memory Efficiency** | Creates method copies per instance (unless shared) | ⚡ High (Shared on `.prototype`) | ⚡ High (Shared on `.prototype`) |
| **Type Checking** | `instanceof` fails (just plain object) | `user instanceof User` works | `user instanceof User` works |
| **Inheritance Model** | Object Composition (`Object.assign`) | Prototypal (`User.prototype`) | Classical `extends` keyword |

---

## 3. When to Choose Factory Functions
- When you want to **avoid `this` bugs** (e.g., passing methods into event handlers or `setTimeout` without needing `.bind()`).
- When you favor **Composition over Inheritance** (building objects from smaller functional mixins rather than deep multi-level class hierarchies).
- When creating lightweight stateful stores (like Redux or Zustand store creators).

---

## 4. When to Choose ES6 Classes
- When creating **thousands or millions of instances** (saving RAM by sharing methods on `.prototype`).
- When building frameworks or libraries with established OOP hierarchies (like Angular, NestJS, or Game Engines).

