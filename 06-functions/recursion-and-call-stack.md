# Recursion & Call Stack Management Master Guide 🔄

A **recursive function** is a function that solves a problem by calling itself with a smaller input, until it hits a terminating condition called the **Base Case**.

---

## 1. Anatomy of Every Recursive Function

Every valid recursive function must have two components:

```javascript
function recursiveFunction(input) {
  // 1. BASE CASE: When should recursion stop?
  if (input <= 0) {
    return result;
  }

  // 2. RECURSIVE CASE: Call self with smaller input moving towards base case
  return recursiveFunction(input - 1);
}
```

If the base case is omitted or never reached, JavaScript enters an infinite loop, filling up memory until the engine crashes with:
`RangeError: Maximum call stack size exceeded` (Stack Overflow!)

---

## 2. How the Call Stack Visualizes Recursion

Consider calculating the factorial of 3 ($3! = 3 \times 2 \times 1 = 6$):

```javascript
function factorial(n) {
  if (n <= 1) return 1;       // Base case
  return n * factorial(n - 1); // Recursive case
}

factorial(3);
```

### The Call Stack Lifecycle:
```
Call Phase (Winding the stack up):
[ factorial(1) ] -> Hits base case, returns 1
[ factorial(2) ] -> Waits for factorial(1)
[ factorial(3) ] -> Waits for factorial(2)
[ Global Execution Context ]

Return Phase (Unwinding the stack down):
factorial(1) returns 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
Result: 6
```

---

## 3. Real-World Practical Recursion Use Cases

### A. Deep Traversing / Flattening Nested Objects (GFG Interview Classic)
Flattening an arbitrarily deeply nested object into dot-notation paths:
```javascript
function flattenObject(obj, prefix = "", result = {}) {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof val === "object" && val !== null && !Array.isArray(val)) {
      flattenObject(val, newKey, result); // Recursive step!
    } else {
      result[newKey] = val; // Base leaf node
    }
  }
  return result;
}

const userProfile = {
  name: "Shivang",
  contact: {
    email: "shivang@example.com",
    address: { city: "Ahmedabad", pin: 380015 }
  }
};

console.log(flattenObject(userProfile));
// {
//   'name': 'Shivang',
//   'contact.email': 'shivang@example.com',
//   'contact.address.city': 'Ahmedabad',
//   'contact.address.pin': 380015
// }
```

### B. Recursive Deep Flatten of Nested Arrays
```javascript
function deepFlatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? deepFlatten(item) : item);
  }, []);
}

console.log(deepFlatten([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
```

### C. DOM Tree Traversal
Finding all text contents inside any deeply nested DOM element:
```javascript
function getAllElementTags(element, tags = []) {
  tags.push(element.tagName);
  for (const child of element.children) {
    getAllElementTags(child, tags); // Recursively visit child nodes
  }
  return tags;
}
```

---

## 4. Preventing Stack Overflow
In V8 (Chrome/Node.js), the Call Stack can hold approximately **10,000 frames** before throwing a `RangeError`.
- For simple repetitive loops (e.g. counting to 1,000,000), use an iterative `while` or `for` loop, not recursion.
- Use recursion primarily when processing **tree structures**, **nested JSON**, or algorithms like **Binary Search**, **MergeSort**, and **Tree Traversal**.

