// ========================================================
// Circular References & structuredClone Demonstration
// ========================================================

console.log("=== 1. Creating a Circular Graph ===");
const department = {
  deptName: "Engineering",
  headCount: 25
};

const employee = {
  empName: "Shivang",
  title: "Lead Architect",
  department: department
};

// Create the circular link:
department.leadEngineer = employee;

console.log("Circular link established: department -> employee -> department");

console.log("\n=== 2. Attempting JSON.stringify (Catches Error) ===");
try {
  JSON.stringify(department);
} catch (err) {
  console.log("Caught JSON error:", err.name, "-", err.message);
}

console.log("\n=== 3. Safe Stringification via WeakSet Replacer ===");
function safeJsonStringify(rootObj) {
  const visited = new WeakSet();
  return JSON.stringify(rootObj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return "[Circular Reference Detected]";
      }
      visited.add(value);
    }
    return value;
  }, 2);
}

console.log("Safe JSON output:\n" + safeJsonStringify(department));

console.log("\n=== 4. Modern structuredClone() with Circular References ===");
if (typeof structuredClone === "function") {
  const clonedDept = structuredClone(department);
  console.log("Cloned Dept Name:", clonedDept.deptName);
  console.log("Cloned Dept Lead Name:", clonedDept.leadEngineer.empName);
  console.log("Cloned Dept has new memory identity:", clonedDept !== department); // true
  console.log("Cloned cycle points to cloned copy:", clonedDept.leadEngineer.department === clonedDept); // true
} else {
  console.log("structuredClone is not supported in this runtime environment.");
}
