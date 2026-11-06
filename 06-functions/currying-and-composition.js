// ========================================================
// Currying & Function Composition In Action
// ========================================================

console.log("=== 1. Curried Logger & API Endpoint Builder ===");
// Currying allows creating specialized loggers with predefined contexts
const logger = level => component => message => {
  const timestamp = new Date().toLocaleTimeString();
  return `[${timestamp}] [${level.toUpperCase()}] [${component}]: ${message}`;
};

const errorLogger = logger("ERROR");
const authErrorLogger = errorLogger("AuthService");

console.log(authErrorLogger("Invalid JWT token detected"));
console.log(authErrorLogger("Password mismatch for user #1029"));

console.log("\n=== 2. Generic Automatic Curry Function ===");
function autoCurry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
  };
}

function calculateDiscount(basePrice, taxPercent, discountPercent) {
  const priceWithTax = basePrice * (1 + taxPercent / 100);
  return priceWithTax * (1 - discountPercent / 100);
}

const curriedDiscount = autoCurry(calculateDiscount);

// Create standard GST (18%) pricing calculator:
const standardGstCalculator = curriedDiscount(1000)(18);

console.log("Festival Discount (20% off): ₹", standardGstCalculator(20).toFixed(2));
console.log("Clearance Discount (50% off): ₹", standardGstCalculator(50).toFixed(2));

console.log("\n=== 3. Function Composition with pipe() Pipeline ===");
const pipe = (...functions) => input =>
  functions.reduce((accumulator, fn) => fn(accumulator), input);

// E-commerce checkout pricing pipeline functions:
const applyVoucher = order => ({ ...order, total: order.total - 200 });
const applyShipping = order => ({ ...order, total: order.total + 50 });
const applyTax = order => ({ ...order, total: order.total * 1.18 });
const formatSummary = order => `Order #${order.orderId} Final Total: ₹${order.total.toFixed(2)}`;

const processOrder = pipe(
  applyVoucher,
  applyShipping,
  applyTax,
  formatSummary
);

const initialOrder = { orderId: "ORD-5541", total: 1500 };
console.log(processOrder(initialOrder));

