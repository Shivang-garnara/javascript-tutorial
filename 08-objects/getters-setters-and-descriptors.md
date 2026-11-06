# Object Getters, Setters, Property Descriptors & Object Integrity 🛡️

In JavaScript, object properties are not just simple key-value pairs. Under the hood, every property has internal attributes (called **Property Descriptors**) that control whether a property can be overwritten, looped over, or deleted.

---

## 1. Object Accessors: Getters (`get`) and Setters (`set`)

Getters and setters allow you to define methods that look and feel like standard properties from the outside, but execute custom logic on access or assignment.

### Example in Object Literals:
```javascript
const person = {
  firstName: "Shivang",
  lastName: "Garnara",

  // Getter: Computes fullName on the fly
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter: Validates or splits value when assigned
  set fullName(value) {
    const parts = value.trim().split(" ");
    if (parts.length < 2) {
      throw new Error("Full name must contain both first and last name!");
    }
    this.firstName = parts[0];
    this.lastName = parts.slice(1).join(" ");
  }
};

console.log(person.fullName); // "Shivang Garnara" (Evaluates getter!)
person.fullName = "Rahul Sharma"; // Evaluates setter!
console.log(person.firstName); // "Rahul"
```

---

## 2. Property Descriptors (`Object.defineProperty`)

A property descriptor is an object describing the configuration of a property.

### The 4 Core Attributes:
| Attribute | Type | Default with `defineProperty` | Description |
|---|---|:---:|---|
| **`value`** | Any | `undefined` | The actual data value stored |
| **`writable`** | Boolean | `false` | If `true`, the value can be changed with assignment |
| **`enumerable`** | Boolean | `false` | If `true`, property appears in `for...in` and `Object.keys()` |
| **`configurable`** | Boolean | `false` | If `true`, property can be deleted and its descriptor attributes modified |

### Syntax:
```javascript
const user = {};

Object.defineProperty(user, "id", {
  value: "USR-9901",
  writable: false,      // Read-only!
  enumerable: true,     // Visible in loops
  configurable: false   // Cannot be deleted or reconfigured!
});

user.id = "HACKED"; // Silently fails in sloppy mode; throws TypeError in strict mode!
console.log(user.id); // "USR-9901"
```

### Inspecting Descriptors:
```javascript
const descriptor = Object.getOwnPropertyDescriptor(user, "id");
console.log(descriptor);
// { value: 'USR-9901', writable: false, enumerable: true, configurable: false }
```

---

## 3. Defining Multiple Properties: `Object.defineProperties`

```javascript
const car = {};
Object.defineProperties(car, {
  brand: { value: "Tesla", writable: true, enumerable: true },
  vin: { value: "5YJSA1E28HF000000", writable: false, enumerable: true }
});
```

---

## 4. Object Integrity Levels: `preventExtensions` vs `seal` vs `freeze`

JavaScript offers 3 levels of object locking:

| Method | Can Add New Properties? | Can Delete Existing Properties? | Can Modify Existing Values? | Check Method |
|---|:---:|:---:|:---:|---|
| Normal Object | ✅ Yes | ✅ Yes | ✅ Yes | — |
| `Object.preventExtensions(obj)` | ❌ **No** | ✅ Yes | ✅ Yes | `Object.isExtensible(obj)` |
| `Object.seal(obj)` | ❌ **No** | ❌ **No** | ✅ Yes | `Object.isSealed(obj)` |
| `Object.freeze(obj)` | ❌ **No** | ❌ **No** | ❌ **No (Immutable)** | `Object.isFrozen(obj)` |

### Visualizing the Differences:
```javascript
const config = { theme: "dark", version: 1.0 };

// 1. Freeze: Full lockdown!
Object.freeze(config);
config.theme = "light"; // Fails!
config.author = "Shivang"; // Fails!
delete config.version; // Fails!

console.log(Object.isFrozen(config)); // true
```

---

## 5. ⚠️ Deep Freeze Pattern (Nested Objects Gotcha)

`Object.freeze()` is **shallow**! If your object contains nested objects, the nested properties can still be modified:

```javascript
const settings = {
  theme: "dark",
  ui: { font: "sans-serif" }
};
Object.freeze(settings);
settings.ui.font = "serif"; // ⚠️ Still changes! ui object is not frozen.
```

### How to implement a Recursive Deep Freeze:
```javascript
function deepFreeze(obj) {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === "object" && obj[prop] !== null && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

deepFreeze(settings);
// Now settings.ui is also 100% frozen!
```
