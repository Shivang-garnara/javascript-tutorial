// ===============================================
// Level 14: Modern JavaScript (ES6+) — script.js
// ===============================================

// 1. Shorthand & Computed Properties
const brand = "Tesla";
const model = "Model 3";
const yearKey = "releaseYear";

const car = {
  brand,             // Shorthand for brand: brand
  model,             // Shorthand for model: model
  [yearKey]: 2024,   // Computed property name
  startEngine() {    // Shorthand method
    return `${this.brand} ${this.model} is ready to drive!`;
  }
};
console.log(car.startEngine());
console.log("Release Year:", car.releaseYear);

// 2. Advanced Destructuring with Renaming and Defaults
const responsePayload = {
  data: {
    user_id: "usr_99",
    display_name: "Shivang"
  }
};

const {
  data: {
    user_id: userId,
    display_name: username,
    role = "Standard Member" // Default fallback
  }
} = responsePayload;

console.log(`User: ${username} (ID: ${userId}) - Role: ${role}`);

// 3. Array Destructuring & Skipping Elements
const rgbColors = [255, 128, 0];
const [red, , blue] = rgbColors; // Skips green
console.log(`Red: ${red}, Blue: ${blue}`);

// 4. Spread & Rest in functions
const logTeam = (manager, ...members) => {
  console.log(`Manager: ${manager}`);
  console.log(`Team members count: ${members.length}`, members);
};

logTeam("Alice", "Bob", "Charlie", "David");
