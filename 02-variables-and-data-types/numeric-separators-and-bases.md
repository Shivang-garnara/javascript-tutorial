# Numeric Separators & Number Bases (Binary, Octal, Hex) 🔢

Modern JavaScript makes dealing with large numbers and low-level number systems (binary, octal, hexadecimal) clean, readable, and error-free.

---

## 1. Numeric Separator (`_`) (ES2021)

When working with large figures (such as currency amounts, timestamps, or bytes), counting zeros is error-prone:
`const budget = 1000000000;` (Is that 100 million or 1 billion?)

Introduced in **ECMAScript 2021**, you can insert underscores (`_`) as visual digit separators:

```javascript
// Integer:
const oneBillion = 1_000_000_000;
console.log(oneBillion); // 1000000000

// Currency:
const laptopPrice = 1_25_000; // Indian grouping (1 Lakh 25 Thousand)

// Floats:
const microSeconds = 0.000_001;

// Binary & Hexadecimal:
const byteMask = 0b1010_0001;
const colorHex = 0xFF_A0_00;
```

### Syntax Rules:
- Cannot place `_` at the very start (`_100` is a variable name, not a number!)
- Cannot place `_` at the very end (`100_` throws `SyntaxError`)
- Cannot place consecutive underscores (`1__00` throws `SyntaxError`)
- Cannot place next to a decimal point (`100_.5` throws `SyntaxError`)

---

## 2. Number Bases in JavaScript

JavaScript supports 4 primary numeral systems using built-in prefix notations:

| Base | Numeral System | Prefix | Allowed Digits | Example | Decimal Equivalent |
|---|---|:---:|---|---|:---:|
| **10** | Decimal | None | `0-9` | `255` | 255 |
| **2** | **Binary** | `0b` or `0B` | `0, 1` | `0b11111111` | 255 |
| **8** | **Octal** | `0o` or `0O` | `0-7` | `0o377` | 255 |
| **16** | **Hexadecimal**| `0x` or `0X` | `0-9, A-F` | `0xFF` | 255 |

---

## 3. Parsing & Converting Between Bases

### A. String to Number (`parseInt(string, radix)`):
Always specify the radix (base) parameter as the second argument:
```javascript
console.log(parseInt("1010", 2));  // 10 (Binary to Decimal)
console.log(parseInt("755", 8));   // 493 (Octal to Decimal - Unix file permission)
console.log(parseInt("1F", 16));   // 31 (Hexadecimal to Decimal)
```

### B. Number to Custom Base String (`number.toString(radix)`):
```javascript
const value = 255;

console.log(value.toString(2));  // "11111111" (Binary string)
console.log(value.toString(8));  // "377" (Octal string)
console.log(value.toString(16)); // "ff" (Hexadecimal string)
```

