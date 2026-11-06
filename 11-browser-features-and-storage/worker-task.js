// ========================================================
// Background Web Worker Script (Runs on dedicated thread)
// ========================================================

self.onmessage = function (e) {
  const { limit } = e.data;
  const startTime = performance.now();

  let primeCount = 0;
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeCount++;
  }

  const durationMs = (performance.now() - startTime).toFixed(2);

  // Post result back to main UI thread:
  self.postMessage({
    primeCount: primeCount,
    limit: limit,
    timeTakenMs: durationMs
  });
};
