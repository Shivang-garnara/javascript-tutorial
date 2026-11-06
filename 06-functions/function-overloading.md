# Function Overloading in JavaScript (GeeksforGeeks Guide)

In languages like C++ or Java, **Function Overloading** means defining multiple functions with the **exact same name** but different parameter types or parameter counts.

---

## 1. Does JavaScript Support Function Overloading?

> ❌ **NO.** JavaScript does **not** natively support function overloading.

If you write two functions with the same name in JavaScript:
```javascript
function greet() {
  console.log("Hello!");
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet(); // Prints: "Hello, undefined!" (NOT "Hello!")
```
**Why?** In JavaScript, functions are first-class objects. The second `greet` declaration simply **overwrites** the first one during execution!

---

## 2. How to Simulate Function Overloading in JavaScript (GFG Patterns)

Developers use 3 proven patterns to achieve function overloading:

### Pattern A: Checking Arguments Count (`arguments.length` or `rest parameters`)
```javascript
function calculateArea(...args) {
  if (args.length === 1) {
    // Circle: calculateArea(radius)
    const [radius] = args;
    return Math.PI * radius * radius;
  } else if (args.length === 2) {
    // Rectangle: calculateArea(width, height)
    const [width, height] = args;
    return width * height;
  } else if (args.length === 3) {
    // Triangle: calculateArea(base, height, "triangle")
    const [base, height] = args;
    return 0.5 * base * height;
  }
  throw new Error("Invalid number of arguments!");
}

console.log("Circle area (r=5):", calculateArea(5).toFixed(2));     // 78.54
console.log("Rectangle area (5x10):", calculateArea(5, 10));        // 50
```

### Pattern B: Checking Argument Types (`typeof`)
```javascript
function printInfo(data) {
  if (typeof data === "string") {
    console.log(`String received: "${data.toUpperCase()}"`);
  } else if (typeof data === "number") {
    console.log(`Number received: $${data.toFixed(2)}`);
  } else if (Array.isArray(data)) {
    console.log(`Array with ${data.length} items`);
  }
}

printInfo("javascript"); // String received: "JAVASCRIPT"
printInfo(49.9);         // Number received: $49.90
printInfo([1, 2, 3]);    // Array with 3 items
```

### Pattern C: Configuration Object Pattern (Modern Best Practice)
Instead of relying on argument count, pass a configuration object:
```javascript
function createUser({ name, email, age = 18, role = "User" }) {
  return { name, email, age, role };
}

// Highly readable and flexible calls:
const u1 = createUser({ name: "Shivang", email: "s@test.com" });
const u2 = createUser({ name: "Aarav", email: "a@test.com", role: "Admin" });
```
