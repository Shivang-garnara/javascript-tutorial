# Web Workers & Atomics: Multi-Threading in JavaScript 🧵

JavaScript's main thread is responsible for handling user input, UI rendering, layout calculation, and script execution. If you run a heavy synchronous loop (e.g., sorting 10 million items or processing an image filter), the entire browser tab freezes!

**Web Workers** allow you to execute JavaScript in isolated background threads without blocking the user interface.

---

## 1. How Web Workers Work

```
┌───────────────────────────────────────┐
│              MAIN THREAD              │
│  - Renders UI (DOM) at 60 FPS         │
│  - Handles Clicks, Typing, Scrolling  │
└──────────────────┬────────────────────┘
                   │ worker.postMessage(data)
                   │
                   ▼ onmessage
┌───────────────────────────────────────┐
│          WEB WORKER THREAD            │
│  - Runs in background                 │
│  - Processes heavy calculations       │
│  - NO access to DOM or 'window'       │
└───────────────────────────────────────┘
```

### Basic Syntax:
```javascript
// 1. In main.js:
const worker = new Worker("worker-task.js");

// Send job to background thread:
worker.postMessage({ action: "CALCULATE_PRIMES", limit: 5000000 });

// Listen for response:
worker.onmessage = function (e) {
  console.log("Calculated Primes Count:", e.data.result);
};

// Terminate worker when done:
// worker.terminate();
```

```javascript
// 2. In worker-task.js (Background Thread):
self.onmessage = function (e) {
  const { action, limit } = e.data;
  if (action === "CALCULATE_PRIMES") {
    let primesCount = 0;
    // Heavy computation...
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) primesCount++;
    }
    // Send result back to main thread:
    self.postMessage({ result: primesCount });
  }
};
```

---

## 2. What Web Workers CAN and CANNOT Do

| Allowed in Web Workers ✅ | Prohibited in Web Workers ❌ |
|---|---|
| Pure JavaScript calculations | Direct DOM manipulation (`document.getElementById`) |
| `fetch()` / `XMLHttpRequest` | The `window` object |
| `setTimeout()` / `setInterval()` | `localStorage` / `sessionStorage` |
| `IndexedDB` access | Direct parent page DOM element interaction |
| `importScripts()` / ES Modules | Alert / Confirm dialogs |

---

## 3. High-Performance Concurrency: `SharedArrayBuffer` & `Atomics`

Normally, `worker.postMessage(data)` clones data (using the structured clone algorithm), which introduces copying overhead for giant datasets (e.g., 200MB 3D meshes or game physics).

**`SharedArrayBuffer`** allows multiple threads (main thread + workers) to read and write to the **exact same block of shared memory**.

### The Danger: Race Conditions
If Worker 1 and Worker 2 try to increment the same number at the exact same millisecond, they can overwrite each other.

### The Solution: `Atomics`
The `Atomics` object provides predictable, thread-safe atomic operations:

```javascript
// Allocate 1024 bytes of shared memory:
const sharedBuffer = new SharedArrayBuffer(1024);
const sharedArray = new Int32Array(sharedBuffer);

// Thread-safe atomic addition (No race condition!):
Atomics.add(sharedArray, 0, 1);

// Thread-safe atomic reading:
const currentValue = Atomics.load(sharedArray, 0);

// Thread-safe synchronization:
// Atomics.wait(sharedArray, index, expectedValue) -> Sleeps thread until notified
// Atomics.notify(sharedArray, index, count)        -> Wakes up sleeping threads
```

> ⚠️ **Security Notice:** Following the Meltdown/Spectre CPU vulnerability disclosure, browsers require **Cross-Origin Isolation** HTTP headers (`Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp`) to enable `SharedArrayBuffer`.

