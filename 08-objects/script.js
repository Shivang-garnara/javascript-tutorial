// ===============================================
// Level 8: Objects — Code Examples
// ===============================================

// 1. Object definition & dot vs bracket notation
const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  chip: "M3 Max",
  price: 2499,
  isAvailable: true
};

console.log("Dot notation:", laptop.brand);
const propToRead = "price";
console.log("Bracket notation with variable:", laptop[propToRead]);

// 2. Object methods and 'this'
const bankAccount = {
  accountHolder: "Shivang Patel",
  balance: 1500,
  deposit(amount) {
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  },
  statement() {
    return `${this.accountHolder}'s current balance: $${this.balance}`;
  }
};

console.log(bankAccount.statement());
console.log(bankAccount.deposit(500));

// 3. Object destructuring & Spread
const { accountHolder, balance } = bankAccount;
console.log(`Destructured -> Holder: ${accountHolder}, Balance: $${balance}`);

const updatedLaptop = { ...laptop, price: 2299, color: "Space Black" };
console.log("Updated Laptop via Spread:", updatedLaptop);

// 4. Object inspection utilities
console.log("Keys:", Object.keys(laptop));
console.log("Values:", Object.values(laptop));

// 5. JSON serialization
const serverPayload = JSON.stringify(updatedLaptop);
console.log("JSON String to send over API:", serverPayload);

const parsedBack = JSON.parse(serverPayload);
console.log("Parsed back to JS Object:", parsedBack.model);

