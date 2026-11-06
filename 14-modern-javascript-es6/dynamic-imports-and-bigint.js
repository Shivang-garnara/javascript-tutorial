// ========================================================
// BigInt & Dynamic Import Demonstration Script
// ========================================================

console.log("=== 1. Standard Number Precision Limit vs BigInt ===");
const safeLimit = Number.MAX_SAFE_INTEGER;
console.log("Number.MAX_SAFE_INTEGER:", safeLimit);

console.log("\nStandard float addition (loses precision):");
console.log(`${safeLimit} + 1 =`, safeLimit + 1);
console.log(`${safeLimit} + 2 =`, safeLimit + 2); // Error: repeats 9007199254740992!

console.log("\nBigInt addition (preserves 100% exact precision):");
const bigLimit = BigInt(safeLimit);
console.log(`${bigLimit}n + 1n =`, bigLimit + 1n);
console.log(`${bigLimit}n + 2n =`, bigLimit + 2n);
console.log(`${bigLimit}n + 1000n =`, bigLimit + 1000n);

console.log("\n=== 2. BigInt Type & Comparisons ===");
console.log("typeof 500n :", typeof 500n); // "bigint"
console.log("5n == 5     :", 5n == 5);      // true (loose equality coerces)
console.log("5n === 5    :", 5n === 5);     // false (strict equality checks type)

// Explicit type conversion required:
try {
  eval("const sum = 10n + 20;");
} catch (err) {
  console.log("Caught mixed math error:", err.message);
}

const safeMixedSum = 10n + BigInt(20);
console.log("Safe explicit mixed conversion:", safeMixedSum); // 30n

console.log("\n=== 3. Dynamic Import Simulation ===");
async function lazyLoadModuleSimulation(moduleName) {
  console.log(`[LazyLoader] Requesting module: "${moduleName}" on demand...`);

  // Simulating async network delay of dynamic import()
  await new Promise(res => setTimeout(res, 100));

  const mockModule = {
    renderWidget() {
      return `[Widget: ${moduleName}] loaded dynamically and rendered!`;
    }
  };

  return mockModule;
}

async function handleUserInteraction() {
  const chartModule = await lazyLoadModuleSimulation("analytics-charts.js");
  console.log(chartModule.renderWidget());
}

handleUserInteraction();
