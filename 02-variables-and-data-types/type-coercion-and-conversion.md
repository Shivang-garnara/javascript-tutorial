# Type Coercion, Type Conversion & `typeof` Master Guide ⚖️

One of the most frequently asked topics in JavaScript interviews (at Google, Meta, Amazon, and GFG) is understanding how JavaScript converts between different data types.

---

## 1. Explicit Type Conversion vs Implicit Type Coercion

- **Explicit Conversion (Type Casting):** You, the programmer, deliberately convert a value using functions like `Number()`, `String()`, `Boolean()`.
- **Implicit Coercion:** JavaScript automatically converts a type behind the scenes during an operation (like adding a string and a number).

```javascript
// Explicit:
const a = Number("42"); // 42 (number)

// Implicit:
const b = "42" - 0;     // 42 (number coerced automatically)
const c = "42" + 0;     // "420" (string concatenated!)
```

---

## 2. The `typeof` Operator & Its Famous Quirks

The `typeof` operator returns a string representing the operand's type.

| Expression | Result | Note / Quirk |
|---|---|---|
| `typeof 42` | `"number"` | Standard number |
| `typeof NaN` | `"number"` | ⚠️ "Not a Number" is still typed as number! |
| `typeof "hello"` | `"string"` | Standard string |
| `typeof true` | `"boolean"` | Boolean value |
| `typeof undefined` | `"undefined"` | Uninitialized variable |
| `typeof null` | `"object"` | 🚨 **Famous JS Bug since 1995** (kept for backwards compatibility) |
| `typeof {}` | `"object"` | Plain object |
| `typeof []` | `"object"` | Arrays are objects! Use `Array.isArray(arr)` instead |
| `typeof function(){}` | `"function"` | Functions have special callable object type |
| `typeof Symbol("id")` | `"symbol"` | ES6 Symbol primitive |
| `typeof 100n` | `"bigint"` | ES2020 BigInt |

### How to accurately check types:
```javascript
// Checking for null safely:
const isNull = (val) => val === null;

// Checking for arrays safely:
Array.isArray([1, 2, 3]); // true

// Robust universal type checker:
function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}
console.log(getType(null));        // "null"
console.log(getType([]));          // "array"
console.log(getType(new Date()));  // "date"
console.log(getType(/abc/));       // "regexp"
```

---

## 3. Truthy and Falsy Values

In JavaScript, any value can be evaluated in a boolean context (like `if (condition)`).

### The 8 Falsy Values in JavaScript:
Everything else is **truthy**!
1. `false`
2. `0` (and `-0`)
3. `0n` (BigInt zero)
4. `""` (empty string)
5. `null`
6. `undefined`
7. `NaN`
8. `document.all` (historical browser compatibility)

### ⚠️ Tricky TRUTHY Values that confuse developers:
- `"0"` (string with '0') → **Truthy!**
- `"false"` (string) → **Truthy!**
- `[]` (empty array) → **Truthy!**
- `{}` (empty object) → **Truthy!**
- `function(){}` → **Truthy!**

```javascript
if ([]) {
  console.log("Empty arrays are TRUTHY!"); // This runs!
}
```

---

## 4. Loose Equality (`==`) vs Strict Equality (`===`)

- **Strict Equality (`===`):** Compares **both value AND type**. No coercion occurs. Always prefer this!
- **Loose Equality (`==`):** Coerces operands to a common type before comparing (following complex abstract equality algorithm).

### The Classic Interview Pitfalls:
```javascript
0 == false         // true  (false coerced to 0)
"" == false        // true  ("" coerced to 0, false to 0)
"" == 0            // true
" \t\r\n " == 0    // true  (whitespace string converts to 0)

null == undefined  // true  (special rule in specification)
null === undefined // false (different types: object vs undefined)

NaN == NaN         // false! (NaN is never equal to anything, even itself)
// Check NaN using Number.isNaN(val)

[] == false        // true  ([] converts to "", "" converts to 0, false converts to 0)
[] == ![]          // true! (![] is false, [] == false is true)
```

---

## 5. Explicit Conversion Methods

### To Number:
```javascript
Number("123");       // 123
Number("123.45");    // 123.45
Number("123px");     // NaN (fails on non-digits)
parseInt("123px");   // 123 (stops at first non-digit)
parseFloat("12.5em");// 12.5
+ "42";              // 42 (unary plus shorthand)
```

### To String:
```javascript
String(123);         // "123"
String(null);        // "null"
String(undefined);   // "undefined"
(123).toString();    // "123" (fails if calling on null or undefined!)
```

### To Boolean:
```javascript
Boolean(1);          // true
Boolean(0);          // false
Boolean("hello");    // true
Boolean("");         // false
!!"hello";           // true (double negation shorthand)
```

---

## 6. Golden Rules for Safe JavaScript Coding
1. **Always use `===` and `!==`** instead of `==` and `!=`.
2. **Use `Array.isArray()`** to check arrays, never `typeof`.
3. **Use `Number.isNaN(val)`** to test for NaN, never `val === NaN`.
4. **Use `Number()` or `parseInt(str, 10)`** explicitly when processing form inputs.

