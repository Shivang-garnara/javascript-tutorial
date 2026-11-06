# JavaScript Closures Deep Dive 🧠

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In JavaScript, closures are created every time a function is created, at function creation time.

Simply put: **A closure gives an inner function access to an outer function's scope, even AFTER the outer function has finished executing and returned!**

---

## 1. How Closures Work Under the Hood

In many programming languages, local variables inside a function exist only while that function is executing. When the function returns, its stack frame is destroyed.

In JavaScript, if an inner function maintains a reference to a variable from its outer scope, the JavaScript engine moves that variable from the call stack to the **garbage-collected memory heap**.

```javascript
function outer() {
  const secret = 42; // Saved to Heap memory

  return function inner() {
    console.log(secret); // Retains reference to 'secret'
  };
}

const myClosure = outer(); // outer() has finished and returned!
myClosure(); // Prints: 42 (secret is still alive!)
```

---

## 2. The 4 Essential Real-World Closure Patterns

### Pattern 1: Data Privacy & Encapsulation
JavaScript lacked private class fields for decades. Closures were the standard way to protect sensitive data:
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private! Cannot be touched directly from outside

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient balance";
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
console.log(account.balance); // undefined! (100% private)
```

### Pattern 2: Function Factories
Generate specialized functions from a single template:
```javascript
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Pattern 3: Memoization (Caching Expensive Operations)
```javascript
function memoize(fn) {
  const cache = {}; // Preserved across calls by closure

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key]; // Return cached result instantly!
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = memoize((n) => {
  // Heavy computation simulation
  return n * n;
});
```

### Pattern 4: The Infamous Interview Loop Gotcha (`var` vs `let`)

#### The Broken Code (Frequently asked in interviews):
```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Prints: 4, 4, 4! (Why? 'var' is function-scoped; all 3 timeouts share the SAME 'i'!)
```

#### Fix 1: Use `let` (Block Scope creates a new closure for each iteration):
```javascript
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i); // Prints: 1, 2, 3 ✅
  }, 1000);
}
```

#### Fix 2: Use an IIFE closure (Classic ES5 solution):
```javascript
for (var i = 1; i <= 3; i++) {
  (function (capturedI) {
    setTimeout(function () {
      console.log(capturedI); // Prints: 1, 2, 3 ✅
    }, 1000);
  })(i);
}
```

---

## 3. Potential Downside: Memory Leaks

Because closures retain references to outer variables, those variables cannot be garbage collected as long as the closure exists.
- If a closure references a giant DOM element or 50MB array that is no longer needed, null out references when done (`largeData = null`).
