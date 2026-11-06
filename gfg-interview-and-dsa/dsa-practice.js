// =========================================================
// GeeksforGeeks (GFG) Technical Interview Coding Challenges
// File: dsa-practice.js
// =========================================================

// ---------------------------------------------------------
// 1. Two Sum Problem (O(N) with Hash Map)
// Given array of numbers and target, return indices of two numbers adding to target.
// ---------------------------------------------------------
function twoSum(nums, target) {
  const seen = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

console.log("Two Sum [2, 7, 11, 15] target=9 -> Indices:", twoSum([2, 7, 11, 15], 9)); // [0, 1]

// ---------------------------------------------------------
// 2. Deep Flatten Array without Array.prototype.flat()
// Recursively flattens an array of any nesting depth.
// ---------------------------------------------------------
function deepFlatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(deepFlatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const nestedArray = [1, [2, [3, [4, 5]]], 6];
console.log("Deep Flattened:", deepFlatten(nestedArray)); // [1, 2, 3, 4, 5, 6]

// ---------------------------------------------------------
// 3. Debounce Implementation (Essential Frontend Interview Question)
// Delays execution until 'delayMs' milliseconds have passed since last trigger.
// ---------------------------------------------------------
function debounce(func, delayMs) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delayMs);
  };
}

// ---------------------------------------------------------
// 4. Throttle Implementation
// Ensures function executes at most once per every 'intervalMs' milliseconds.
// ---------------------------------------------------------
function throttle(func, intervalMs) {
  let lastExecution = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastExecution >= intervalMs) {
      lastExecution = now;
      func.apply(this, args);
    }
  };
}

// ---------------------------------------------------------
// 5. Check if Object is Empty
// ---------------------------------------------------------
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log("Is {} empty?", isObjectEmpty({})); // true
console.log("Is { a: 1 } empty?", isObjectEmpty({ a: 1 })); // false

