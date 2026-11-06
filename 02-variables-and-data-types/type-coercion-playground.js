// ===============================================
// JavaScript Type Coercion & Conversion Playground
// ===============================================

console.log("=== 1. typeof Quirks in Action ===");
console.log("typeof 42         :", typeof 42);           // "number"
console.log("typeof NaN        :", typeof NaN);          // "number" (Quirk!)
console.log("typeof null       :", typeof null);         // "object" (Bug since 1995!)
console.log("typeof []         :", typeof []);           // "object"
console.log("Array.isArray([]) :", Array.isArray([]));   // true (The right way!)
console.log("typeof function(){}:", typeof function(){}); // "function"
console.log("typeof undefined  :", typeof undefined);    // "undefined"
console.log("typeof 100n       :", typeof 100n);         // "bigint"
console.log("typeof Symbol('x'):", typeof Symbol('x'));  // "symbol"

console.log("\n=== 2. Truthy vs Falsy Comparisons ===");
const valuesToTest = [false, 0, "", null, undefined, NaN, "0", "false", [], {}, function(){}];

valuesToTest.forEach(val => {
  const isTruthy = Boolean(val);
  const display = typeof val === "function" ? "function(){}" : JSON.stringify(val) ?? String(val);
  console.log(`${display.padEnd(14)} -> ${isTruthy ? "TRUTHY 🟢" : "FALSY 🔴"}`);
});

console.log("\n=== 3. Implicit Coercion Tricking Developers ===");
console.log('"5" + 2      =', "5" + 2);      // "52" (string wins with +)
console.log('"5" - 2      =', "5" - 2);      // 3    (number conversion with -)
console.log('"5" * "2"    =', "5" * "2");    // 10
console.log('true + 1     =', true + 1);     // 2    (true becomes 1)
console.log('false + 1    =', false + 1);    // 1    (false becomes 0)
console.log('null + 5     =', null + 5);     // 5    (null becomes 0)
console.log('undefined + 5=', undefined + 5);// NaN  (undefined becomes NaN)

console.log("\n=== 4. == vs === Interview Classic Cases ===");
console.log('0 == false        :', 0 == false);        // true
console.log('0 === false       :', 0 === false);       // false
console.log('"" == 0           :', "" == 0);           // true
console.log('"" === 0          :', "" === 0);          // false
console.log('null == undefined :', null == undefined); // true
console.log('null === undefined:', null === undefined);// false
console.log('[] == false       :', [] == false);       // true
console.log('[] == ![]         :', [] == ![]);         // true (mind-bending!)
console.log('NaN === NaN       :', NaN === NaN);       // false
console.log('Number.isNaN(NaN) :', Number.isNaN(NaN)); // true

console.log("\n=== 5. Universal Precise Type Detector Function ===");
function realType(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase();
}

console.log("realType(null)     :", realType(null));        // "null"
console.log("realType(undefined):", realType(undefined));   // "undefined"
console.log("realType([])       :", realType([]));          // "array"
console.log("realType({})       :", realType({}));          // "object"
console.log("realType(new Date()):", realType(new Date())); // "date"
console.log("realType(/abc/i)   :", realType(/abc/i));      // "regexp"
console.log("realType(new Map()):", realType(new Map()));   // "map"
console.log("realType(new Set()):", realType(new Set()));   // "set"

