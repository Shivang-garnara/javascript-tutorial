// ===================================================
// Event Delegation Controller & Simulation Logic
// ===================================================

document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.querySelector("#taskList");
  const taskInput = document.querySelector("#taskInput");
  const addTaskBtn = document.querySelector("#addTaskBtn");
  const logConsole = document.querySelector("#logConsole");

  function log(message) {
    if (!logConsole) return;
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = `[${time}] ${message}`;
    logConsole.prepend(entry);
  }

  // ==========================================================
  // SINGLE EVENT DELEGATION LISTENER ON PARENT UL (#taskList)
  // ==========================================================
  taskList.addEventListener("click", (e) => {
    // 1. Check if user clicked or tapped a delete button
    const deleteButton = e.target.closest(".btn-delete");
    if (deleteButton) {
      const item = deleteButton.closest("li");
      const title = item.querySelector(".task-title").textContent;
      item.remove();
      log(`🗑️ Event Delegation removed task: "${title}"`);
      return;
    }

    // 2. Check if user clicked a complete checkbox/toggle
    const toggleButton = e.target.closest(".btn-toggle");
    if (toggleButton) {
      const item = toggleButton.closest("li");
      item.classList.toggle("completed");
      const isDone = item.classList.contains("completed");
      log(`✅ Task marked as ${isDone ? "COMPLETED" : "PENDING"}`);
      return;
    }

    // 3. Clicked directly on the task row
    const taskItem = e.target.closest("li");
    if (taskItem) {
      log(`👉 Clicked item background (event.target: <${e.target.tagName.toLowerCase()}>)`);
    }
  });

  // Adding new dynamic tasks into DOM:
  // NOTICE: We do NOT need to attach any addEventListener to the new element!
  // The existing parent listener catches events from newborn children immediately!
  function addNewTask(text) {
    if (!text.trim()) return;

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span class="task-title">${escapeHTML(text)}</span>
      <div class="actions">
        <button class="btn-toggle" title="Toggle Status">✓ Done</button>
        <button class="btn-delete" title="Delete Task">✕ Delete</button>
      </div>
    `;

    taskList.appendChild(li);
    log(`✨ Dynamically inserted new element into DOM: "${text}"`);
    taskInput.value = "";
    taskInput.focus();
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  addTaskBtn.addEventListener("click", () => {
    addNewTask(taskInput.value);
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addNewTask(taskInput.value);
    }
  });

  log("Event delegation initialized on parent #taskList");
});

