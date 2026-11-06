// ========================================================
// Base64 Encoding & Geolocation Simulation Demo
// ========================================================

console.log("=== 1. Standard Base64 Encoding with btoa & atob ===");
const apiCredentials = "client_app_id:secret_key_99812";

// Encode
const base64AuthHeader = typeof btoa === "function" ? btoa(apiCredentials) : Buffer.from(apiCredentials).toString("base64");
console.log("Encoded Authorization Header:", `Basic ${base64AuthHeader}`);

// Decode
const decodedCredentials = typeof atob === "function" ? atob(base64AuthHeader) : Buffer.from(base64AuthHeader, "base64").toString("utf-8");
console.log("Decoded Credentials String :", decodedCredentials);

console.log("\n=== 2. Unicode Safe Base64 Handling (Emojis & Currency) ===");
function safeUnicodeToBase64(str) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "utf-8").toString("base64");
  }
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode("0x" + p1)));
}

function safeUnicodeFromBase64(base64Str) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(base64Str, "base64").toString("utf-8");
  }
  return decodeURIComponent(Array.prototype.map.call(atob(base64Str), c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
}

const indianCurrencyText = "Invoice: ₹15,499.00 paid for JavaScript Fullstack Masterclass 🚀";
const encodedUnicode = safeUnicodeToBase64(indianCurrencyText);
console.log("Unicode Safe Base64:", encodedUnicode);
console.log("Decoded Back Cleanly:", safeUnicodeFromBase64(encodedUnicode));

console.log("\n=== 3. Geolocation API Structure (Browser Only) ===");
if (typeof navigator !== "undefined" && navigator.geolocation) {
  console.log("Geolocation API is natively available in this environment.");
} else {
  console.log("Geolocation API requires a secure HTTPS browser context with user permission.");
  console.log("Check '11-browser-features-and-storage/geolocation-and-base64.md' for full syntax!");
}
