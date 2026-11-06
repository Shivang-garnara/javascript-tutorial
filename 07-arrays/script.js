// ===============================================
// Level 7: Arrays — Code Examples
// ===============================================

// 1. Basic operations
const techStack = ["HTML", "CSS", "JavaScript"];
techStack.push("React");    // Add to end
techStack.unshift("Git");   // Add to start
console.log("Updated Stack:", techStack);

techStack.pop();            // Removes "React"
console.log("After pop:", techStack);

// 2. map() - Transform items
const pricesInUSD = [10, 25, 50, 100];
const pricesInEUR = pricesInUSD.map(price => (price * 0.92).toFixed(2));
console.log("EUR Prices:", pricesInEUR);

// 3. filter() - Select items
const scores = [85, 42, 95, 68, 73, 91];
const honorsScores = scores.filter(score => score >= 85);
console.log("Honors scores (>= 85):", honorsScores);

// 4. reduce() - Summing & Aggregating
const expenses = [12.50, 45.00, 3.25, 99.99];
const totalExpenses = expenses.reduce((accumulator, current) => accumulator + current, 0);
console.log("Total expenses: $", totalExpenses.toFixed(2));

// 5. find() and some()
const users = [
  { id: 1, name: "Shivang", active: true },
  { id: 2, name: "John", active: false }
];
const foundUser = users.find(u => u.id === 1);
console.log("Found user:", foundUser?.name);
console.log("Any inactive users?", users.some(u => !u.active));

// 6. Spread syntax and destructuring
const frontEnd = ["React", "Vue"];
const backEnd = ["Node", "Express"];
const fullStack = [...frontEnd, ...backEnd];
const [primaryTech, secondaryTech] = fullStack;
console.log("Fullstack merged:", fullStack);
console.log("Primary:", primaryTech, "| Secondary:", secondaryTech);
