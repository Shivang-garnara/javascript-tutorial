// ========================================================
// AJAX XMLHttpRequest (XHR) Promisification Demo
// ========================================================

console.log("=== 1. Promisified XHR Wrapper Architecture ===");

function promisifiedXHR(method, url, timeoutMs = 5000) {
  return new Promise((resolve, reject) => {
    // Check environment support (Node.js vs Browser)
    if (typeof XMLHttpRequest === "undefined") {
      return resolve({
        mocked: true,
        message: "XHR is a browser DOM API. Simulated success in Node runtime.",
        url: url,
        method: method
      });
    }

    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.timeout = timeoutMs;

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (e) {
          resolve(xhr.responseText);
        }
      } else {
        reject(new Error(`XHR Failed with status code: ${xhr.status}`));
      }
    };

    xhr.onerror = function () {
      reject(new Error("XHR Network failure (Possible CORS block or network disconnect)"));
    };

    xhr.ontimeout = function () {
      reject(new Error(`XHR timed out after ${timeoutMs}ms`));
    };

    xhr.send();
  });
}

// Test executing promisified XHR:
promisifiedXHR("GET", "https://jsonplaceholder.typicode.com/todos/1")
  .then(data => {
    console.log("XHR Request Completed Successfully:");
    console.log(data);
  })
  .catch(err => {
    console.error("XHR Error Handler caught:", err.message);
  });

