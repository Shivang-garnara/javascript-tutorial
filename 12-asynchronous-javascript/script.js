// ===============================================
// Level 12: Asynchronous JavaScript — script.js
// ===============================================

// Helper function that creates a Promise delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Simulating an asynchronous database fetch
async function getUserRecord(id) {
  console.log(`[Database] Querying user record for ID: ${id}...`);
  await sleep(1500); // Simulate network latency

  if (id === 404) {
    throw new Error("User record not found in database.");
  }

  return { id: id, name: "Shivang Patel", role: "Developer" };
}

// 2. Consuming the async function using try / catch
async function main() {
  console.log("=== App Started ===");

  try {
    // Successful fetch
    const user = await getUserRecord(101);
    console.log("✅ Successfully retrieved:", user);

    // Failed fetch demonstration
    console.log("Testing error scenario...");
    await getUserRecord(404);
  } catch (err) {
    console.error("❌ Caught error:", err.message);
  } finally {
    console.log("Cleanup: Database connection closed.");
  }

  // 3. Concurrency with Promise.all
  console.log("\n--- Testing Parallel Requests with Promise.all ---");
  const task1 = sleep(500).then(() => "Result from Service A");
  const task2 = sleep(800).then(() => "Result from Service B");

  const [resA, resB] = await Promise.all([task1, task2]);
  console.log("Both services resolved in parallel:", { resA, resB });
}

main();

