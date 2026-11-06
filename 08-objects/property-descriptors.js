// ========================================================
// Getters, Setters, Property Descriptors & Freezing Demo
// ========================================================

"use strict"; // Strict mode turns illegal modifications into clear errors

console.log("=== 1. Getters and Setters in Classes & Objects ===");
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(fValue) {
    this._celsius = ((fValue - 32) * 5) / 9;
  }

  get celsius() {
    return this._celsius;
  }
}

const temp = new Temperature(25);
console.log(`25°C in Fahrenheit: ${temp.fahrenheit}°F`); // 77°F

temp.fahrenheit = 98.6;
console.log(`Body Temp 98.6°F in Celsius: ${temp.celsius.toFixed(1)}°C`); // 37.0°C

console.log("\n=== 2. Custom Property Descriptors with Object.defineProperty ===");
const account = {};

// Non-writable, non-configurable ID:
Object.defineProperty(account, "accountNumber", {
  value: "SB-8829104",
  writable: false,
  enumerable: true,
  configurable: false
});

// Hidden metadata property (enumerable: false):
Object.defineProperty(account, "internalChecksum", {
  value: "CHKSUM_99182",
  writable: true,
  enumerable: false, // Will NOT show up in Object.keys()!
  configurable: false
});

console.log("Visible Keys in account:", Object.keys(account)); // Only ["accountNumber"]
console.log("Reading hidden property:", account.internalChecksum); // "CHKSUM_99182"

// Attempting to overwrite read-only property in strict mode:
try {
  account.accountNumber = "HACKED_ACCOUNT";
} catch (err) {
  console.log("Strict mode caught illegal write:", err.message);
}

console.log("\n=== 3. Object.seal() vs Object.freeze() ===");
const sealedItem = { name: "Pen", price: 20 };
Object.seal(sealedItem);

// In sealed objects: you can modify existing, but CANNOT add or delete
sealedItem.price = 25; // Allowed!
console.log("Sealed item price modified:", sealedItem.price);

try {
  delete sealedItem.name; // Illegal!
} catch (err) {
  console.log("Cannot delete property from sealed object:", err.message);
}

const frozenItem = { name: "Gold Bar", price: 75000 };
Object.freeze(frozenItem);

try {
  frozenItem.price = 80000; // Illegal!
} catch (err) {
  console.log("Cannot modify property on frozen object:", err.message);
}

console.log("\n=== 4. Deep Freeze Implementation Test ===");
function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    const val = obj[key];
    if (typeof val === "object" && val !== null && !Object.isFrozen(val)) {
      deepFreeze(val);
    }
  });
  return Object.freeze(obj);
}

const company = {
  name: "Tech Corp",
  address: {
    city: "Ahmedabad",
    pincode: 380015
  }
};

deepFreeze(company);

try {
  company.address.city = "Mumbai";
} catch (err) {
  console.log("Deep freeze successfully protected nested property:", err.message);
}

