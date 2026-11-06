# Destructuring, Rest & Spread Operators Master Guide 📦

Destructuring, the Spread Operator (`...`), and the Rest Parameter (`...`) are the bedrock of modern JavaScript and React development.

---

## 1. Array Destructuring

Extract values from an array into distinct variables by position.

### Basic & Advanced Syntax:
```javascript
const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

// 1. Basic matching by position:
const [red, green, blue] = colors;

// 2. Skipping items using empty commas:
const [primaryColor, , tertiaryColor] = colors; // Skips index 1!

// 3. Default values (if item is undefined):
const [bg = "#ffffff", text = "#000000"] = [];

// 4. Variable Swap without a temporary variable! (Classic Interview Trick)
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b); // 20, 10
```

---

## 2. Object Destructuring

Extract values from an object into variables matching property names.

### Basic & Advanced Syntax:
```javascript
const user = {
  id: 101,
  fullName: "Shivang Garnara",
  role: "Lead Engineer",
  location: {
    city: "Ahmedabad",
    country: "India"
  }
};

// 1. Basic destructuring:
const { id, fullName } = user;

// 2. Renaming properties during extraction (alias):
const { role: jobTitle } = user;
console.log(jobTitle); // "Lead Engineer"

// 3. Default values:
const { active = true, salary = 0 } = user;

// 4. Nested Destructuring:
const {
  location: { city, country }
} = user;
console.log(city); // "Ahmedabad"

// 5. Function Parameter Destructuring (Standard in React Components!):
function printBadge({ fullName, role }) {
  console.log(`${fullName} | ${role}`);
}
printBadge(user);
```

---

## 3. Spread Operator (`...`) — "Unpacking / Expanding"

The spread operator **expands** an iterable (array or object) into individual elements.

### A. With Arrays:
```javascript
// 1. Shallow copy array (no mutating original):
const original = [1, 2, 3];
const copy = [...original];

// 2. Concatenating / inserting in the middle:
const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];
const fullstack = [...frontend, "JavaScript", ...backend];

// 3. Passing array to functions expecting individual arguments:
const numbers = [45, 12, 89, 3];
const maxNumber = Math.max(...numbers); // 89
```

### B. With Objects:
```javascript
// 1. Shallow clone object:
const baseUser = { id: 1, role: "user" };
const cloned = { ...baseUser };

// 2. Merging & overriding properties:
const adminUpdate = {
  ...baseUser,
  role: "superadmin", // Overrides role
  grantedAt: Date.now()
};
```

---

## 4. Rest Parameter (`...`) — "Packing / Collecting"

While Spread **unpacks** elements, Rest **collects multiple elements into a single array**.

### A. In Function Parameters:
Replaces the clunky, legacy `arguments` object with a genuine JavaScript array!
```javascript
function calculateCartTotal(taxRate, ...prices) {
  // 'prices' is a real array!
  const subtotal = prices.reduce((acc, p) => acc + p, 0);
  return subtotal * (1 + taxRate);
}

console.log(calculateCartTotal(0.18, 100, 200, 300)); // (600 + 18%) = 708
```

### B. In Destructuring:
```javascript
// Collecting leftover array items:
const [head, second, ...restOfItems] = [1, 2, 3, 4, 5];
console.log(restOfItems); // [3, 4, 5]

// Omit / Remove properties safely from an object:
const sensitiveUser = { id: 55, name: "Shivang", passwordHash: "secret#99", salt: "abc" };
const { passwordHash, salt, ...safeUser } = sensitiveUser;

console.log(safeUser); // { id: 55, name: "Shivang" } (Safe to send to frontend!)
```

---

## 5. Spread vs Rest Summary

| Operator | Context | Action |
|---|---|---|
| **Spread (`...`)** | Right-hand side, function calls, inside `[...]` or `{...}` | **Unpacks** items into individual pieces |
| **Rest (`...`)** | Function parameter list or left-hand side of destructuring | **Gathers** remaining items into a single array / object |

