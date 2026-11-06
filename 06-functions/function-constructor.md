# The `Function()` Constructor in JavaScript 🛠️

JavaScript allows creating functions dynamically at runtime using the built-in `Function` constructor:

```javascript
const add = new Function("a", "b", "return a + b;");
console.log(add(10, 20)); // 30
```

---

## 1. Syntax

```javascript
new Function([arg1, arg2, ...argN], functionBodyString);
```
- The last argument is always the string of the function body.
- Preceding arguments are the parameter names as strings.

---

## 2. Crucial Difference: `new Function()` vs `eval()`

Both parse and execute strings of JavaScript code dynamically. However, their scoping rules are fundamentally different:

| Feature | `eval()` | `new Function()` |
|---|---|---|
| **Scope Access** | Executes in the **current local scope** (can read/mutate local closure variables) | Always executes in the **global scope** (cannot access local closure variables) |
| **Performance** | Severely disables V8 engine optimizations | Slightly faster than `eval` because it creates isolated global functions |
| **Security Risk** | 🚨 Extreme (XSS vulnerability) | 🚨 Extreme (XSS vulnerability) |

### Scope Isolation Example:
```javascript
function testScope() {
  const localSecret = "LOCAL_PASSWORD";

  // eval can access local variables:
  eval("console.log('eval can see:', localSecret)"); // "LOCAL_PASSWORD"

  // new Function CANNOT see local variables:
  const dynamicFn = new Function("console.log(typeof localSecret)");
  dynamicFn(); // "undefined"! (Looks only in global scope)
}

testScope();
```

---

## 3. Real-World Use Case: Dynamic Template Engines

Template engines (like EJS, Handlebars, or Lodash templates) compile string templates into ultra-fast JavaScript functions using `new Function`:

```javascript
function compileTemplate(templateString) {
  // Turn "Hello <%= name %>" into return statement
  const body = `return \`${templateString.replace(/<%=\s*(\w+)\s*%>/g, "${data.$1}")}\`;`;
  return new Function("data", body);
}

const render = compileTemplate("Welcome, <%= username %>! You have <%= credits %> points.");
console.log(render({ username: "Shivang", credits: 250 }));
// "Welcome, Shivang! You have 250 points."
```

---

## 4. Security Warning: Never Pass Untrusted User Input
Never pass user-submitted strings from web forms, query parameters, or chat inputs to `new Function()` or `eval()`, as attackers can inject malicious code to steal session cookies and access user accounts.
