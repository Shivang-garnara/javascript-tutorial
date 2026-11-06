// ==========================================================
// Promise Combinators Demonstration: all, allSettled, race, any
// ==========================================================

const delay = (ms, value, shouldReject = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`Failed: ${value}`));
      } else {
        resolve(`Success: ${value} (in ${ms}ms)`);
      }
    }, ms);
  });
};

async function runCombinatorsDemo() {
  console.log("=== 1. Promise.all() — Successful Batch ===");
  try {
    const results = await Promise.all([
      delay(100, "User Profile"),
      delay(200, "User Settings"),
      delay(150, "User Orders")
    ]);
    console.log("Promise.all fulfilled all:", results);
  } catch (err) {
    console.error("Promise.all error:", err.message);
  }

  console.log("\n=== 2. Promise.all() — Fail-Fast Behavior ===");
  try {
    await Promise.all([
      delay(100, "Service A"),
      delay(150, "Service B", true), // This will reject!
      delay(300, "Service C")
    ]);
  } catch (err) {
    console.log("Promise.all rejected immediately upon first error:", err.message);
  }

  console.log("\n=== 3. Promise.allSettled() — Never Rejects ===");
  const batchWithFailures = await Promise.allSettled([
    delay(100, "Send Welcome Email"),
    delay(120, "Sync Analytics", true), // Fails
    delay(80, "Update Local Cache")
  ]);

  batchWithFailures.forEach((res, index) => {
    if (res.status === "fulfilled") {
      console.log(`[Task ${index + 1}] Passed: ${res.value}`);
    } else {
      console.log(`[Task ${index + 1}] Failed gracefully: ${res.reason.message}`);
    }
  });

  console.log("\n=== 4. Promise.race() — Timeout Pattern ===");
  const slowTask = delay(500, "Database Query");
  const timeoutGuard = delay(200, "Timeout Exceeded!", true);

  try {
    const raceWinner = await Promise.race([slowTask, timeoutGuard]);
    console.log("Race winner:", raceWinner);
  } catch (err) {
    console.log("Timeout triggered before database query returned:", err.message);
  }

  console.log("\n=== 5. Promise.any() — First Success Wins ===");
  try {
    const firstSuccessfulServer = await Promise.any([
      delay(50, "Primary Server 1", true), // Rejected
      delay(150, "Backup Server 2"),       // Succeeded!
      delay(300, "Tertiary Server 3")
    ]);
    console.log("Promise.any retrieved fastest successful response:", firstSuccessfulServer);
  } catch (err) {
    console.error("All failed:", err);
  }
}

runCombinatorsDemo();
