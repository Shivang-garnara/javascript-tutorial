// ========================================================
// Recursion & Call Stack Demonstration
// ========================================================

console.log("=== 1. Factorial & Fibonacci via Recursion ===");
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5)); // 120
console.log("7! =", factorial(7)); // 5040

console.log("\n=== 2. Recursive Deep Search in File Tree Structure ===");
const fileSystemTree = {
  name: "project-root",
  type: "folder",
  children: [
    { name: "index.html", type: "file" },
    {
      name: "src",
      type: "folder",
      children: [
        { name: "main.js", type: "file" },
        {
          name: "components",
          type: "folder",
          children: [
            { name: "Navbar.js", type: "file" },
            { name: "Modal.js", type: "file" }
          ]
        }
      ]
    },
    { name: "package.json", type: "file" }
  ]
};

function searchFiles(node, targetFileName, currentPath = "") {
  const path = `${currentPath}/${node.name}`;

  if (node.type === "file" && node.name === targetFileName) {
    return path;
  }

  if (node.children) {
    for (const child of node.children) {
      const foundPath = searchFiles(child, targetFileName, path);
      if (foundPath) return foundPath; // Return path immediately when found
    }
  }

  return null;
}

console.log("Searching for 'Modal.js' in nested tree:");
console.log("Found at:", searchFiles(fileSystemTree, "Modal.js"));

console.log("\n=== 3. Simulating and Catching Stack Overflow ===");
let callCount = 0;
function triggerStackOverflow() {
  callCount++;
  triggerStackOverflow();
}

try {
  triggerStackOverflow();
} catch (err) {
  console.log(`Caught Stack Overflow safely after ${callCount.toLocaleString()} frames:`);
  console.log(`${err.name}: ${err.message}`);
}
