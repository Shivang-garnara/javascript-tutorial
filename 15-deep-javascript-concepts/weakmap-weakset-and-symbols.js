// ==========================================================
// Symbols, WeakMap & WeakSet In Action
// ==========================================================

console.log("=== 1. Unique Symbols & Hidden Object Keys ===");
const symA = Symbol("apiKey");
const symB = Symbol("apiKey");

console.log("symA === symB :", symA === symB); // false (always unique!)

const apiConfig = {
  endpoint: "https://api.crm.example.com/v1",
  timeout: 5000,
  [symA]: "SEC_TOKEN_XYZ_12345"
};

console.log("Public Object.keys :", Object.keys(apiConfig)); // ["endpoint", "timeout"]
console.log("Symbol Property Value:", apiConfig[symA]);

// Inspecting symbols explicitly:
console.log("Symbols on object  :", Object.getOwnPropertySymbols(apiConfig));

console.log("\n=== 2. Global Symbol Registry with Symbol.for ===");
const globalAuth = Symbol.for("auth.token");
const sameGlobalAuth = Symbol.for("auth.token");
console.log("Shared Global Symbols match:", globalAuth === sameGlobalAuth); // true
console.log("Key for symbol:", Symbol.keyFor(globalAuth)); // "auth.token"

console.log("\n=== 3. WeakMap Preventing Memory Leaks ===");
// Simulating object-bound metadata cache
const userMetadataCache = new WeakMap();

let userShivang = { id: 101, name: "Shivang" };
let userAman = { id: 102, name: "Aman" };

// Attach private tracking metadata:
userMetadataCache.set(userShivang, { lastLogin: Date.now(), loginCount: 14 });
userMetadataCache.set(userAman, { lastLogin: Date.now(), loginCount: 3 });

console.log("Shivang Metadata:", userMetadataCache.get(userShivang));
console.log("Has Aman metadata:", userMetadataCache.has(userAman));

// When userShivang is no longer needed:
userShivang = null; 
// The memory inside userMetadataCache is now eligible for Garbage Collection!
console.log("userShivang dereferenced; WeakMap automatically allows GC cleanup.");

console.log("\n=== 4. WeakSet for Tracking Processed Records ===");
const processedRecords = new WeakSet();

function processOrder(order) {
  if (processedRecords.has(order)) {
    return `⚠️ Order #${order.id} was already processed! Skipping...`;
  }
  processedRecords.add(order);
  return `✅ Order #${order.id} processed successfully. Total: ₹${order.total}`;
}

const order1 = { id: "ORD-901", total: 4500 };
const order2 = { id: "ORD-902", total: 1200 };

console.log(processOrder(order1));
console.log(processOrder(order2));
console.log(processOrder(order1)); // Duplicate detection in action!
