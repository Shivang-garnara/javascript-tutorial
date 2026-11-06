# JavaScript Unit Testing Fundamentals (Jest Standards) 🧪

Unit testing verifies that individual functions, classes, and modules produce expected outputs for given inputs before code reaches production.

---

## 1. Anatomy of a Test Suite (Jest / Vitest Standard)

Modern JavaScript test frameworks (Jest, Vitest, Mocha) share a standardized BDD (Behavior-Driven Development) vocabulary:

```javascript
// MathUtils.test.js
describe("Math Operations", () => {
  // Test Case 1:
  test("adds 2 + 3 to equal 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  // Test Case 2:
  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero");
  });
});
```

- **`describe(name, fn)`**: Groups related tests together into a test suite.
- **`test(name, fn)` / `it(name, fn)`**: Defines an individual test case.
- **`expect(actual)`**: Creates an assertion on the actual result.

---

## 2. Most Frequently Used Matchers

| Matcher | Meaning | Example |
|---|---|---|
| `.toBe(val)` | Strict equality (`===`) for primitives | `expect(sum(1, 2)).toBe(3)` |
| `.toEqual(val)` | Deep value equality for objects & arrays | `expect(getUser()).toEqual({ id: 1 })` |
| `.toBeNull()` | Checks if value is strictly `null` | `expect(val).toBeNull()` |
| `.toBeDefined()` | Checks if value is not `undefined` | `expect(token).toBeDefined()` |
| `.toBeTruthy()` | Evaluates truthiness in boolean context | `expect(items.length).toBeTruthy()` |
| `.toContain(item)` | Checks if array or string contains element | `expect(roles).toContain("admin")` |
| `.toThrow(err)` | Verifies that a function throws an exception | `expect(() => badFn()).toThrow()` |

---

## 3. How Testing Works Under the Hood: Zero-Dependency Mini-Jest

You don't need `npm install jest` to understand testing. Here is how an assertion runner is constructed in vanilla JavaScript:

```javascript
// Lightweight pure-JS test runner:
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected [${expected}] but received [${actual}]`);
      }
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Deep equality check failed`);
      }
    }
  };
}

function test(description, testFn) {
  try {
    testFn();
    console.log(`✅ PASS: ${description}`);
  } catch (err) {
    console.error(`❌ FAIL: ${description}`);
    console.error(`   ${err.message}`);
  }
}

// Running unit tests:
test("Capitalizes first character", () => {
  expect(capitalize("shivang")).toBe("Shivang");
});
```
