# JavaScript Performance Benchmarking & Profiling Guide ⚡

Writing clean code is good; writing high-performance code that doesn't stutter or lag is what separates senior developers. JavaScript provides built-in tools for microsecond-precise performance benchmarking and profiling.

---

## 1. High-Resolution Timing: `performance.now()` vs `Date.now()`

| Feature | `Date.now()` | `performance.now()` |
|---|---|---|
| **Precision** | Milliseconds ($10^{-3}$ sec) | **Microseconds** ($10^{-6}$ sec, fractional numbers like `14.802ms`) |
| **Monotonic Clock** | ❌ Subject to system clock changes (NTP time adjustments) | ✅ **Monotonic** (strictly increasing from page load origin time) |
| **Best Used For** | Displaying current clock date & time | **Benchmarking execution speed and algorithms** |

```javascript
const startTime = performance.now();

// Code block to measure:
for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i);
}

const endTime = performance.now();
console.log(`Execution took ${(endTime - startTime).toFixed(3)} ms`);
```

---

## 2. Console Benchmarking: `console.time()` & `console.timeEnd()`

For quick, labeled profiling without writing arithmetic:

```javascript
console.time("Array Creation (100k items)");

const items = [];
for (let i = 0; i < 100_000; i++) {
  items.push(i);
}

console.timeEnd("Array Creation (100k items)");
// Output: Array Creation (100k items): 2.418ms
```

---

## 3. Critical Browser Performance Bottlenecks

### A. Layout Thrashing (Forced Reflow & Repaint)
Browsers batch DOM style changes together. If you alternate between **writing to the DOM** and **reading layout measurements** inside a loop, the browser is forced to synchronously recalculate the entire page layout on every single iteration!

```javascript
// ❌ Layout Thrashing (Horribly Slow!):
elements.forEach(el => {
  const width = el.offsetWidth; // Forces synchronous layout calculation!
  el.style.width = (width + 10) + "px"; // Invalidates layout!
});

// ✅ Fast Batching (Read all first, then write all together):
const widths = elements.map(el => el.offsetWidth); // Batch Read
elements.forEach((el, i) => {
  el.style.width = (widths[i] + 10) + "px"; // Batch Write
});
```

### B. Memory Leaks Checklist:
1. **Uncleared Timers:** Always store `timerId = setInterval(...)` and run `clearInterval(timerId)` when navigating away.
2. **Orphaned Event Listeners:** If you remove a DOM element, remove its custom event listeners or use event delegation on the parent.
3. **Forgotten Global Variables:** Accidental globals (`foo = "data"`) stay pinned in memory forever. Always use `'use strict';`.

