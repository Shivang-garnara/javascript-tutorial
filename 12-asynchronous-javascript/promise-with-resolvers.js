// ========================================================
// Promise.withResolvers() (ES2024 Standard) Demonstration
// ========================================================

// Polyfill if running on older engine:
if (!Promise.withResolvers) {
  Promise.withResolvers = function () {
    let resolve, reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

console.log("=== 1. Basic Promise.withResolvers() Usage ===");
const { promise, resolve, reject } = Promise.withResolvers();

// Attach listener
promise.then(data => {
  console.log("Promise resolved with payload:", data);
});

// Resolve outside of any callback!
console.log("Triggering resolve() from outside...");
resolve({ status: 200, message: "ES2024 Promise Resolved!" });

console.log("\n=== 2. Real-World Async Task Queue Pattern ===");
class AsyncTaskQueue {
  constructor() {
    this.queue = [];
  }

  // Returns a promise that resolves when it's this task's turn
  enqueue(taskName) {
    const { promise, resolve } = Promise.withResolvers();
    this.queue.push({ taskName, resolve });
    console.log(`[Queue] Enqueued: ${taskName}`);
    return promise;
  }

  processNext() {
    if (this.queue.length === 0) {
      console.log("[Queue] No tasks remaining.");
      return;
    }
    const { taskName, resolve } = this.queue.shift();
    console.log(`[Queue] Processing: ${taskName}`);
    resolve(`Task [${taskName}] completed!`);
  }
}

const taskManager = new AsyncTaskQueue();

// Register 2 asynchronous tasks
const job1 = taskManager.enqueue("Sync CRM Contacts");
const job2 = taskManager.enqueue("Generate Invoices PDF");

job1.then(msg => console.log("Job 1 Result:", msg));
job2.then(msg => console.log("Job 2 Result:", msg));

// Process them one after another:
taskManager.processNext();
taskManager.processNext();

