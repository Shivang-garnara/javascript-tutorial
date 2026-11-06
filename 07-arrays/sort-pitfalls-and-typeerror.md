# TypeError: Invalid Array.prototype.sort Argument (GeeksforGeeks Guide)

A classic JavaScript interview question and debugging scenario is understanding how `Array.prototype.sort()` works and avoiding the `TypeError: Invalid sort argument` exception.

---

## 1. How `sort()` Works by Default

By default, `Array.prototype.sort()` converts all elements into **strings** and compares their UTF-16 code unit values:
```javascript
const numbers = [10, 5, 20, 100, 2];
numbers.sort();
console.log(numbers); // [10, 100, 2, 20, 5] ❌ Alphabetical order, NOT numeric!
```

---

## 2. When Does `TypeError` Happen?

In JavaScript, `sort()` accepts an optional **compareFunction**:
`arr.sort(compareFunction)`

If you pass an argument to `sort()` that is **defined but NOT a function or `undefined`**, JavaScript throws a `TypeError`:

```javascript
const arr = [3, 1, 2];

// ❌ Passing a number instead of a function:
arr.sort(1); 
// TypeError: The comparison function must be either a function or undefined

// ❌ Passing an object:
arr.sort({});
// TypeError: The comparison function must be either a function or undefined

// ❌ Passing a boolean:
arr.sort(true);
// TypeError: The comparison function must be either a function or undefined
```

---

## 3. The Proper Compare Function Rules

A compare function must take two parameters `(a, b)` and return a number:
- If return `< 0`: `a` comes before `b`.
- If return `> 0`: `b` comes before `a`.
- If return `=== 0`: keep original order.

### A. Ascending Numeric Sort:
```javascript
const scores = [40, 100, 1, 5, 25, 10];
scores.sort((a, b) => a - b);
console.log(scores); // [1, 5, 10, 25, 40, 100] ✅
```

### B. Descending Numeric Sort:
```javascript
scores.sort((a, b) => b - a);
console.log(scores); // [100, 40, 25, 10, 5, 1] ✅
```

### C. Sorting Objects by Property:
```javascript
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

// Sort by price low-to-high:
products.sort((a, b) => a.price - b.price);
```

### D. Modern Non-Mutating Sort (`toSorted()` ES2023):
Remember that `.sort()` modifies the original array! To keep the original array unchanged:
```javascript
const original = [3, 1, 2];
const sortedCopy = original.toSorted((a, b) => a - b);
console.log(original);   // [3, 1, 2] (Preserved!)
console.log(sortedCopy); // [1, 2, 3]
```
