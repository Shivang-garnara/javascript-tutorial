// =========================================================
// Ternary, Short-Circuit, Optional Chaining & Coalescing Demo
// =========================================================

console.log("=== 1. Ternary Operator in Practical Scenarios ===");
const userRole = "admin";
const accessLevel = userRole === "admin" ? "FULL_ACCESS" : "READ_ONLY";
console.log(`User Access Level: ${accessLevel}`);

// Ternary for formatting
const count = 1;
console.log(`You have ${count} ${count === 1 ? "notification" : "notifications"}.`);

console.log("\n=== 2. Short-Circuit with || vs ?? ===");
const apiResponses = [
  { field: "itemsInStock", value: 0 },
  { field: "userNickname", value: "" },
  { field: "isFeatureEnabled", value: false },
  { field: "deletedAt", value: null },
  { field: "pendingTask", value: undefined }
];

console.log("Testing how || and ?? handle zero, empty string, and booleans:");
apiResponses.forEach(entry => {
  const withOR = entry.value || "DEFAULT_FALLBACK";
  const withCoalesce = entry.value ?? "DEFAULT_FALLBACK";
  console.log(
    `Input: ${String(entry.value).padEnd(9)} | (||): ${String(withOR).padEnd(16)} | (??): ${String(withCoalesce)}`
  );
});

console.log("\n=== 3. Optional Chaining (?.) preventing crashes ===");
const customerProfile = {
  id: 4092,
  name: "Shivang",
  contact: {
    email: "shivang@example.com"
    // phone & address are missing
  },
  getMembershipTier() {
    return "Platinum Member";
  }
};

// Accessing nested missing properties without error:
console.log("Zip Code        :", customerProfile?.contact?.address?.zipCode ?? "Zip code not found");
console.log("Phone Number    :", customerProfile?.contact?.phone ?? "No phone on record");
console.log("Membership Tier :", customerProfile?.getMembershipTier?.() ?? "Standard Member");
console.log("Get Loyalty Pts :", customerProfile?.getLoyaltyPoints?.() ?? "Loyalty points method unavailable");

console.log("\n=== 4. Modern Logical Assignment Operators (ES2021) ===");
const appConfig = {
  appName: "",
  port: 0,
  timeoutMs: null,
  debugMode: true
};

// Logical OR Assignment: assigns if falsy
appConfig.appName ||= "Default CRM App";

// Nullish Assignment: assigns only if null or undefined
appConfig.port ??= 3000;         // 0 is preserved!
appConfig.timeoutMs ??= 5000;    // null is replaced with 5000

// Logical AND Assignment: assigns only if already truthy
appConfig.debugMode &&= "VERBOSE_LOGGER_ENABLED";

console.log("Processed App Config:", appConfig);

