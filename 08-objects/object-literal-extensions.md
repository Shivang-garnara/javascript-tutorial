# Object Literal Syntax Extensions (ES6) 🛠️

ECMAScript 2015 (ES6) introduced three ergonomic extensions to object literal declarations that eliminated repetitive boilerplate code across JavaScript and modern frameworks like React.

---

## 1. Property Name Shorthand

When a property name matches the variable name whose value you are assigning, you can omit the colon and property name:

```javascript
const name = "Shivang";
const role = "Lead Engineer";
const experienceYears = 5;

// Old Way (ES5):
const devOld = {
  name: name,
  role: role,
  experienceYears: experienceYears
};

// Modern ES6 Shorthand:
const devModern = {
  name,
  role,
  experienceYears
};
```

---

## 2. Concise Method Definition Shorthand

You can omit the `: function` keyword when defining methods on object literals:

```javascript
// Old Way (ES5):
const mathOld = {
  add: function (a, b) {
    return a + b;
  }
};

// Modern ES6 Method Shorthand:
const mathModern = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
```

---

## 3. Computed Property Names (`[expression]`)

Before ES6, if an object's key was dynamic (stored in a variable or calculated from an expression), you had to create the object first, then use bracket notation on a second line:

```javascript
// Old Way (ES5):
var key = "user_" + 101;
var obj = {};
obj[key] = "Shivang";
```

With ES6 **Computed Property Names**, you evaluate any arbitrary expression directly **inside the object literal**:

```javascript
const prefix = "user";
const id = 101;

const account = {
  [prefix + "_" + id]: "Shivang",
  [`created_${Date.now()}`]: true,
  [Symbol("internalId")]: "SEC-99"
};

console.log(account["user_101"]); // "Shivang"
```

### The Standard Pattern in React Form State:
Handling 10 different input fields with 1 single generic change handler:
```javascript
function handleInputChange(event) {
  const { name, value } = event.target;
  // Dynamically updates username, email, password, etc.
  setUserForm(prev => ({
    ...prev,
    [name]: value // Computed property!
  }));
}
```
