# Promise Combinators Master Guide: `all`, `allSettled`, `race`, `any` ⚡

When building modern web apps, you frequently fire multiple asynchronous API requests in parallel. JavaScript provides 4 built-in **Promise Combinators** to handle concurrency.

---

## 1. Quick Comparison Matrix (Essential Interview Guide)

| Combinator | Introduced | Resolves When... | Rejects When... | Ideal Use Case |
|---|---|---|---|---|
| `Promise.all()` | ES2015 (ES6) | **All** promises fulfill successfully | **Any single** promise rejects (Fail-Fast!) | Dependent data requirements (e.g., loading user profile + permissions together) |
| `Promise.allSettled()` | ES2020 | **All** promises finish (settle), regardless of pass or fail | **Never rejects!** Always resolves with status array | Independent tasks (e.g., uploading 5 avatars, send email notifications) |
| `Promise.race()` | ES2015 (ES6) | The **first** promise settles (fulfills OR rejects) | The **first** promise settles (if it rejected) | Implementing API request timeout abort controllers |
| `Promise.any()` | ES2021 | The **first** promise to **fulfill (succeed)** | **All** promises reject (returns `AggregateError`) | Fastest mirror/CDN lookup (e.g., download file from 3 replica servers) |

---

## 2. `Promise.all()` — The "All or Nothing" Combinator

Runs an array of promises concurrently. Returns an array of resolved values in the same order.
⚠️ **Gotcha:** If even 1 promise fails, the entire batch rejects immediately, ignoring all successful promises!

```javascript
const fetchUsers = fetch("/api/users").then(r => r.json());
const fetchProducts = fetch("/api/products").then(r => r.json());

Promise.all([fetchUsers, fetchProducts])
  .then(([users, products]) => {
    console.log("Both succeeded!", users, products);
  })
  .catch(err => {
    console.error("One of them failed! Aborting entire view:", err);
  });
```

---

## 3. `Promise.allSettled()` — The Resilient Batch Combinator

Added in ES2020. It **never fails**. It waits for every promise to either resolve or reject, then returns an array of result objects:
- If fulfilled: `{ status: "fulfilled", value: result }`
- If rejected: `{ status: "rejected", reason: error }`

```javascript
const apiCalls = [
  fetch("/api/serviceA"),
  fetch("/broken-endpoint"), // Will fail!
  fetch("/api/serviceB")
];

const results = await Promise.allSettled(apiCalls);

results.forEach((res, index) => {
  if (res.status === "fulfilled") {
    console.log(`Service #${index + 1} succeeded:`, res.value);
  } else {
    console.warn(`Service #${index + 1} failed:`, res.reason);
  }
});
```

---

## 4. `Promise.race()` — The Speed Contest (Resolves or Rejects First)

Settles as soon as the **first promise settles** (either fulfills OR rejects).

### Real-World Pattern: API Timeout Shield
Prevent your application from hanging indefinitely when an API is slow:
```javascript
function timeout(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms);
  });
}

const fetchData = fetch("https://slow-api.example.com/data");

// Race the fetch against a 3-second timeout timer:
Promise.race([fetchData, timeout(3000)])
  .then(res => res.json())
  .catch(err => console.error("Request failed or timed out:", err.message));
```

---

## 5. `Promise.any()` — The First Success (Ignores Failures)

Added in ES2021. It looks for the **first successful fulfillment**. If other promises reject before a success occurs, `Promise.any` ignores them and keeps waiting.

If every single promise rejects, it rejects with a special `AggregateError` grouping all errors:
```javascript
const mirrorA = fetch("https://cdn1.example.com/photo.jpg");
const mirrorB = fetch("https://cdn2.example.com/photo.jpg");
const mirrorC = fetch("https://backup.example.com/photo.jpg");

try {
  // Grab the image from whichever CDN server responds first successfully!
  const fastestImage = await Promise.any([mirrorA, mirrorB, mirrorC]);
  console.log("Loaded image from fastest mirror:", fastestImage.url);
} catch (aggregateErr) {
  console.error("All 3 CDN mirrors were down!", aggregateErr.errors);
}
```

---

## 6. Summary: Which One Should You Pick?

```
Do all tasks MUST succeed for the screen to render?
├── YES ────────► Promise.all()
└── NO
    ├── Do you need results of all tasks, even failed ones?
    │   └── YES ──► Promise.allSettled()
    └── Do you only need ONE result?
        ├── Do you want the first SUCCESSFUL result? ──► Promise.any()
        └── Do you want the first settled (even timeout)? ─► Promise.race()
```

