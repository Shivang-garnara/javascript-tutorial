# Higher-Order Array Methods Master Guide 🚀

Higher-order functions are functions that accept other functions as arguments and/or return functions. Modern JavaScript programming revolves heavily around array functional methods: `map()`, `filter()`, `reduce()`, and friends.

---

## 1. Mutating vs Non-Mutating Methods (Crucial Concept!)

Understanding whether a method modifies the original array in place or returns a brand-new copy is essential for avoiding bugs (especially in React & state management).

| Method | Returns | Mutates Original Array? |
|---|---|---|
| `map()`, `filter()`, `slice()`, `concat()`, `flat()`, `toSorted()` | **New Array** | ❌ **No (Immutable)** |
| `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()` | Changed array / value | ⚠️ **YES (Mutates in place!)** |

---

## 2. Core Functional Trio: `map`, `filter`, `reduce`

### A. `Array.prototype.map(callback)`
Transforms each element and returns a **new array of identical length**.
```javascript
const pricesInUSD = [10, 25, 50];
const usdToInr = 83;

const pricesInINR = pricesInUSD.map(usd => usd * usdToInr);
console.log(pricesInINR); // [830, 2075, 4150]
```

### B. `Array.prototype.filter(callback)`
Tests each element with a predicate function that returns `true` or `false`. Returns a **new array containing only elements that pass the test**.
```javascript
const users = [
  { name: "Rahul", active: true },
  { name: "Pooja", active: false },
  { name: "Amit", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ name: "Rahul", ... }, { name: "Amit", ... }]
```

### C. `Array.prototype.reduce(callback, initialValue)`
Reduces the array into a **single value** (a number, a string, an object, or another array).

```javascript
// Syntax:
array.reduce((accumulator, currentElement, index, array) => {
  return updatedAccumulator;
}, initialValue);
```

#### Example 1: Sum of an Array
```javascript
const cartPrices = [299, 599, 149];
const total = cartPrices.reduce((sum, price) => sum + price, 0);
console.log(total); // 1047
```

#### Example 2: Grouping Objects by Category (Very Common Interview Question!)
```javascript
const products = [
  { name: "MacBook", category: "Electronics" },
  { name: "T-Shirt", category: "Apparel" },
  { name: "iPhone", category: "Electronics" },
  { name: "Jeans", category: "Apparel" }
];

const grouped = products.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);
// {
//   Electronics: ["MacBook", "iPhone"],
//   Apparel: ["T-Shirt", "Jeans"]
// }
```

---

## 3. Search & Boolean Inspection Methods

### A. `find()` and `findIndex()`
- `find()`: Returns the **first element** that satisfies the condition, or `undefined`.
- `findIndex()`: Returns the **index** of the first element, or `-1`.

```javascript
const employees = [
  { id: 101, name: "Shivang" },
  { id: 102, name: "Riya" }
];

const found = employees.find(emp => emp.id === 102);
console.log(found); // { id: 102, name: "Riya" }
```

### B. `some()` and `every()`
- `some()`: Returns `true` if **at least one** item meets the condition.
- `every()`: Returns `true` only if **all items** meet the condition.

```javascript
const scores = [85, 92, 78, 64, 99];

const hasFailing = scores.some(score => score < 40); // false
const allPassed = scores.every(score => score >= 50); // true
```

---

## 4. Flattening: `flat()` and `flatMap()`

### `flat(depth)`
Flattens nested arrays into a single level:
```javascript
const nested = [1, [2, [3, 4]]];
console.log(nested.flat(1)); // [1, 2, [3, 4]]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
```

### `flatMap(callback)`
Maps each element, then automatically flattens the result by 1 level (much faster than `map().flat()`):
```javascript
const sentences = ["Hello world", "Learning JavaScript"];
const allWords = sentences.flatMap(sentence => sentence.split(" "));
console.log(allWords); // ["Hello", "world", "Learning", "JavaScript"]
```

---

## 5. Method Chaining (The Power of Modern JS)

You can chain these methods cleanly to express complex data transformations in a readable declarative pipeline:

```javascript
const orders = [
  { item: "Keyboard", price: 1500, delivered: true },
  { item: "Mouse", price: 800, delivered: false },
  { item: "Monitor", price: 12000, delivered: true },
  { item: "Cable", price: 250, delivered: true }
];

// Calculate total revenue for delivered items costing more than ₹500:
const revenue = orders
  .filter(order => order.delivered && order.price > 500)
  .map(order => order.price)
  .reduce((acc, price) => acc + price, 0);

console.log("Revenue: ₹" + revenue); // ₹13500
```
