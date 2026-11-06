// ==========================================================
// Higher-Order Array Methods Practice & Demonstration
// ==========================================================

const dataset = [
  { id: 1, name: "Aarav", dept: "Engineering", salary: 85000, active: true },
  { id: 2, name: "Sneha", dept: "Design", salary: 65000, active: true },
  { id: 3, name: "Vikram", dept: "Engineering", salary: 95000, active: false },
  { id: 4, name: "Pooja", dept: "Marketing", salary: 55000, active: true },
  { id: 5, name: "Shivang", dept: "Engineering", salary: 110000, active: true },
  { id: 6, name: "Ananya", dept: "Design", salary: 72000, active: false }
];

console.log("=== 1. map(): Format Display Names and Annual Compensation ===");
const employeeCards = dataset.map(emp => {
  return `${emp.name} (${emp.dept}) - ₹${emp.salary.toLocaleString("en-IN")}/mo`;
});
console.log(employeeCards.slice(0, 3));

console.log("\n=== 2. filter(): Active Engineering Team ===");
const activeEngineers = dataset.filter(emp => emp.active && emp.dept === "Engineering");
console.log(activeEngineers.map(e => e.name)); // ["Aarav", "Shivang"]

console.log("\n=== 3. reduce(): Department-wise Total Payroll ===");
const payrollByDept = dataset.reduce((acc, emp) => {
  acc[emp.dept] = (acc[emp.dept] || 0) + emp.salary;
  return acc;
}, {});
console.log("Payroll Breakdown:", payrollByDept);

console.log("\n=== 4. find() and findIndex() ===");
const highestEarner = dataset.find(emp => emp.salary >= 100000);
console.log("First employee earning ₹1,00,000+:", highestEarner?.name);

const inactiveIndex = dataset.findIndex(emp => !emp.active);
console.log("First inactive employee index:", inactiveIndex);

console.log("\n=== 5. some() and every() Verification ===");
const anyHighSalary = dataset.some(emp => emp.salary > 100000);
console.log("Has any employee earning > 100k?", anyHighSalary); // true

const allActive = dataset.every(emp => emp.active);
console.log("Are all employees active?", allActive); // false

console.log("\n=== 6. flat() and flatMap() ===");
const studentTags = [
  ["frontend", "react"],
  ["backend", ["node", "express"]],
  ["database", "mongodb"]
];

console.log("Flattened 1 level:", studentTags.flat());
console.log("Flattened Infinity:", studentTags.flat(Infinity));

const wordsList = ["Full Stack", "MERN Developer"];
const allTokens = wordsList.flatMap(phrase => phrase.toLowerCase().split(" "));
console.log("Tokens via flatMap:", allTokens);

console.log("\n=== 7. Interview Problem: Count Element Frequencies via reduce ===");
const skills = ["js", "react", "node", "js", "python", "react", "js"];
const frequencyMap = skills.reduce((map, skill) => {
  map[skill] = (map[skill] || 0) + 1;
  return map;
}, {});
console.log("Skills Frequency:", frequencyMap);
