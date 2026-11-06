# Level 12 — Asynchronous JavaScript

---

### A. Topic
- **Roadmap Location:** Level 12 (Topics 1 to 14)
- **Topics Covered:**
  1. Synchronous vs Asynchronous execution
  2. Callbacks and "Callback Hell"
  3. Promises & states (`pending`, `fulfilled`, `rejected`)
  4. `.then()`, `.catch()`, `.finally()`
  5. Modern `async` and `await` syntax
  6. Robust error handling with `try...catch`
  7. Promise concurrency: `Promise.all()`, `Promise.allSettled()`, `Promise.race()`
  8. Behind the scenes: Event Loop, Call Stack, Task Queue, Microtask Queue

---

### B. Simple Explanation

#### 1. Synchronous vs Asynchronous
- **Synchronous:** Instructions execute one line at a time in strict order. If a task takes 5 seconds (like downloading an image), the entire browser freezes and waits.
- **Asynchronous:** Long-running tasks run in the background. JavaScript continues executing other code immediately, and handles the result when the background task finishes!

#### 2. What is a Promise?
A **Promise** is a placeholder for a value that is not available yet, but will be resolved in the future (or fail with an error).
Think of ordering food at a restaurant:
1. You place an order and get a receipt (Promise is **Pending**).
2. Food arrives: Your receipt is honored (Promise is **Fulfilled**).
3. Kitchen runs out of food: You are informed of failure (Promise is **Rejected**).

#### 3. `async` / `await`
`async/await` is modern syntactic sugar on top of Promises that allows you to write asynchronous code that reads cleanly like synchronous code!

---

### C. Why Do We Need Async JS?
Web applications constantly communicate over networks (fetching posts, saving settings, uploading photos). Because network calls take variable time, asynchronous code prevents freezing the user interface.

---

### D. Syntax

```javascript
// Function returning a Promise
const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) resolve({ id: userId, name: "Shivang" });
      else reject(new Error("Invalid User ID"));
    }, 1000);
  });
};

// Consuming with async / await
async function displayUser() {
  try {
    const user = await fetchUserData(1);
    console.log("Loaded user:", user.name);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  } finally {
    console.log("Loading completed.");
  }
}
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runSteps() {
  console.log("Step 1: Starting...");
  await delay(1000);
  console.log("Step 2: Done after 1 second!");
}

runSteps();
```

---

### F. Expected Output
```text
Step 1: Starting...
(1 second pause)
Step 2: Done after 1 second!
```

---

### G. Real-World Usage: Parallel Dashboard Loading (`Promise.all`)
```javascript
async function loadDashboard() {
  try {
    const [profile, notifications, stats] = await Promise.all([
      fetchProfile(),
      fetchNotifications(),
      fetchStats()
    ]);
    renderDashboard(profile, notifications, stats);
  } catch (err) {
    showErrorBanner("Failed to load dashboard data.");
  }
}
```

---

### H. Common Mistakes
1. **Forgetting `await` before a promise:**
   ```javascript
   const user = fetchUser(); // Returns Promise {<pending>}, not the user data!
   ```
2. **Using `await` outside an `async` function:**
   (Unless in modern ES modules with top-level await).
3. **Missing error handling:**
   Always wrap `await` calls in a `try...catch` block so network failures don't crash your app.

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Create a function `waitTwoSeconds()` that returns a promise resolving `"Done!"` after 2000ms.
2. **🟢 Beginner 2:** Call `waitTwoSeconds()` using `async/await` and log the resolved message.
3. **🟡 Intermediate 3:** Write an async function that simulates logging in a user. If password === `"1234"`, resolve `"Access Granted"`, otherwise reject with `"Wrong Password"`. Use `try...catch` to test both cases.
4. **🔴 Real-World Challenge 4:** Use `Promise.allSettled` with three mock API promises (two succeeding, one failing) and print the results of only the fulfilled promises.

---

### J. Lesson Recap
- Synchronous blocks; Asynchronous is non-blocking.
- Promises have 3 states: `pending`, `fulfilled`, `rejected`.
- Prefer `async / await` with `try / catch` for clean code.
- Use `Promise.all()` to execute independent async requests simultaneously.

---

### K. Progress
- ✅ Level 12 Completed
- 🔜 Next: Level 13 — Working with APIs and JSON
