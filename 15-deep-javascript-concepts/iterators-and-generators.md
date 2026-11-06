# Iterators & Generators Master Guide (`function*`, `yield`) 🔄

JavaScript Iterators and Generators allow custom iteration logic, lazy evaluation, and the ability to pause and resume function execution on demand.

---

## 1. The Iteration Protocols

JavaScript defines two formal protocols:

### A. The Iterable Protocol
An object is **iterable** if it has a method whose key is `Symbol.iterator`:
```javascript
const obj = {
  [Symbol.iterator]() {
    // Returns an iterator
  }
};
```
Built-in iterables include: `Array`, `String`, `Map`, `Set`, `TypedArray`, `arguments`, and DOM `NodeList`.

### B. The Iterator Protocol
An iterator is an object that implements a `next()` method returning:
`{ value: currentItem, done: boolean }`

---

## 2. Generator Functions (`function*`) and `yield`

Writing manual iterators with `Symbol.iterator` requires boilerplate state management. **Generators** provide syntax to write iterators cleanly!

### Key Characteristics:
- Declared with an asterisk: `function* myGenerator() { ... }`
- Calling a generator does **not** execute its body immediately; it returns a **Generator Object** (which is an iterator).
- The `yield` keyword pauses function execution and returns a value to the caller.
- Calling `.next()` resumes execution until the next `yield` or `return`.

```javascript
function* numberSequence() {
  console.log("Starting generator...");
  yield 1;
  console.log("Resuming to next yield...");
  yield 2;
  yield 3;
}

const gen = numberSequence();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

---

## 3. Real-World Use Cases for Generators

### A. Infinite ID Generator (Lazy Evaluation without Memory Limits)
Because generators compute values only when requested, they can safely produce infinite sequences without locking the browser:
```javascript
function* idGenerator(prefix = "ID") {
  let counter = 1;
  while (true) {
    yield `${prefix}_${counter++}`;
  }
}

const userIds = idGenerator("USR");
console.log(userIds.next().value); // "USR_1"
console.log(userIds.next().value); // "USR_2"
console.log(userIds.next().value); // "USR_3"
```

### B. Lazy Fibonacci Series Generator
```javascript
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const fib = fibonacci();
for (let i = 0; i < 7; i++) {
  console.log(fib.next().value); // 1, 1, 2, 3, 5, 8, 13
}
```

### C. Generator Delegation with `yield*`
A generator can delegate iteration to another generator or iterable using `yield*`:
```javascript
function* frontendSkills() {
  yield "HTML";
  yield "CSS";
  yield "JavaScript";
}

function* fullstackSkills() {
  yield* frontendSkills(); // Delegating to another generator!
  yield "Node.js";
  yield "Express";
}

for (const skill of fullstackSkills()) {
  console.log(skill); // Prints HTML, CSS, JavaScript, Node.js, Express
}
```

---

## 4. Async Generators & `for await...of` (ES2018)

Async generators combine async/await with generators to process streaming data or paginated APIs:
```javascript
async function* fetchPaginatedUsers(totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    const res = await fetch(`https://api.example.com/users?page=${page}`);
    yield await res.json();
  }
}

// Consuming with for await...of:
async function displayAll() {
  for await (const userBatch of fetchPaginatedUsers(3)) {
    console.log("Fetched page of users:", userBatch);
  }
}
```

