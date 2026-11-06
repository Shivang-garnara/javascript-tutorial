# DSA Patterns in JavaScript (GeeksforGeeks Guide)

Data Structures & Algorithms (DSA) form the foundation of technical coding interviews (GFG Placement 360, LeetCode, FAANG).

---

## 1. Big-O Complexity Cheat Sheet in JavaScript

| Big-O | Name | Example JavaScript Operations |
| :---: | :--- | :--- |
| **O(1)** | Constant | Reading `arr[i]`, `obj.key`, `arr.push()`, `arr.pop()`, `map.get()` |
| **O(log N)** | Logarithmic | Binary search in a sorted array |
| **O(N)** | Linear | Single `for` loop, `arr.indexOf()`, `arr.includes()`, `arr.shift()`, `arr.slice()` |
| **O(N log N)**| Linearithmic | Efficient sorting (`Array.prototype.sort()` using Timsort) |
| **O(N²)** | Quadratic | Nested loops comparing all pairs against each other |

---

## 2. The 4 Essential GFG Problem-Solving Patterns

### Pattern 1: Frequency Counter (Hash Map)
**Problem:** Count occurrences or find duplicates without nested $O(N^2)$ loops.
**Time Complexity:** $O(N)$

```javascript
// Check if two strings are valid anagrams (e.g., "listen" and "silent")
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) return false; // Not found or count is 0
    charCount[char]--;
  }

  return true;
}

console.log("Anagram check:", isAnagram("listen", "silent")); // true
```

---

### Pattern 2: Two Pointers Pattern
**Problem:** Search pairs or reverse items in a sorted array in $O(N)$ time and $O(1)$ extra space.

```javascript
// Check if a string is a palindrome ignoring non-alphanumeric chars
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log("Is 'A man, a plan, a canal: Panama' palindrome?", isPalindrome("A man, a plan, a canal: Panama")); // true
```

---

### Pattern 3: Sliding Window Pattern
**Problem:** Finding subarray or substring sums, maximums, or lengths without recalculating the entire window from scratch.

```javascript
// Maximum sum of k consecutive elements in an array
function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Slide window: subtract left element, add right element
  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log("Max sum of 3 consecutive elements in [2,6,9,2,1,8,5,6,3]:", maxSubarraySum([2,6,9,2,1,8,5,6,3], 3)); // 19 (8+5+6)
```

---

### Pattern 4: Stack & Queue Operations
- **Stack (LIFO - Last In, First Out):** Use `arr.push()` and `arr.pop()`.
- **Queue (FIFO - First In, First Out):** Use `arr.push()` and `arr.shift()`.

```javascript
// Valid Parentheses Checker using a Stack
function isValidParentheses(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log("Parentheses '({[]})' valid?", isValidParentheses("({[]})")); // true
console.log("Parentheses '([)]' valid?", isValidParentheses("([)]"));     // false
```
