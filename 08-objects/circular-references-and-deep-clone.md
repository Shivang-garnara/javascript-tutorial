# Circular References & Deep Cloning in JavaScript 🔄

A **circular reference** occurs when an object references itself directly or indirectly through a chain of properties.

```javascript
const person = { name: "Shivang" };
person.myself = person; // Circular reference!
```

---

## 1. The Classic `JSON.stringify` Crash

The most common way developers attempt to deep clone an object is:
```javascript
const clone = JSON.parse(JSON.stringify(obj));
```

### The Pitfall:
If the object contains circular references, `JSON.stringify()` runs into an infinite loop and crashes your application:
```javascript
const parent = { name: "Parent" };
const child = { name: "Child", parent: parent };
parent.child = child; // Circular link!

JSON.stringify(parent);
// ❌ TypeError: Converting circular structure to JSON
```

### Other Flaws of `JSON.stringify` Cloning:
- Loses `Date` objects (converts them to strings).
- Silently deletes `undefined`, `Symbol`, and `Function` properties.
- Converts `Map` and `Set` to empty objects `{}`.
- Converts `NaN` and `Infinity` to `null`.

---

## 2. Solution 1: The Modern Standard `structuredClone()` (ES2022)

All modern browsers and Node.js (v17+) now include a built-in global function called **`structuredClone()`**:

```javascript
const original = { name: "Shivang" };
original.self = original; // Circular reference

// Clones circular references and preserves types flawlessly!
const cloned = structuredClone(original);

console.log(cloned.name); // "Shivang"
console.log(cloned.self === cloned); // true (Points to cloned self, not original!)
console.log(cloned === original); // false (Brand new object in memory!)
```

### What `structuredClone()` supports:
- Circular references ✅
- `Date`, `RegExp`, `Map`, `Set` ✅
- `ArrayBuffer`, `TypedArray` ✅
- `Blob`, `File` ✅

*(Note: It does not clone functions or DOM elements, which are inherently un-cloneable).*

---

## 3. Solution 2: Custom JSON Serializer with `WeakSet` (For Stringifying)

If you need to convert a circular object to a JSON string (e.g., to send over a network or print to console), pass a custom replacer function using a `WeakSet`:

```javascript
function safeStringify(obj, indent = 2) {
  const seen = new WeakSet();

  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular Reference]"; // Replace cycle with placeholder!
      }
      seen.add(value);
    }
    return value;
  }, indent);
}

console.log(safeStringify(parent));
// {
//   "name": "Parent",
//   "child": {
//     "name": "Child",
//     "parent": "[Circular Reference]"
//   }
// }
```

---

## 4. Shallow Copy vs Deep Copy Quick Reference

| Feature | Shallow Copy (`{...obj}`, `Object.assign`) | Deep Copy (`structuredClone(obj)`) |
|---|---|---|
| First-level properties | Copied by value | Copied by value |
| Nested objects / arrays | Copied **by reference** (shared memory!) | Copied **recursively** (new memory!) |
| Circular references | Works (maintains pointer) | Works (creates new cyclical graph) |
| Performance | Instant ($\mathcal{O}(1)$) | Proportional to object depth ($\mathcal{O}(N)$) |
