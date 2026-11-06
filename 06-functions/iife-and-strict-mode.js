// ===============================================
// IIFE and Strict Mode Demonstration
// ===============================================

"use strict"; // Enforce modern strict JavaScript execution

console.log("=== 1. Strict Mode Catching Errors ===");

// 1. Accidental global prevention test:
try {
  // If strict mode was off, this would silently attach to global
  eval("undeclaredVariable = 500");
} catch (err) {
  console.log("Strict mode caught undeclared variable assignment:", err.message);
}

// 2. 'this' in a standalone function:
function showStrictModeThis() {
  return this;
}
console.log("this in strict standalone function:", showStrictModeThis()); // undefined

console.log("\n=== 2. Classic IIFE Module Pattern ===");
// Self-contained Shopping Cart Module using IIFE
const cartManager = (function() {
  // Private internal state
  const items = [];
  const taxRate = 0.18;

  function recalculateTotal() {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Public API returned to consumer
  return {
    addItem(name, price, quantity = 1) {
      items.push({ name, price, quantity });
      console.log(`Added: ${quantity}x ${name} @ ₹${price}`);
    },
    getCartSummary() {
      const subtotal = recalculateTotal();
      const tax = subtotal * taxRate;
      return {
        itemCount: items.length,
        subtotal: subtotal,
        tax: tax,
        finalTotal: subtotal + tax
      };
    }
  };
})();

cartManager.addItem("JavaScript Masterclass Book", 799, 1);
cartManager.addItem("Mechanical Pencil Set", 199, 2);

console.log("Cart Summary:", cartManager.getCartSummary());

// Attempting to access private state:
console.log("cartManager.items:", cartManager.items); // undefined (Safe and Encapsulated!)

console.log("\n=== 3. Modern Arrow IIFE with Return Value ===");
const databaseConnectionConfig = (() => {
  const host = "db.internal.network";
  const port = 5432;
  const dbName = "crm_prod";
  return `postgres://${host}:${port}/${dbName}`;
})();

console.log("Database URI generated via Arrow IIFE:", databaseConnectionConfig);
