// ===============================================================
// this Keyword, Explicit Binding (call, apply, bind) Demo Script
// ===============================================================

console.log("=== 1. Implicit Binding vs Losing Context ===");
const bankAccount = {
  accountHolder: "Shivang",
  balance: 50000,
  getBalance() {
    return `${this.accountHolder}'s Balance: ₹${this.balance.toLocaleString("en-IN")}`;
  }
};

// Direct invocation (Implicit binding works)
console.log("Direct Call:", bankAccount.getBalance());

// Storing in a variable (Context lost!)
const detached = bankAccount.getBalance;
try {
  console.log("Detached Call:", detached());
} catch (err) {
  console.log("Detached call failed or returned undefined properties");
}

console.log("\n=== 2. Explicit Binding: call(), apply(), bind() ===");
function transferFunds(amount, recipient, reason) {
  if (this.balance < amount) {
    return `Transaction Declined: Insufficient balance for ${this.accountHolder}`;
  }
  this.balance -= amount;
  return `Success: ${this.accountHolder} sent ₹${amount} to ${recipient} for [${reason}]. New Balance: ₹${this.balance}`;
}

const aliceAccount = { accountHolder: "Alice", balance: 20000 };
const bobAccount = { accountHolder: "Bob", balance: 8000 };

// Using .call() - individual arguments
console.log("Using call():");
console.log(transferFunds.call(aliceAccount, 3500, "Shivang", "Design Work"));

// Using .apply() - arguments array
console.log("\nUsing apply():");
console.log(transferFunds.apply(bobAccount, [1200, "Grocery Store", "Monthly Groceries"]));

// Using .bind() - creating reusable specialized functions
console.log("\nUsing bind() to create a reusable sender:");
const aliceTransfer = transferFunds.bind(aliceAccount);
console.log(aliceTransfer(500, "Coffee Shop", "Coffee"));

console.log("\n=== 3. Arrow Functions vs Regular Functions with this ===");
const counter = {
  count: 0,
  regularMethod: function() {
    console.log("Regular Method 'this' is:", this === counter ? "counter object ✅" : "other");
  },
  arrowMethod: () => {
    console.log("Arrow Method 'this' is:", this === counter ? "counter object" : "global / lexical parent ⚠️");
  },
  runDelayedCounter() {
    console.log("Starting timer with Arrow Function...");
    setTimeout(() => {
      this.count += 10;
      console.log(`Timer finished! Current count is ${this.count} (Retained this!)`);
    }, 100);
  }
};

counter.regularMethod();
counter.arrowMethod();
counter.runDelayedCounter();

console.log("\n=== 4. Method Borrowing Pattern ===");
const numbersObj = {
  0: "first",
  1: "second",
  2: "third",
  length: 3
};

// Borrowing Array.prototype.join for an array-like object:
const joined = Array.prototype.join.call(numbersObj, " -> ");
console.log("Borrowed Array.join:", joined);

