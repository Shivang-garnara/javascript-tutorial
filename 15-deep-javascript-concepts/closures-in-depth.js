// ========================================================
// Closures in Depth: Practical Engineering Patterns
// ========================================================

console.log("=== 1. Private Counter Factory ===");
function makeCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() { count++; return count; },
    decrement() { count--; return count; },
    reset() { count = initialValue; return count; },
    value() { return count; }
  };
}

const counterA = makeCounter(10);
const counterB = makeCounter(100);

console.log("Counter A ++:", counterA.increment()); // 11
console.log("Counter A ++:", counterA.increment()); // 12
console.log("Counter B ++:", counterB.increment()); // 101
console.log("Counter A and B have separate isolated memory closures!");

console.log("\n=== 2. Real-World Memoization Cache via Closure ===");
function createMemoizedFibonacci() {
  const cache = new Map();
  let calculationsCount = 0;

  function fib(n) {
    if (n <= 1) return n;
    if (cache.has(n)) {
      return cache.get(n);
    }
    calculationsCount++;
    const value = fib(n - 1) + fib(n - 2);
    cache.set(n, value);
    return value;
  }

  return {
    calculate: fib,
    getCalculationsCount: () => calculationsCount
  };
}

const memoizedFib = createMemoizedFibonacci();
console.log("Fib(30):", memoizedFib.calculate(30));
console.log("Actual recursive operations performed:", memoizedFib.getCalculationsCount());
console.log("Fib(30) instant cached lookup:", memoizedFib.calculate(30));

console.log("\n=== 3. Simulating the Classic Loop Closure Trap ===");
console.log("Running block-scoped let timeouts (prints 1, 2, 3):");
for (let step = 1; step <= 3; step++) {
  setTimeout(() => {
    console.log(`[Timer Step] = ${step} (Clean lexical environment)`);
  }, step * 50);
}
