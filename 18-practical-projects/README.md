# Level 18 — Practical Real-World Projects

---

### A. Topic
- **Roadmap Location:** Level 18 (Projects 1 to 14)
- **14 Projects Included in the Master Curriculum:**
  1. 🧮 Calculator (Arithmetic operations & display logic)
  2. 🎯 Number Guessing Game (Randomization & conditional feedback)
  3. 📝 Dynamic To-Do List (DOM creation, completion toggles & deletion)
  4. ⏱️ Digital Clock & Stopwatch (`setInterval` & formatted time)
  5. 🛡️ Interactive Form Validator (RegExp validation & instant error messages)
  6. 🔑 Password Strength Checker (Real-time regex criteria checklist)
  7. 🔍 Search & Filter List (Array filtering, search inputs, active tags)
  8. 🛒 Full E-Commerce Shopping Cart (Cart totals, quantities & `localStorage`)
  9. 💰 Personal Expense Tracker (Income vs expenses & balance calculation)
  10. ⛅ Live Weather Application (Consuming public Weather REST API)
  11. 🗒️ Persistent Notes Application (CRUD with `localStorage`)
  12. ❓ Interactive Quiz Application (Score tracking & multiple choice flow)
  13. 📊 Live Dynamic Dashboard (Mock charts, metrics, and KPI cards)
  14. 🔄 Full CRUD REST Application (`fetch` GET, POST, PUT, DELETE with mock API)

---

### B. Standard Project Architecture
For every project in Level 18, follow this proven 4-stage architecture:
1. **Requirements & State:** What data does the project store? (e.g. `items`, `activeFilter`, `total`).
2. **HTML Structure:** Clean semantic markup.
3. **CSS Styling:** Modern layout (Flexbox/Grid), legible typography, responsive design.
4. **JavaScript Controller:**
   - Listen to events (`click`, `input`, `submit`).
   - Update the state.
   - Re-render the UI to match the new state.

---

### C. Live Showcase Included
We have provided an interactive multi-project web showcase in this folder!
Open [`index.html`](file:///C:/Users/Shivang/Downloads/javascript%20basic/18-practical-projects/index.html) in your browser to experience working interactive versions of:
- **Project 1:** Interactive Calculator
- **Project 2:** Number Guessing Game
- **Project 6:** Real-time Password Strength Checker
- **Project 8:** Interactive Shopping Cart with live totals

---

### D. Step-by-Step Implementation Guide: Project 1 (Calculator)
1. **State:** `currentInput`, `previousInput`, `operator`.
2. **Events:** Clicks on digit buttons append numbers; operator buttons save operator; equals executes computation.
3. **Edge cases:** Preventing multiple consecutive decimals (`..`), division by zero, clearing (`AC`).

---

### E. Step-by-Step Implementation Guide: Project 6 (Password Strength Meter)
1. Listen to `input` event on `<input type="password">`.
2. Check 4 criteria:
   - Length >= 8
   - Contains lowercase and uppercase letters
   - Contains numbers (`\d`)
   - Contains special characters (`[!@#$%^&*]`)
3. Calculate score (0 to 4) and dynamically adjust width and color of progress bar (Red -> Orange -> Green).

---

### F. Expected Output
Opening [`index.html`](file:///C:/Users/Shivang/Downloads/javascript%20basic/18-practical-projects/index.html) gives you a functional, dark-themed responsive app demonstrating clean JavaScript state management.

---

### G. Common Mistakes in Projects
1. **Mixing state and UI directly:**
   Always update your JavaScript variables first, then render the UI from that state.
2. **Not saving changes to storage:**
   Whenever items are added/deleted in the cart or to-do list, call `localStorage.setItem()` to persist them!

---

### H. Practice Exercises
Check `practice.js` in this folder to implement bonus features on top of these projects!

---

### I. Progress
- ✅ Level 18 Completed
- 🔜 Next: Level 19 — Next Steps After Core JavaScript (React, Node, TypeScript)

