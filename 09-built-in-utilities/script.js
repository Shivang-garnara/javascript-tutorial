// ===============================================
// Level 9: Built-in Utilities — Code Examples
// ===============================================

// 1. String Utilities
const userInput = "   support@antigravity.ai   ";
const sanitizedEmail = userInput.trim().toLowerCase();
console.log("Sanitized Email:", sanitizedEmail);

const sentence = "I love Python and Python is great!";
const replaced = sentence.replaceAll("Python", "JavaScript");
console.log("Updated Sentence:", replaced);

// 2. Math Methods
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.round(4.5):", Math.round(4.5)); // 5

// Random integer between 1 and 100
const random100 = Math.floor(Math.random() * 100) + 1;
console.log("Random number (1-100):", random100);

// 3. Date Handling
const today = new Date();
console.log("Current Date/Time:", today.toISOString());
console.log("Readable Local Date:", today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}));

// 4. Set for Unique Collections
const duplicateEmails = ["user1@test.com", "user2@test.com", "user1@test.com"];
const uniqueEmailList = [...new Set(duplicateEmails)];
console.log("Deduplicated Emails:", uniqueEmailList);

// 5. Map Keyed Collection
const productPrices = new Map();
productPrices.set("Apple", 1.50);
productPrices.set("Banana", 0.75);
console.log("Price of Apple:", productPrices.get("Apple"));

// 6. Regular Expressions
const usernameRegex = /^[a-zA-Z0-9_]{4,12}$/;
console.log("Is 'shivang_01' valid?", usernameRegex.test("shivang_01")); // true
console.log("Is 'sh' valid?", usernameRegex.test("sh"));                 // false (too short)

