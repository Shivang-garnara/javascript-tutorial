// ========================================================
// Performance Benchmarking & Algorithm Comparison Script
// ========================================================

console.log("=== 1. Comparing Loop Iteration Performance (1,000,000 iterations) ===");
const SIZE = 1_000_000;
const testArray = new Array(SIZE).fill(1);

// Test 1: Traditional for loop
const startTraditional = performance.now();
let sum1 = 0;
for (let i = 0; i < testArray.length; i++) {
  sum1 += testArray[i];
}
const timeTraditional = (performance.now() - startTraditional).toFixed(3);
console.log(`Traditional for loop : ${timeTraditional} ms (Sum: ${sum1})`);

// Test 2: for...of loop
const startForOf = performance.now();
let sum2 = 0;
for (const n of testArray) {
  sum2 += n;
}
const timeForOf = (performance.now() - startForOf).toFixed(3);
console.log(`for...of loop        : ${timeForOf} ms (Sum: ${sum2})`);

// Test 3: Array.prototype.reduce
const startReduce = performance.now();
const sum3 = testArray.reduce((acc, n) => acc + n, 0);
const timeReduce = (performance.now() - startReduce).toFixed(3);
console.log(`Array.reduce method  : ${timeReduce} ms (Sum: ${sum3})`);

console.log("\n=== 2. console.time() Labeling Demo ===");
console.time("Set Deduplication Benchmark (500,000 items)");
const duplicates = [];
for (let i = 0; i < 500_000; i++) {
  duplicates.push(i % 100);
}
const uniqueCount = new Set(duplicates).size;
console.timeEnd("Set Deduplication Benchmark (500,000 items)");
console.log("Unique elements extracted:", uniqueCount);

