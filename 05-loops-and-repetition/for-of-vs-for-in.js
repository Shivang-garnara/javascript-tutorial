// =======================================================
// for...in vs for...of vs forEach Demonstration Script
// =======================================================

console.log("=== 1. for...in on Objects (Iterating Keys) ===");
const developer = {
  name: "Shivang",
  language: "JavaScript",
  framework: "React",
  experienceYears: 3
};

for (const prop in developer) {
  if (Object.prototype.hasOwnProperty.call(developer, prop)) {
    console.log(`Key: [${prop}] -> Value: [${developer[prop]}]`);
  }
}

console.log("\n=== 2. for...of on Iterables (Iterating Values) ===");
const frameworks = ["React", "Vue", "Angular", "Svelte"];

console.log("-- Loop over array with break support --");
for (const fw of frameworks) {
  if (fw === "Angular") {
    console.log(`Skipping ${fw} via continue...`);
    continue;
  }
  console.log(`Framework: ${fw}`);
}

console.log("\n-- Destructuring index and value using .entries() --");
for (const [idx, fw] of frameworks.entries()) {
  console.log(`#${idx + 1}: ${fw}`);
}

console.log("\n=== 3. for...of on Strings, Sets, and Maps ===");
// String iteration
const word = "JS⚡";
console.log("Characters in string:");
for (const char of word) {
  console.log(`- ${char}`);
}

// Map iteration
const userRoles = new Map([
  ["admin", "Full System Access"],
  ["editor", "Can publish articles"],
  ["viewer", "Read-only access"]
]);

console.log("\nMap Key-Value pairs:");
for (const [role, desc] of userRoles) {
  console.log(`${role.padEnd(8)} -> ${desc}`);
}

console.log("\n=== 4. Why for...in on Arrays is Risky (Demo) ===");
const numbers = [100, 200, 300];

// Adding a custom property to simulate prototype pollution / library additions
numbers.customMetadata = "version 1.0";

console.log("Notice how for...in visits the custom property:");
for (const key in numbers) {
  console.log(`for...in key: ${key} (type: ${typeof key})`);
}

console.log("\nNotice how for...of stays clean and visits ONLY array elements:");
for (const val of numbers) {
  console.log(`for...of value: ${val}`);
}

console.log("\n=== 5. Async Loop Comparison (Sequential vs Flawed forEach) ===");
const wait = (ms) => new Promise(res => setTimeout(res, ms));

async function runAsyncComparison() {
  const steps = [1, 2, 3];

  console.log("Starting sequential async iteration with for...of:");
  const startTime = Date.now();
  for (const step of steps) {
    await wait(100);
    console.log(`Step ${step} completed at +${Date.now() - startTime}ms`);
  }
  console.log("All sequential steps finished cleanly!");
}

runAsyncComparison();
