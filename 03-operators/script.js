// ===============================================
// Level 3: Operators — Code Examples
// ===============================================

// 1. Arithmetic & Assignment
let balance = 100;
balance += 50;  // 150
balance -= 20;  // 130
balance *= 2;   // 260
balance /= 4;   // 65
const remainder = balance % 10; // 5
console.log("Balance:", balance, "Remainder with 10:", remainder);

// 2. Strict vs Loose Equality
console.log("5 == '5':", 5 == "5");     // true (coerced)
console.log("5 === '5':", 5 === "5");   // false (strict)
console.log("null == undefined:", null == undefined);   // true
console.log("null === undefined:", null === undefined); // false

// 3. Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;
const canDrive = hasDriverLicense && hasGoodVision && !isTired;
console.log("Can drive safely?", canDrive);

// 4. Template Literals
const firstName = "Shivang";
const role = "Software Engineer";
console.log(`Hello, my name is ${firstName} and I am a ${role}.`);

// 5. Nullish Coalescing (??)
let userConfiguredVolume = 0; // 0 is valid volume!
let finalVolumeOr = userConfiguredVolume || 50; // treating 0 as falsy -> sets 50 (bug!)
let finalVolumeNullish = userConfiguredVolume ?? 50; // sets 0 correctly!
console.log("With ||:", finalVolumeOr, "| With ??:", finalVolumeNullish);

// 6. Optional Chaining (?.)
const user = { name: "Alice", address: null };
console.log("User city:", user.address?.city ?? "No city registered");
