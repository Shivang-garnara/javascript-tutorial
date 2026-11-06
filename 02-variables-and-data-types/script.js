// ===============================================
// Level 2: Variables & Data Types — Examples
// ===============================================

// 1. let vs const
const appName = "MyShop";
let activeUsers = 120;
activeUsers = 121; // Valid reassignment

console.log("App:", appName, "| Active Users:", activeUsers);

// 2. The Primitive Data Types
const textString = "Hello Developers";
const integerNumber = 42;
const floatNumber = 99.95;
const isOnline = true;
let unassignedValue; // undefined
const emptyValue = null; // null
const bigNumber = 9007199254740991n; // BigInt
const uniqueId = Symbol("id");

// 3. Checking types with typeof
console.log("--- Checking Types ---");
console.log("textString:", typeof textString);       // string
console.log("integerNumber:", typeof integerNumber); // number
console.log("isOnline:", typeof isOnline);           // boolean
console.log("unassigned:", typeof unassignedValue);  // undefined
console.log("emptyValue:", typeof emptyValue);       // object (historical JS quirk!)
console.log("bigNumber:", typeof bigNumber);         // bigint
console.log("uniqueId:", typeof uniqueId);           // symbol

// 4. Explicit Type Conversion
const inputFromUser = "500";
const parsedNumber = Number(inputFromUser);
console.log("Converted:", parsedNumber + 50); // 550

// 5. Truthy / Falsy check
console.log("Boolean of empty string:", Boolean(""));    // false
console.log("Boolean of 'hello':", Boolean("hello"));    // true
console.log("Boolean of 0:", Boolean(0));                // false
console.log("Boolean of 42:", Boolean(42));              // true
