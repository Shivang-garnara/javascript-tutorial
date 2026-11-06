# Bitwise Operators, `void`, `delete`, Comma Operator & Precedence ⚙️

While developers commonly use arithmetic and logical operators, JavaScript contains specialized operators that frequently appear in technical interviews, performance-critical code, and library internals.

---

## 1. Bitwise Operators (Binary Level Operations)

JavaScript numbers are double-precision 64-bit floats. However, when bitwise operators are applied, JavaScript automatically converts operands into **32-bit signed integers**, performs the bit operation, and converts the result back.

| Operator | Name | Description | Example (Binary) | Result |
|---|---|---|---|---|
| `&` | **AND** | `1` only if both bits are `1` | `5 & 1` (`0101 & 0001`) | `1` |
| `\|` | **OR** | `1` if either bit is `1` | `5 \| 2` (`0101 \| 0010`) | `7` |
| `^` | **XOR** | `1` if bits are different | `5 ^ 1` (`0101 ^ 0001`) | `4` |
| `~` | **NOT** | Inverts all bits (`~x = -(x + 1)`) | `~5` | `-6` |
| `<<` | **Zero-fill Left Shift** | Shifts bits left, fills with `0` (Multiplies by $2^n$) | `5 << 1` (`5 * 2`) | `10` |
| `>>` | **Signed Right Shift** | Shifts right, keeps sign bit (Divides by $2^n$) | `10 >> 1` (`10 / 2`) | `5` |
| `>>>` | **Zero-fill Right Shift** | Shifts right, fills left with `0` (Always positive) | `-5 >>> 1` | `2147483645` |

### Practical Use Cases for Bitwise in JS:
1. **Fast Even / Odd Check:**
   ```javascript
   const isEven = (num) => (num & 1) === 0;
   console.log(isEven(4)); // true
   console.log(isEven(7)); // false
   ```
2. **Fast Truncation / Math.floor for Positive Numbers:**
   ```javascript
   const floatVal = 42.87;
   console.log(floatVal | 0); // 42 (Truncates decimals)
   console.log(~~floatVal);   // 42 (Double NOT shorthand)
   ```
3. **Permission Bitmasks (Linux Style / Role-Based Access):**
   ```javascript
   const READ = 1;    // 0001
   const WRITE = 2;   // 0010
   const EXECUTE = 4; // 0100

   let userPerms = READ | WRITE; // 0011 (Read + Write)

   const canWrite = (userPerms & WRITE) !== 0; // true
   const canExecute = (userPerms & EXECUTE) !== 0; // false
   ```

---

## 2. The `void` Operator

The `void` operator evaluates any given expression and **always returns `undefined`**.

### Syntax:
```javascript
void expression;
// Or with parentheses:
void(expression);
```

### Why does `void` exist?
1. **Generating Guaranteed Pure `undefined`:**
   In older versions of JavaScript (ES3), `undefined` was a mutable global property that could accidentally be overwritten (`undefined = true;`).
   `void 0` guarantees returning the true primitive `undefined`!
   ```javascript
   console.log(void 0); // undefined
   console.log(void(100 + 50)); // undefined
   ```
2. **Preventing Page Navigation in Links:**
   ```html
   <!-- Runs JS function without jumping to top of page or navigating -->
   <a href="javascript:void(0)" onclick="openModal()">Open Profile</a>
   ```

---

## 3. The `delete` Operator

The `delete` operator removes a property from an object. If the property's value was an object and there are no other references, it is marked for garbage collection.

### Syntax:
```javascript
delete object.property;
delete object["property"];
```

### What `delete` CAN and CANNOT do:
```javascript
const user = { name: "Shivang", age: 24 };

// 1. Can delete object properties:
delete user.age; // returns true
console.log(user); // { name: "Shivang" }

// 2. CANNOT delete plain declared variables (throws in strict mode):
let score = 100;
// delete score; // SyntaxError in 'use strict' / returns false in sloppy

// 3. CANNOT delete non-configurable properties:
delete Math.PI; // returns false (Math.PI is configurable: false)
```

---

## 4. The Comma Operator (`,`)

The comma operator evaluates each of its operands from left to right and **returns the value of the final operand**.

```javascript
let x = (1, 2, 3);
console.log(x); // 3

let a = 1, b = 2;
let c = (a += 5, b *= 10, a + b); 
// a becomes 6, b becomes 20, c returns 6 + 20 = 26
console.log(c); // 26
```

### Real-World Use Case: Multiple Counter Updates in `for` loops
```javascript
for (let i = 0, j = 10; i <= j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}
```

---

## 5. JavaScript Operator Precedence Chart (Highest to Lowest)

When multiple operators appear in a single expression, precedence rules dictate which operation executes first.

| Precedence | Category | Operators | Associativity |
|:---:|---|---|---|
| **19** | Grouping | `( ... )` | n/a |
| **18** | Member Access, Call | `obj.prop`, `arr[i]`, `fn()`, `obj?.prop` | Left-to-right |
| **17** | `new` with arguments | `new Constructor()` | Right-to-left |
| **16** | Postfix Increment/Decrement | `x++`, `x--` | n/a |
| **15** | Logical NOT, Unary, `typeof`, `void`, `delete` | `!`, `~`, `+`, `-`, `typeof`, `void`, `delete` | Right-to-left |
| **14** | Exponentiation | `**` | **Right-to-left** (`2 ** 3 ** 2 = 512`) |
| **13** | Multiplication / Division / Modulo | `*`, `/`, `%` | Left-to-right |
| **12** | Addition / Subtraction | `+`, `-` | Left-to-right |
| **11** | Bitwise Shifts | `<<`, `>>`, `>>>` | Left-to-right |
| **10** | Relational / Comparison | `<`, `<=`, `>`, `>=`, `instanceof`, `in` | Left-to-right |
| **9** | Equality | `==`, `!=`, `===`, `!==` | Left-to-right |
| **8** | Bitwise AND | `&` | Left-to-right |
| **7** | Bitwise XOR | `^` | Left-to-right |
| **6** | Bitwise OR | `\|` | Left-to-right |
| **5** | Logical AND | `&&` | Left-to-right |
| **4** | Logical OR / Nullish Coalescing | `\|\|`, `??` | Left-to-right |
| **3** | Conditional (Ternary) | `? :` | Right-to-left |
| **2** | Assignments | `=`, `+=`, `-=`, `*=`, `??=`, etc. | Right-to-left |
| **1** | Comma Operator | `,` | Left-to-right |

> 💡 **Best Practice Rule:** Whenever an expression involves multiple mixed operators, **always use parentheses `()`** for readability rather than forcing teammates to memorize precedence tables!
