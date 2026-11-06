// ===============================================
// Level 6: Functions — Code Examples
// ===============================================

// 1. Function Declaration
function calculateArea(width, height) {
  return width * height;
}
console.log("Area of 5x10:", calculateArea(5, 10));

// 2. Arrow Function with Default Parameters
const calculateShipping = (weightKg, isExpress = false) => {
  const baseRate = weightKg * 5;
  return isExpress ? baseRate + 20 : baseRate;
};
console.log("Standard shipping (3kg):", calculateShipping(3));
console.log("Express shipping (3kg):", calculateShipping(3, true));

// 3. Rest Parameters (...args)
function sumAll(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
console.log("Sum all:", sumAll(10, 20, 30, 40)); // 100

// 4. Callback Functions
function processOrder(orderId, callback) {
  console.log(`Processing order #${orderId}...`);
  callback(`Order #${orderId} confirmed!`);
}

processOrder(1045, (statusMessage) => {
  console.log("Customer Notification:", statusMessage);
});

// 5. Closure in action
function makeBankVault(initialBalance) {
  let balance = initialBalance; // Private variable enclosed in closure

  return {
    deposit: (amount) => {
      balance += amount;
      return `Deposited $${amount}. New balance: $${balance}`;
    },
    getBalance: () => balance
  };
}

const myVault = makeBankVault(500);
console.log(myVault.deposit(150));
console.log("Current balance check:", myVault.getBalance());
