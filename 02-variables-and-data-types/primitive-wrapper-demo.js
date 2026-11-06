// ========================================================
// Primitive Wrapper Types & Auto-Boxing Demonstration
// ========================================================

console.log("=== 1. Auto-Boxing in Action ===");
const primitiveText = "javascript";

// Method call triggers auto-boxing:
console.log("Upper Case :", primitiveText.toUpperCase());
console.log("Character  :", primitiveText.charAt(0));
console.log("Primitive type is still strictly string:", typeof primitiveText); // "string"

console.log("\n=== 2. The Disappearing Property Demonstration ===");
const book = "Clean Code";
book.author = "Robert C. Martin"; // Silently discarded!

console.log("book.author :", book.author); // undefined

console.log("\n=== 3. Comparing Type Casting vs Object Wrapping ===");
const primStr = String("hello");
const wrapStr = new String("hello");

console.log("typeof primStr :", typeof primStr); // "string"
console.log("typeof wrapStr :", typeof wrapStr); // "object"
console.log("primStr == wrapStr  :", primStr == wrapStr);  // true (Loose comparison coerces)
console.log("primStr === wrapStr :", primStr === wrapStr); // false (Different types!)

console.log("\n=== 4. The Famous new Boolean(false) Gotcha ===");
const falsePrimitive = false;
const falseWrapper = new Boolean(false);

console.log("Boolean(false) is falsy :", Boolean(falsePrimitive)); // false
console.log("new Boolean(false) is TRUTHY :", Boolean(falseWrapper)); // true!

if (falseWrapper) {
  console.log("⚠️ WARNING: Code executed inside if (new Boolean(false)) because objects are always truthy!");
}

