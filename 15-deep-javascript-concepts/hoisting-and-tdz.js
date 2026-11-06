// ========================================================
// Hoisting & Temporal Dead Zone (TDZ) Demonstration
// ========================================================

console.log("=== 1. Function Declaration Hoisting in Action ===");
// This function call succeeds even though definition is further down
console.log(calculateDiscount(1000, 20)); // ₹800

function calculateDiscount(price, percentage) {
  return `₹${price - (price * percentage) / 100}`;
}

console.log("\n=== 2. var Hoisting vs let/const TDZ ===");
// var returns undefined:
console.log("Reading hoisted var before assignment:", legacyVar);
var legacyVar = "Assigned Value";

// let/const throws ReferenceError when accessed in TDZ:
try {
  eval(`
    console.log(blockedVariable);
    let blockedVariable = "TDZ test";
  `);
} catch (err) {
  console.log("Caught TDZ access error:", err.message);
}

console.log("\n=== 3. Function Expression TypeError Gotcha ===");
try {
  eval(`
    expressFunc();
    var expressFunc = function() { console.log("Will not run!"); };
  `);
} catch (err) {
  console.log("Calling hoisted var function expression threw:", err.name, "-", err.message);
}

console.log("\n=== 4. TDZ in Default Parameter Evaluation ===");
// Trying to use a parameter before it is initialized in parameter list:
try {
  eval(`
    function badDefaults(a = b, b = 2) { return a + b; }
    badDefaults();
  `);
} catch (err) {
  console.log("TDZ in default parameters caught:", err.message);
}

