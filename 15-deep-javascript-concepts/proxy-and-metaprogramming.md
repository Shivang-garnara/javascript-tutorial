# JavaScript Metaprogramming: Proxy & Reflect (W3Schools)

**Metaprogramming** means writing programs that read, manipulate, or alter the fundamental behavior of other programs or language mechanics themselves.

In modern JavaScript, metaprogramming is unlocked using two built-in objects:
- **`Proxy`**: Wraps an object and intercepts ("traps") core operations like property lookup, assignment, enumeration, and function calls.
- **`Reflect`**: Provides default methods for intercepted operations.

---

## 1. Why Do We Need Proxies?
Proxies are the secret foundation of modern web frameworks:
- **Vue 3 Reactivity:** Vue uses Proxies to detect whenever you change a variable and automatically update the HTML on the screen!
- **Data Validation:** Validate property types before saving.
- **Default Fallbacks:** Provide default values for missing properties.
- **Logging / Profiling:** Log access to specific objects.

---

## 2. Basic Syntax

```javascript
const target = { name: "Shivang", age: 24 };

const handler = {
  // Trap for reading properties
  get(target, property, receiver) {
    if (property in target) {
      return Reflect.get(target, property, receiver);
    }
    return `Property "${property}" does not exist!`;
  },

  // Trap for writing properties
  set(target, property, value, receiver) {
    if (property === "age") {
      if (typeof value !== "number" || value < 0) {
        throw new TypeError("Age must be a positive number!");
      }
    }
    return Reflect.set(target, property, value, receiver);
  }
};

const proxyUser = new Proxy(target, handler);
```

---

## 3. Real-World Demonstrations

### A. Real-Time Data Validation
```javascript
const account = new Proxy({}, {
  set(target, prop, val) {
    if (prop === "balance" && val < 0) {
      throw new Error("Balance cannot be negative!");
    }
    target[prop] = val;
    return true;
  }
});

account.balance = 100; // ✅ Works
account.balance = -50; // ❌ Throws: Balance cannot be negative!
```

### B. Building a Reactive UI State (Mini Vue 3 Engine)
```javascript
function makeReactive(state, onStateChange) {
  return new Proxy(state, {
    set(target, key, value) {
      target[key] = value;
      onStateChange(key, value); // Triggers UI re-render!
      return true;
    }
  });
}

const appState = makeReactive({ likes: 0 }, (key, value) => {
  console.log(`State changed! ${key} is now ${value}. Re-rendering screen...`);
});

appState.likes = 1; // Logs: "State changed! likes is now 1. Re-rendering screen..."
```

---

## 4. Key Traps Available on `Proxy`
- `get(target, prop)`: Intercepts `obj.prop`.
- `set(target, prop, val)`: Intercepts `obj.prop = val`.
- `has(target, prop)`: Intercepts `'prop' in obj`.
- `deleteProperty(target, prop)`: Intercepts `delete obj.prop`.
- `apply(target, thisArg, argumentsList)`: Intercepts function execution `func()`.
