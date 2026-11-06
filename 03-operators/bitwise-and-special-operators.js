// ==========================================================
// Bitwise, void, delete & Comma Operators Demonstration
// ==========================================================

console.log("=== 1. Bitwise Operations in Action ===");
const numA = 5; // Binary: 0101
const numB = 3; // Binary: 0011

console.log(`${numA} & ${numB}  (AND) =`, numA & numB); // 0001 -> 1
console.log(`${numA} | ${numB}  (OR)  =`, numA | numB); // 0111 -> 7
console.log(`${numA} ^ ${numB}  (XOR) =`, numA ^ numB); // 0110 -> 6
console.log(`~${numA}      (NOT) =`, ~numA);       // -(5 + 1) -> -6
console.log(`${numA} << 2   (Left Shift) =`, numA << 2); // 5 * 2^2 -> 20
console.log(`${numA} >> 1   (Right Shift)=`, numA >> 1); // Math.floor(5 / 2) -> 2

console.log("\n--- Fast Bitwise Tricks ---");
console.log("Odd/Even test (7 & 1):", (7 & 1) === 1 ? "Odd" : "Even");
console.log("Odd/Even test (8 & 1):", (8 & 1) === 1 ? "Odd" : "Even");
console.log("Bitwise Truncation of 99.789 via | 0:", 99.789 | 0);
console.log("Double NOT ~~45.92:", ~~45.92);

console.log("\n=== 2. Bitwise Permission Flags System ===");
const PERM_READ    = 1 << 0; // 1  (0001)
const PERM_WRITE   = 1 << 1; // 2  (0010)
const PERM_EXECUTE = 1 << 2; // 4  (0100)
const PERM_DELETE  = 1 << 3; // 8  (1000)

let adminPermissions = PERM_READ | PERM_WRITE | PERM_DELETE; // 11 (1011)

function checkPermission(currentMask, targetPerm, name) {
  const hasAccess = (currentMask & targetPerm) === targetPerm;
  console.log(`Has permission [${name}]:`, hasAccess ? "ALLOWED ✅" : "DENIED ❌");
}

checkPermission(adminPermissions, PERM_READ, "READ");
checkPermission(adminPermissions, PERM_WRITE, "WRITE");
checkPermission(adminPermissions, PERM_EXECUTE, "EXECUTE");
checkPermission(adminPermissions, PERM_DELETE, "DELETE");

console.log("\n=== 3. void Operator ===");
console.log("void 0 returns:", void 0);
console.log("void (2 + 2) returns:", void (2 + 2));

function executeWithoutReturning() {
  return void console.log("Internal side effect ran!");
}
console.log("Function returned:", executeWithoutReturning()); // undefined

console.log("\n=== 4. delete Operator ===");
const product = { id: 101, name: "Headphones", price: 1999 };
console.log("Original Product:", product);

delete product.price;
console.log("After deleting 'price':", product);

// Non-configurable test
const nonConfig = {};
Object.defineProperty(nonConfig, "fixedId", { value: "CONST-001", configurable: false });
console.log("Delete non-configurable fixedId:", delete nonConfig.fixedId); // false

console.log("\n=== 5. Comma Operator ===");
let counter = 0;
const lastValue = (counter += 10, counter *= 2, `Final value is ${counter}`);
console.log("Comma expression returned:", lastValue);
