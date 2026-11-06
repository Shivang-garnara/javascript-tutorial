// ===============================================
// Level 16: Debugging & Code Quality — script.js
// ===============================================

// 1. Advanced Console Logging
console.log("=== Professional Console Inspection ===");

const team = [
  { name: "Shivang", position: "Lead Engineer", level: "Senior" },
  { name: "Priya", position: "UI/UX Designer", level: "Lead" },
  { name: "Rohan", position: "Fullstack Dev", level: "Mid" }
];

// Display array of objects in a table format
console.table(team);

// Benchmarking execution time
console.time("Array Operation Benchmark");
const largeArray = Array.from({ length: 10000 }, (_, i) => i * 2);
const filtered = largeArray.filter(n => n % 100 === 0);
console.timeEnd("Array Operation Benchmark");

// 2. Custom Error Class
class InsufficientFundsError extends Error {
  constructor(requested, available) {
    super(`Cannot withdraw $${requested}. Available balance: $${available}`);
    this.name = "InsufficientFundsError";
  }
}

// 3. Robust Error Handling Function
function withdrawFromAccount(balance, amount) {
  if (typeof amount !== "number" || amount <= 0) {
    throw new TypeError("Withdrawal amount must be a positive number.");
  }

  if (amount > balance) {
    throw new InsufficientFundsError(amount, balance);
  }

  return balance - amount;
}

try {
  console.log("Attempting valid withdrawal...");
  const newBal = withdrawFromAccount(100, 40);
  console.log("Success! Remaining balance:", newBal);

  console.log("Attempting invalid withdrawal...");
  withdrawFromAccount(50, 150);
} catch (err) {
  if (err instanceof InsufficientFundsError) {
    console.warn("⚠️ Handled Bank Error:", err.message);
  } else {
    console.error("❌ Unexpected Error:", err);
  }
} finally {
  console.log("Transaction session logged to audit log.");
}

