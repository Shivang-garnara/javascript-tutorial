# Level 11 — Browser Features and Web Storage

---

### A. Topic
- **Roadmap Location:** Level 11 (Topics 1 to 9)
- **Topics Covered:**
  1. The global `window` object
  2. Browser events: `scroll`, `resize`, `DOMContentLoaded`
  3. Timers: `setTimeout()`, `clearTimeout()`, `setInterval()`, `clearInterval()`
  4. `localStorage` (persists indefinitely)
  5. `sessionStorage` (clears when tab closes)
  6. Cookies (server vs client)
  7. Modern Browser APIs: Clipboard API, Geolocation API
  8. Browser security & permissions

---

### B. Simple Explanation

#### 1. What is Web Storage?
Normally, when a user refreshes or closes a web page, all JavaScript variables in memory vanish. Web Storage (`localStorage` and `sessionStorage`) allows your site to save key-value data directly in the user's browser so their preferences (like dark theme or items in cart) survive page refreshes and browser restarts!

- **`localStorage`:** Data remains forever until explicitly deleted or browser data cleared.
- **`sessionStorage`:** Data only exists for that specific browser tab. Closing the tab wipes it.

#### 2. Timers
- `setTimeout(callback, ms)`: Runs a function **once** after a delay.
- `setInterval(callback, ms)`: Runs a function **repeatedly** every X milliseconds until cancelled.

---

### C. Why Do We Need Web Storage?
Every modern website remembers you: dark/light theme, draft form answers, login tokens, dismissible banner status, and cookie consent choices.

---

### D. Syntax

```javascript
// Save data (must be a string!)
localStorage.setItem("theme", "dark");
localStorage.setItem("userSettings", JSON.stringify({ volume: 80 }));

// Retrieve data
const theme = localStorage.getItem("theme");
const settings = JSON.parse(localStorage.getItem("userSettings"));

// Delete
localStorage.removeItem("theme");
localStorage.clear(); // Clears everything for this site
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
// Persistent Counter
let savedCount = Number(localStorage.getItem("visitCount")) || 0;
savedCount++;
localStorage.setItem("visitCount", savedCount);

console.log(`You have visited this page ${savedCount} times.`);
```

---

### F. Expected Output
```text
You have visited this page 1 times.
(Refresh page)
You have visited this page 2 times.
```

---

### G. Real-World Usage: Theme Preference Preservation
```javascript
function applyPreferredTheme() {
  const savedTheme = localStorage.getItem("user_theme") || "light";
  document.body.className = savedTheme;
}

function toggleTheme() {
  const current = localStorage.getItem("user_theme") === "dark" ? "light" : "dark";
  localStorage.setItem("user_theme", current);
  applyPreferredTheme();
}
```

---

### H. Common Mistakes
1. **Trying to store objects directly:**
   `localStorage.setItem("user", { name: "Shivang" })` stores `"[object Object]"`!
   Always serialize with `JSON.stringify()` and deserialize with `JSON.parse()`.
2. **Forgetting to clear intervals:**
   `setInterval` runs forever in background until you call `clearInterval(timerId)`.
3. **Storing sensitive tokens (passwords, private keys):**
   `localStorage` is accessible by any script running on the page, making it susceptible to XSS. Never store passwords or secrets in `localStorage`.

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Use `setTimeout` to log `"3 seconds have passed!"` after 3000ms.
2. **🟢 Beginner 2:** Save a user's nickname to `localStorage`, read it back, and print it.
3. **🟡 Intermediate 3:** Create a digital stopwatch using `setInterval` that counts elapsed seconds and stops at 10 seconds using `clearInterval`.
4. **🔴 Real-World Challenge 4:** Write a note-taking function that saves an array of notes to `localStorage` and loads them when the application starts.

---

### J. Lesson Recap
- `localStorage` keeps data across restarts; `sessionStorage` lasts for the tab session.
- Always use `JSON.stringify()` when saving objects/arrays to storage.
- Manage recurring tasks with `setInterval` and cancel them with `clearInterval`.

---

### K. Progress
- ✅ Level 11 Completed
- 🔜 Next: Level 12 — Asynchronous JavaScript (Promises & Async/Await)
