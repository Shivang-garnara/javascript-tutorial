# Primitive vs. Reference Values & The Memory Model 🧠

One of the most foundational concepts in JavaScript is understanding how different data types are stored in memory and how they behave when assigned or passed into functions.

---

## 1. Stack Memory vs. Heap Memory

JavaScript engines (like V8) divide computer memory into two distinct regions:

```
┌───────────────────────────────────────┐
│             STACK MEMORY              │
│  - Fast, fixed-size memory            │
│  - Stores Primitive values directly   │
│  - Stores Reference pointers          │
│                                       │
│  age = 24                             │
│  isLoggedIn = true                    │
│  userPtr ─────────┐                   │
└───────────────────┼───────────────────┘
                    │ Points to Heap address
                    ▼
┌───────────────────────────────────────┐
│              HEAP MEMORY              │
│  - Dynamic, flexible-size memory      │
│  - Stores Objects, Arrays, Functions  │
│                                       │
│  { name: "Shivang", role: "Dev" }     │
└───────────────────────────────────────┘
```

---

## 2. Primitive Values (Stored by Value on the Stack)

JavaScript has **7 Primitive Types**:
`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

- Primitives are **immutable** (their actual memory value cannot be altered; variable reassignment creates a fresh value).
- When you assign one primitive to another, JavaScript creates a **completely independent copy of the value**:

```javascript
let x = 10;
let y = x; // y gets a copy of 10

y = 20; // Changing y does NOT affect x!
console.log(x); // 10
console.log(y); // 20
```

---

## 3. Reference Values (Stored by Reference on the Heap)

Objects (including Arrays, Functions, and Dates) are **Reference Types**.

- The variable does **not** store the actual object data directly on the stack.
- The variable stores only a **memory address (pointer)** that points to where the object lives on the **Heap**.
- When you assign an object variable to another, you copy only the **pointer**, not the object itself!

```javascript
const userA = { name: "Shivang" };
const userB = userA; // userB now points to the SAME object on the Heap!

userB.name = "Rahul";
console.log(userA.name); // "Rahul"! (Mutating userB also mutated userA)
```

---

## 4. Does JavaScript Have "Pass-by-Reference"?

> 🚨 **Classic Interview Question:** *"Is JavaScript Pass-by-Value or Pass-by-Reference?"*
>
> **The Accurate Answer:** **JavaScript is ALWAYS strictly Pass-by-Value!**

However, when an object is passed into a function, the **"value" being passed is the memory reference address itself** (sometimes called *Call-by-Sharing*).

### What this means in practice:

#### A. Mutating an object property inside a function mutates the original:
```javascript
function updateRole(profile) {
  profile.role = "Senior Architect"; // Mutates shared heap object!
}

const developer = { name: "Shivang", role: "Developer" };
updateRole(developer);
console.log(developer.role); // "Senior Architect"
```

#### B. Reassigning the parameter variable does NOT affect the original:
```javascript
function replaceObject(obj) {
  obj = { name: "Different Person" }; // Rebinds local parameter pointer!
}

const originalPerson = { name: "Shivang" };
replaceObject(originalPerson);
console.log(originalPerson.name); // Still "Shivang"! (Original was not replaced)
```
If JavaScript had true Pass-by-Reference (like C++ `&ref`), `originalPerson` would have been replaced. Because JavaScript is pass-by-value, only the local parameter reference was reassigned.

---

## 5. Summary Cheat-Sheet

| Feature | Primitive Values | Reference Values (Objects/Arrays) |
|---|---|---|
| **Storage Location** | Stack | Heap (Pointer on Stack) |
| **Size in Memory** | Fixed | Dynamic / Variable |
| **Copied By** | **Value** (Independent copy) | **Reference** (Shared memory pointer) |
| **Mutability** | Immutable | Mutable |
| **Equality (`===`)** | Compares **actual values** | Compares **memory reference addresses** |
