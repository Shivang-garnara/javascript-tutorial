// ========================================================
// globalThis Universal Object Demonstration
// ========================================================

console.log("=== 1. globalThis Environment Verification ===");
console.log("globalThis is defined :", typeof globalThis !== "undefined");

// Cross-referencing environment globals
if (typeof window !== "undefined") {
  console.log("Browser environment: globalThis === window is", globalThis === window);
} else if (typeof global !== "undefined") {
  console.log("Node.js environment: globalThis === global is", globalThis === global);
}

console.log("\n=== 2. Feature Detection via globalThis ===");
const features = ["fetch", "setTimeout", "Promise", "structuredClone", "crypto"];

features.forEach(feat => {
  const isAvailable = typeof globalThis[feat] !== "undefined";
  console.log(`Feature [${feat.padEnd(16)}]: ${isAvailable ? "SUPPORTED ✅" : "UNAVAILABLE ❌"}`);
});

console.log("\n=== 3. Attaching Universal Safe Metadata ===");
globalThis.__SYSTEM_BOOT_TIME__ = new Date().toISOString();
console.log("Retrieved universal timestamp from globalThis:", globalThis.__SYSTEM_BOOT_TIME__);
