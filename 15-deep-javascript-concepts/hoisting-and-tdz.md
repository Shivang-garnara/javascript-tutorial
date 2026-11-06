# Hoisting & Temporal Dead Zone (TDZ) Master Guide ⏱️

Hoisting is JavaScript's default behavior of allocating memory for variable and function declarations during the compile phase before code is executed.

---

## 1. How the JavaScript Engine Executes Code

Every time JavaScript executes, it runs in **Two Phases**:

```
┌──────────────────────────────────────────────┐
│ Phase 1: Creation / Memory Allocation Phase  │
│ - Scans code for declarations               │
│ - Sets up Memory Space for variables/funcs   │
└──────────────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│ Phase 2: Execution Phase                     │
│ - Runs code line by line from top to bottom │
│ - Assigns actual values                      │
└──────────────────────────────────────────────┘
```

---

## 2. The Difference Between `var`, `let`, and `const`

| Declaration | Is it Hoisted? | Initial Value in Memory | Can Access Before Declaration? |
|---|---|---|---|
| `var` | ✅ **Yes** | `undefined` | ✅ Yes (Returns `undefined` without throwing error) |
| `let` | ✅ **Yes** | `<uninitialized>` | ❌ **No! Throws ReferenceError (TDZ)** |
| `const` | ✅ **Yes** | `<uninitialized>` | ❌ **No! Throws ReferenceError (TDZ)** |
| `function foo() {}` | ✅ **Yes** | Entire function body | ✅ Yes (Can invoke before declaration) |
| `var foo = () => {}` | ✅ **Yes** | `undefined` | ❌ **TypeError: foo is not a function** |

---

## 3. What is the Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is the time span between when a scope starts and when a `let` or `const` variable is declared and initialized.

Attempting to read or write a variable inside its TDZ throws:
`ReferenceError: Cannot access 'variableName' before initialization`

```javascript
{
  // ─── TDZ for 'score' starts here ───
  // console.log(score); // ❌ Throws ReferenceError!
  
  let score = 95; // ─── TDZ ends here ───
  console.log(score); // 95 ✅
}
```

### Contrast with `var`:
```javascript
console.log(name); // undefined (No TDZ for var, but confusing and error-prone!)
var name = "Shivang";
```

---

## 4. Function Hoisting: Declarations vs Expressions

### A. Function Declaration (Fully Hoisted)
```javascript
sayHello(); // "Hello!" ✅ (Works because entire function definition is hoisted)

function sayHello() {
  console.log("Hello!");
}
```

### B. Function Expression with `var` (Variable hoisted as undefined)
```javascript
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hi!");
};
```
**Why?** In the Creation phase, `var greet` is assigned `undefined`. At line 1, you are effectively running `undefined()`, which throws `TypeError`!

---

## 5. Classes and TDZ

Just like `let` and `const`, ES6 classes are in the Temporal Dead Zone until execution reaches the class declaration:

```javascript
const car = new Vehicle(); // ❌ ReferenceError: Cannot access 'Vehicle' before initialization

class Vehicle {}
```

---

## 6. Interview Golden Rule:
Always declare variables at the top of their scope and use `const` (or `let` when reassignment is required) to make Temporal Dead Zone bugs impossible.

