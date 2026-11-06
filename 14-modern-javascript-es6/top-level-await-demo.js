// ========================================================
// Top-Level Await Pattern & Optional Catch Demonstration
// ========================================================

console.log("=== 1. Optional Catch Binding (ES2019) ===");
function parseConfigSafe(rawJson, defaultFallback = {}) {
  try {
    return JSON.parse(rawJson);
  } catch {
    // Optional catch binding: No unused '(err)' variable needed!
    console.log("JSON parsing failed cleanly; returning default fallback.");
    return defaultFallback;
  }
}

const badInput = "{ name: bad_json_missing_quotes }";
const safeResult = parseConfigSafe(badInput, { mode: "DEFAULT_FALLBACK" });
console.log("Safe Result:", safeResult);

console.log("\n=== 2. Top-Level Await Lifecycle Pattern ===");
// Simulating an async initialization task
const delay = ms => new Promise(res => setTimeout(res, ms));

async function simulateBootstrap() {
  console.log("1. Application boot sequence starting...");
  await delay(100);
  console.log("2. Remote configuration loaded via Top-Level Await.");
  return { status: "READY", timestamp: Date.now() };
}

// In ES Module environments, you can simply write:
// const appConfig = await simulateBootstrap();
// For CommonJS / general scripts, top-level IIFE demonstrates the exact flow:
(async () => {
  const appConfig = await simulateBootstrap();
  console.log("3. System Ready:", appConfig);
})();

