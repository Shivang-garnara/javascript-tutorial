// =========================================================
// W3Schools JavaScript Examples — Controller & Logic
// File: examples.js
// =========================================================

// ---------------------------------------------------------
// 1. Lightbulb ON / OFF Example
// ---------------------------------------------------------
function turnBulbOn() {
  const bulb = document.getElementById("bulbGraphic");
  const state = document.getElementById("bulbState");
  bulb.classList.remove("bulb-off");
  bulb.classList.add("bulb-on");
  state.textContent = "Light is ON! 💡";
  state.style.color = "#facc15";
}

function turnBulbOff() {
  const bulb = document.getElementById("bulbGraphic");
  const state = document.getElementById("bulbState");
  bulb.classList.remove("bulb-on");
  bulb.classList.add("bulb-off");
  state.textContent = "Light is OFF 🌑";
  state.style.color = "#94a3b8";
}

// ---------------------------------------------------------
// 2. Dynamic Content & Style Manipulator
// ---------------------------------------------------------
let currentFontSize = 16;
const colors = ["#38bdf8", "#f43f5e", "#10b981", "#a855f7", "#facc15"];
let colorIndex = 0;

function changeFontSize() {
  currentFontSize += 3;
  if (currentFontSize > 28) currentFontSize = 16;
  document.getElementById("styleDemoText").style.fontSize = `${currentFontSize}px`;
}

function changeTextColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  document.getElementById("styleDemoText").style.color = colors[colorIndex];
}

function toggleVisibility() {
  const text = document.getElementById("styleDemoText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

function resetStyleDemo() {
  const text = document.getElementById("styleDemoText");
  text.style.fontSize = "16px";
  text.style.color = "#cbd5e1";
  text.style.display = "block";
  currentFontSize = 16;
}

// ---------------------------------------------------------
// 3. Form Input Range Validation (1 to 10)
// ---------------------------------------------------------
function validateRange() {
  const inputVal = document.getElementById("rangeInput").value.trim();
  const feedback = document.getElementById("validationFeedback");

  if (inputVal === "" || isNaN(inputVal)) {
    feedback.textContent = "❌ Not a number! Please enter a valid number.";
    feedback.style.color = "#ef4444";
  } else {
    const num = Number(inputVal);
    if (num < 1 || num > 10) {
      feedback.textContent = `❌ Number ${num} is out of range! Must be between 1 and 10.`;
      feedback.style.color = "#f97316";
    } else {
      feedback.textContent = `✅ Perfect! Number ${num} is valid (1-10).`;
      feedback.style.color = "#10b981";
    }
  }
}

// ---------------------------------------------------------
// 4. Live Digital Clock (setInterval)
// ---------------------------------------------------------
let clockIntervalId = null;
let isClockRunning = true;

function updateClock() {
  const now = new Date();
  document.getElementById("liveClock").textContent = now.toLocaleTimeString();
  document.getElementById("currentDate").textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function startClock() {
  updateClock();
  clockIntervalId = setInterval(updateClock, 1000);
}

function toggleClock() {
  const btn = document.getElementById("clockToggleBtn");
  if (isClockRunning) {
    clearInterval(clockIntervalId);
    isClockRunning = false;
    btn.textContent = "Resume Clock";
    btn.style.background = "#10b981";
  } else {
    startClock();
    isClockRunning = true;
    btn.textContent = "Pause Clock";
    btn.style.background = "#facc15";
  }
}

// Initialize clock immediately
startClock();

// ---------------------------------------------------------
// 5. Dynamic HTML Table Generator
// ---------------------------------------------------------
function addTableRow() {
  const nameInput = document.getElementById("nameInput");
  const roleInput = document.getElementById("roleInput");
  const name = nameInput.value.trim() || "New Member";
  const role = roleInput.value.trim() || "Developer";

  const tableBody = document.querySelector("#dynamicTable tbody");
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = role;
  cell3.innerHTML = `<button onclick="deleteRow(this)" class="btn-danger" style="padding:2px 8px; font-size:11px;">✕</button>`;

  nameInput.value = "";
  roleInput.value = "";
}

function deleteRow(btn) {
  const row = btn.closest("tr");
  row?.remove();
}

// ---------------------------------------------------------
// 6. Mouse Events (Hover Over / Out)
// ---------------------------------------------------------
function mouseOverBox() {
  const box = document.getElementById("hoverBox");
  box.style.background = "#10b981";
  box.style.color = "#0f172a";
  box.textContent = "🎉 Mouse Entered (onmouseover)!";
}

function mouseOutBox() {
  const box = document.getElementById("hoverBox");
  box.style.background = "#334155";
  box.style.color = "#f8fafc";
  box.textContent = "Hover Over Me!";
}

// ---------------------------------------------------------
// 7. Moving Box Animation
// ---------------------------------------------------------
let animIntervalId = null;

function startBoxAnimation() {
  const box = document.getElementById("movingBox");
  const status = document.getElementById("animStatus");
  let pos = 0;
  clearInterval(animIntervalId);
  status.textContent = "Moving across track...";
  status.style.color = "#38bdf8";

  animIntervalId = setInterval(() => {
    if (pos >= 260) {
      clearInterval(animIntervalId);
      status.textContent = "Animation reached the finish line! 🏁";
      status.style.color = "#10b981";
    } else {
      pos += 4;
      box.style.left = pos + "px";
    }
  }, 16);
}

function resetBoxAnimation() {
  clearInterval(animIntervalId);
  const box = document.getElementById("movingBox");
  box.style.left = "0px";
  const status = document.getElementById("animStatus");
  status.textContent = "Ready to animate across the track.";
  status.style.color = "#94a3b8";
}

// ---------------------------------------------------------
// 8. Collapsible Accordion Logic
// ---------------------------------------------------------
function toggleAccordion(panelId) {
  const panel = document.getElementById(panelId);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
