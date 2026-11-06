// ===============================================
// Level 10: DOM Manipulation — script.js
// ===============================================

// 1. Interactive Counter
let count = 0;
const counterValue = document.getElementById("counterValue");
const counterBtn = document.getElementById("counterBtn");
const resetBtn = document.getElementById("resetBtn");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// 2. Dynamic Task List with Event Delegation
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  // Create new DOM element
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "del-btn";

  li.appendChild(span);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);

// Listen for Enter key on input
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Event Delegation on the taskList container
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("del-btn")) {
    // Delete clicked item
    const li = e.target.closest("li");
    li?.remove();
  } else if (e.target.tagName === "SPAN" || e.target.tagName === "LI") {
    // Toggle completed state
    const li = e.target.closest("li");
    li?.classList.toggle("completed");
  }
});

