# Symbols, WeakMap & WeakSet Master Guide 🔐

ES6 introduced three advanced data structures and primitives to solve problems related to object property collisions, memory leaks, and garbage collection: **`Symbol`**, **`WeakMap`**, and **`WeakSet`**.

---

## 1. JavaScript `Symbol` (The Unique Primitive)

A `Symbol` is a unique and immutable primitive data type. Every `Symbol()` call is guaranteed to return a completely unique identifier, even if created with the same description!

```javascript
const id1 = Symbol("userId");
const id2 = Symbol("userId");

console.log(id1 === id2); // false! Every Symbol is globally unique.
```

### Why Use Symbols?
1. **Hidden / Non-Colliding Object Properties:**
   Symbols do not show up in standard loops like `for...in` or `Object.keys()`:
   ```javascript
   const secretId = Symbol("secretId");
   const user = {
     name: "Shivang",
     [secretId]: "SEC-88192" // Symbol property
   };

   console.log(Object.keys(user)); // ["name"] (secretId is hidden!)
   console.log(user[secretId]); // "SEC-88192" (Accessible only if you have the symbol)
   ```
2. **Global Symbol Registry (`Symbol.for`):**
   ```javascript
   const globalKey1 = Symbol.for("app.version");
   const globalKey2 = Symbol.for("app.version");
   console.log(globalKey1 === globalKey2); // true (Shared across scripts)
   ```
3. **Well-Known Symbols:**
   Built-in symbols that customize JavaScript engine behavior:
   - `Symbol.iterator`: Defines how `for...of` loops iterate over an object.
   - `Symbol.hasInstance`: Customizes `instanceof` behavior.
   - `Symbol.toPrimitive`: Customizes object type coercion to string/number.

---

## 2. WeakMap vs Map (Memory & Garbage Collection)

A `Map` holds strong references to its keys and values. If an object is used as a key in a regular `Map`, that object **cannot be garbage collected**, even if all other references to it in your program are destroyed!

A **`WeakMap`** holds **weak references** to its keys.

### Key Rules of `WeakMap`:
1. Keys **MUST be objects** (primitives like strings or numbers cannot be keys).
2. If the key object is deleted or set to `null` elsewhere, it is **automatically garbage-collected** along with its value!
3. `WeakMap` is **not enumerable**: you cannot loop over it (`no for...of`), and it has **no `.size` property** because the garbage collector can clean up entries at any moment.

### Comparison Table:

| Feature | `Map` | `WeakMap` |
|---|---|---|
| **Key Types** | Any (strings, numbers, objects, functions) | **Objects only** |
| **Garbage Collection** | Strong reference (Prevents GC) | **Weak reference (Allows GC)** |
| **Iterable?** | ✅ Yes (`.keys()`, `.values()`, `.entries()`) | ❌ No |
| **`.size` property** | ✅ Yes | ❌ No |
| **`.clear()` method** | ✅ Yes | ❌ No |

### Real-World Use Case: Attaching Metadata to DOM Elements
```javascript
// Avoid memory leaks when DOM elements are removed from the screen:
const elementClickCounts = new WeakMap();

const submitBtn = document.querySelector("#submitBtn");
elementClickCounts.set(submitBtn, { clicks: 0 });

// If submitBtn is removed from DOM (e.g., submitBtn.remove()),
// the memory allocated inside elementClickCounts is automatically freed!
```

---

## 3. WeakSet vs Set

A `WeakSet` is a collection of unique objects held weakly:
1. It can **only store objects**, not primitive values.
2. If an object stored in a `WeakSet` has no other references, it is freed by the garbage collector.
3. Not iterable; has no `.size` property.

### Real-World Use Case: Tracking Processed Objects or Instances
```javascript
const processedRequests = new WeakSet();

function handleUserRequest(reqObject) {
  if (processedRequests.has(reqObject)) {
    throw new Error("Duplicate request rejected!");
  }

  processedRequests.add(reqObject);
  // Process request...
}
```

---

## 4. Summary Guide
- Use **`Symbol`** when you need unique property keys that never collide with third-party code or libraries.
- Use **`WeakMap`** when you want to associate private data or metadata with an object or DOM node without causing memory leaks.
- Use **`WeakSet`** to tag or mark objects without preventing their garbage collection.
