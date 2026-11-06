// ========================================================
// Microtasks vs Macrotasks Event Loop Demonstration
// ========================================================

console.log("=== Demonstration of Event Loop Execution Order ===");

console.log("A: Synchronous Log 1");

setTimeout(() => {
  console.log("E: Macrotask (setTimeout 0ms)");
}, 0);

Promise.resolve().then(() => {
  console.log("C: Microtask 1 (Promise)");
}).then(() => {
  console.log("D: Microtask 2 (Chained Promise)");
});

queueMicrotask(() => {
  console.log("C2: Microtask 3 (queueMicrotask)");
});

console.log("B: Synchronous Log 2");

// Expected Output Sequence:
// 1. A: Synchronous Log 1
// 2. B: Synchronous Log 2
// 3. C: Microtask 1 (Promise)
// 4. C2: Microtask 3 (queueMicrotask)
// 5. D: Microtask 2 (Chained Promise)
// 6. E: Macrotask (setTimeout 0ms)

console.log("\n(Execution order registered in event loop; output will resolve above)");

