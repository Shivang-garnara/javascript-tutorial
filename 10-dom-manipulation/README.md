# Level 10 — DOM (Document Object Model)

---

### A. Topic
- **Roadmap Location:** Level 10 (Topics 1 to 18)
- **Topics Covered:**
  1. What is the DOM?
  2. Selecting elements: `getElementById`, `querySelector`, `querySelectorAll`
  3. Modifying text and HTML: `textContent`, `innerHTML`
  4. Modifying styles & classes: `classList.add()`, `remove()`, `toggle()`
  5. Creating & deleting nodes: `document.createElement()`, `append()`, `remove()`
  6. Traversing DOM: parent, children, siblings
  7. Event Listeners: `addEventListener('click')`, `input`, `submit`
  8. The Event Object (`e.target`, `e.preventDefault()`)
  9. Event Bubbling & Event Delegation
  10. Practical Form Validation & dynamic UI components

---

### B. Simple Explanation

#### 1. What is the DOM?
The **DOM (Document Object Model)** is the browser's internal tree representation of your HTML webpage.
When a browser loads an HTML page, it parses the HTML and turns every tag (`<h1>`, `<div>`, `<button>`) into a JavaScript object that can be queried and modified dynamically!

#### 2. Selecting Elements
- `document.querySelector("#myId")`: Finds the first element matching any CSS selector.
- `document.querySelectorAll(".item")`: Finds all matching elements as a NodeList.

#### 3. Listening for Events
JavaScript can "listen" for user interactions using `addEventListener`:
```javascript
const button = document.querySelector("#submitBtn");
button.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

#### 4. Event Delegation
Instead of attaching 100 click listeners to 100 list items, you attach **one listener to the parent container** and check `e.target` to see which child was clicked!

---

### C. Why Do We Need the DOM?
Without the DOM, web pages are completely static. The DOM is what turns HTML/CSS documents into actual applications like Twitter, Google Docs, or YouTube.

---

### D. Syntax

```javascript
// Select
const btn = document.querySelector("#likeBtn");
const countDisplay = document.querySelector("#likeCount");

// Listen & Mutate
let likes = 0;
btn.addEventListener("click", () => {
  likes++;
  countDisplay.textContent = likes;
  btn.classList.toggle("liked");
});
```

---

### E. Basic Example

Open [`index.html`](file:///C:/Users/Shivang/Downloads/javascript%20basic/10-dom-manipulation/index.html) in your browser:
```javascript
const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = todoInput.value;
  todoList.appendChild(li);
  todoInput.value = "";
});
```

---

### F. Expected Output
Typing "Buy groceries" and clicking Add immediately inserts a new `<li>` element into the visible page without refreshing!

---

### G. Real-World Usage: Dark/Light Mode Theme Switcher
```javascript
const themeToggleBtn = document.querySelector("#themeToggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
```

---

### H. Common Mistakes
1. **Executing JS before the DOM loads:**
   If your `<script>` is in the `<head>` without `defer`, `document.querySelector` runs before HTML exists and returns `null`!
2. **Forgetting `event.preventDefault()` on form submit:**
   Clicking submit will refresh the page by default and wipe all JS state!
3. **Using `innerHTML` with unsanitized user inputs:**
   Can expose your site to XSS (Cross-Site Scripting) attacks. Always prefer `textContent` for plain text.

---

### I. Practice Exercises
Check `practice.js` and open `index.html`:
1. **🟢 Beginner 1:** Select a button with id `#counterBtn` and increment its number on click.
2. **🟢 Beginner 2:** Change the text color of a paragraph to red when the mouse hovers over it (`mouseenter`).
3. **🟡 Intermediate 3:** Build a real-time character counter for a textarea (showing "Characters: X / 200").
4. **🔴 Real-World Challenge 4:** Implement an interactive interactive To-Do list where clicking any item toggles a `"completed"` strike-through class, and clicking a delete button removes it.

---

### J. Lesson Recap
- DOM is the JavaScript bridge to HTML elements.
- Select with `querySelector` / `querySelectorAll`.
- Modify with `textContent`, `classList`, and `style`.
- Always use `addEventListener` for user interactions.
- Use `e.preventDefault()` to stop forms from reloading the page.

---

### K. Progress
- ✅ Level 10 Completed
- 🔜 Next: Level 11 — Browser Features and Web Storage

