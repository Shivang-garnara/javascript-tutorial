# The Event Loop: Microtasks vs Macrotasks Master Guide ⚙️

JavaScript is **single-threaded**—it has one Call Stack and executes one piece of code at a time. The **Event Loop** is the mechanism that coordinates the execution of code, collecting and processing events, and executing queued sub-tasks.

---

## 1. The Event Loop Architecture Diagram

```
┌────────────────────────────────────────────────────────┐
│                      CALL STACK                        │
│            (Runs synchronous code to completion)       │
└──────────────────────────┬─────────────────────────────┘
                           │ Stack becomes empty
                           ▼
┌────────────────────────────────────────────────────────┐
│                   MICROTASKS QUEUE                     │
│  (HIGH PRIORITY: Drained COMPLETELY until 0 left!)     │
│  • Promise callbacks (.then, .catch, .finally)         │
│  • queueMicrotask(fn)                                  │
│  • MutationObserver                                    │
└──────────────────────────┬─────────────────────────────┘
                           │ Microtasks fully drained
                           ▼
┌────────────────────────────────────────────────────────┐
│                   BROWSER RENDER                       │
│           (Recalculate styles, layout, paint)          │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                    MACROTASKS QUEUE                    │
│  (Runs exactly ONE macrotask, then re-checks Microtasks)│
│  • setTimeout / setInterval                            │
│  • DOM Events (clicks, keypresses)                     │
│  • I/O, network callbacks                              │
│  • setImmediate (Node.js)                              │
└────────────────────────────────────────────────────────┘
```

---

## 2. Microtask vs Macrotask Rules (Must Memorize for Interviews!)

1. **Synchronous code always runs FIRST.**
2. When the Call Stack empties, the engine checks the **Microtask Queue**.
3. **ALL microtasks are executed immediately, one after another**, until the microtask queue is 100% empty! If a microtask schedules another microtask, it runs in the SAME cycle.
4. Only when there are **zero microtasks remaining**, the engine picks **ONE single macrotask** from the macrotask queue.
5. After executing that one macrotask, the engine repeats the entire cycle (checking microtasks again).

---

## 3. The Classic Interview Execution Order Challenge

What is the output of the following code?

```javascript
console.log("1: Synchronous Start");

setTimeout(() => {
  console.log("2: setTimeout 0ms (Macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise.then (Microtask)");
});

queueMicrotask(() => {
  console.log("4: queueMicrotask (Microtask)");
});

console.log("5: Synchronous End");
```

### Answer & Step-by-Step Reason:
**Output Order:** `1 -> 5 -> 3 -> 4 -> 2`

**Step-by-step breakdown:**
1. `console.log("1")` runs synchronously &rarr; Prints `1`.
2. `setTimeout(..., 0)` registers a timer with the browser Web API. When timer expires (0ms), its callback is placed into the **Macrotask Queue**.
3. `Promise.resolve().then(...)` places its callback into the **Microtask Queue**.
4. `queueMicrotask(...)` places its callback into the **Microtask Queue**.
5. `console.log("5")` runs synchronously &rarr; Prints `5`.
6. Call stack is now empty! Engine checks the **Microtask Queue**.
7. Microtasks execute in FIFO order &rarr; Prints `3`, then prints `4`.
8. Microtask queue is empty. Engine now visits the **Macrotask Queue**.
9. First macrotask runs &rarr; Prints `2`.

---

## 4. `queueMicrotask()` (Modern Native API)

Introduced in modern JavaScript, `queueMicrotask(fn)` allows you to queue an asynchronous microtask explicitly without the overhead of creating a dummy `Promise.resolve().then(...)`.

### Practical Use Case: Scheduling safe deferred work
```javascript
function sendTelemetry(data) {
  // Process immediately, but defer logging until call stack clears:
  queueMicrotask(() => {
    navigator.sendBeacon("/api/telemetry", JSON.stringify(data));
  });
}
```

---

## 5. Summary Cheat-Sheet

| Queue | Priority | Source of Tasks | Execution Behavior |
|---|:---:|---|---|
| **Microtask Queue** | 🥇 **Highest** | Promises, `queueMicrotask`, `MutationObserver` | Executes **all** queued items until empty |
| **Macrotask Queue** | 🥈 **Lower** | `setTimeout`, `setInterval`, DOM events, I/O | Executes **one task per loop cycle** |

