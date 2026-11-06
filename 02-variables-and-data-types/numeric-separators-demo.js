// ========================================================
// Numeric Separators & Numeral Bases Demonstration
// ========================================================

console.log("=== 1. Numeric Separator (ES2021) in Action ===");
const nationalGDP = 3_750_000_000_000;
const precisionPi = 3.14159_26535_89793;
const hexAddress = 0x7F_FF_00_12;

console.log("Formatted GDP Number :", nationalGDP);
console.log("Formatted Pi Number  :", precisionPi);
console.log("Hex Address Decoded  :", hexAddress);

console.log("\n=== 2. Number Bases & Prefix Representation ===");
const dec = 42;
const bin = 0b101010;
const oct = 0o52;
const hex = 0x2A;

console.log(`All equal 42: dec=${dec}, bin=${bin}, oct=${oct}, hex=${hex}`);
console.log("Are bin and hex equal to dec?", bin === dec && hex === dec); // true

console.log("\n=== 3. Bidirectional Base Conversion ===");
const sampleNumber = 170;

// Base to string
const binaryString = sampleNumber.toString(2);
const hexString = sampleNumber.toString(16);

console.log(`${sampleNumber} in binary is: ${binaryString}`);
console.log(`${sampleNumber} in hex is   : ${hexString}`);

// String back to decimal number
console.log(`parseInt("${binaryString}", 2)  =`, parseInt(binaryString, 2));
console.log(`parseInt("${hexString}", 16)     =`, parseInt(hexString, 16));
