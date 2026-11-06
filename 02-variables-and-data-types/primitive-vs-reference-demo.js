// ========================================================
// Primitive vs Reference Values Demonstration
// ========================================================

console.log("=== 1. Primitive Copying (Independent Stack Memory) ===");
let originalScore = 95;
let copiedScore = originalScore; // Copied by value

copiedScore = 100;
console.log(`originalScore: ${originalScore} (Untouched!)`);
console.log(`copiedScore  : ${copiedScore}`);

console.log("\n=== 2. Reference Copying (Shared Heap Memory) ===");
const originalSettings = { theme: "dark", fontSize: 14 };
const referencedSettings = originalSettings; // Copied memory pointer!

referencedSettings.theme = "emerald";
console.log("originalSettings.theme:", originalSettings.theme); // "emerald" (Mutated!)
console.log("Both variables point to the exact same memory address:", originalSettings === referencedSettings); // true

console.log("\n=== 3. Pass-by-Value Mechanics in Functions ===");
function modifyValues(primitiveVal, objectVal) {
  // 1. Primitive modification:
  primitiveVal = 999;

  // 2. Object property mutation:
  objectVal.counter += 1;

  // 3. Object re-assignment:
  objectVal = { counter: 5000 }; // Rebinds local variable only!
}

let count = 10;
const state = { counter: 50 };

modifyValues(count, state);

console.log("count after function call:", count); // 10 (Primitive unchanged)
console.log("state.counter after call :", state.counter); // 51 (Property mutated)
console.log("state was NOT replaced by { counter: 5000 } because JS is strictly Pass-by-Value!");

console.log("\n=== 4. Reference Equality Test ===");
const obj1 = { id: 1 };
const obj2 = { id: 1 };

console.log("obj1 === obj2 :", obj1 === obj2); // false! Distinct heap allocations
console.log("obj1 === obj1 :", obj1 === obj1); // true! Identical memory address
