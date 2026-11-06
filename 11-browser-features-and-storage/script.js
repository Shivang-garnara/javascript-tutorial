// ===============================================
// Level 11: Browser Features & Storage — script.js
// ===============================================

// 1. Timers
console.log("Timer scheduled: starting 2-second countdown...");
const timeoutId = setTimeout(() => {
  console.log("2 seconds elapsed! Timer fired.");
}, 2000);

// Interval example: ticking 3 times then stopping
let tickCount = 0;
const intervalId = setInterval(() => {
  tickCount++;
  console.log(`Interval tick #${tickCount}`);
  if (tickCount >= 3) {
    clearInterval(intervalId);
    console.log("Interval cleared!");
  }
}, 1000);

// 2. localStorage with JSON
const userPreferences = {
  theme: "dark",
  fontSize: 16,
  notifications: true
};

// Save object
localStorage.setItem("app_prefs", JSON.stringify(userPreferences));
console.log("Preferences saved to localStorage.");

// Read object back
const retrievedRaw = localStorage.getItem("app_prefs");
if (retrievedRaw) {
  const parsedPrefs = JSON.parse(retrievedRaw);
  console.log("Retrieved Theme:", parsedPrefs.theme);
}

// 3. Modern Clipboard API Demonstration (Browser only)
async function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard!");
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  }
}

