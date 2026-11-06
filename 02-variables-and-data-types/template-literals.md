# JavaScript Template Literals & Tagged Templates Guide 📝

Template literals (introduced in ES6 / ECMAScript 2015) are string literals that allow embedded expressions, multi-line formatting, and advanced tagged parsing using backticks (`` ` ``).

---

## 1. What are Template Literals?

Before ES6, string concatenation required clumsy `+` operators:
```javascript
// Old Way (ES5)
var name = "Rahul";
var age = 22;
var message = "Hello, my name is " + name + " and I am " + age + " years old.";
```

With template literals, you enclose the text inside backticks `` ` `` and inject variables directly using `${expression}`:
```javascript
// Modern Way (ES6+)
const name = "Rahul";
const age = 22;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
```

---

## 2. Key Features of Template Literals

### A. Expression Interpolation `${...}`
Inside `${...}`, you can write **any valid JavaScript expression**:
- Mathematical calculations: `${10 * 5}`
- Function calls: `${getUserName()}`
- Ternary conditions: `${isLoggedIn ? 'Welcome back!' : 'Please sign in'}`
- Object property lookups: `${user.profile.city}`

```javascript
const price = 499;
const tax = 0.18;
console.log(`Total Price: ₹${(price * (1 + tax)).toFixed(2)}`);
// Total Price: ₹588.82
```

### B. Multi-line Strings Without `\n`
Before ES6:
```javascript
var html = "<div>\n" +
           "  <h1>Title</h1>\n" +
           "</div>";
```
With template literals:
```javascript
const html = `
  <div class="card">
    <h1>Welcome</h1>
    <p>This is a multi-line HTML block directly in JS!</p>
  </div>
`;
```

### C. Escaping Backticks
If you need to include a literal backtick inside a template string, escape it with a backslash `\`:
```javascript
const str = `This contains a \`backtick\` inside.`;
```

---

## 3. Advanced Feature: Tagged Template Literals 🏷️

Tagged templates allow you to parse template literals with a custom function. The first argument is an array of string literals; the remaining arguments are the evaluated expressions.

### Syntax:
```javascript
function myTag(strings, ...values) {
  // strings: array of string pieces around the ${} interpolations
  // values: evaluated expressions passed in ${}
}

const result = myTag`Hello ${name}, you have ${count} messages.`;
```

### Real-World Use Case: Sanitizing User Input (XSS Prevention)
```javascript
function sanitize(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    let val = values[i] !== undefined ? String(values[i]) : '';
    // Escape risky characters
    val = val.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;');
    return acc + str + val;
  }, '');
}

const userInput = "<script>alert('hacked')</script>";
const safeHTML = sanitize`<div>User Comment: ${userInput}</div>`;
console.log(safeHTML);
// <div>User Comment: &lt;script&gt;alert('hacked')&lt;/script&gt;</div>
```

---

## 4. Common Mistakes & Pitfalls

| ❌ Mistake | ✅ Correct Way | Why |
|---|---|---|
| Using single quotes `'${name}'` | Use backticks `` `${name}` `` | `${}` only evaluates inside backticks |
| Nesting backticks without care | Use escaped backticks `` `... \`...\` ...` `` | Unescaped backticks close the string early |
| Expecting object inspection | `user.name` instead of `${user}` | `${user}` coerces to `"[object Object]"` |

---

## 5. Summary Cheat-Sheet
- Enclose strings in backticks: `` `hello ${name}` ``
- Any JavaScript expression fits inside `${...}`
- Multi-line strings preserve line breaks and indentation
- Tagged templates `tagFunction`\`...\`\` allow custom string processing (used heavily in styled-components, GraphQL queries, and SQL escaping)

