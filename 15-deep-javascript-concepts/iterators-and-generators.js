// ========================================================
// Iterators & Generators Practical Code Demonstration
// ========================================================

console.log("=== 1. Custom Iterable Object with Symbol.iterator ===");
const countdown = {
  from: 5,
  to: 1,
  [Symbol.iterator]() {
    let current = this.from;
    const end = this.to;
    return {
      next() {
        if (current >= end) {
          return { value: current--, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

console.log("Using for...of with custom iterable object:");
for (const step of countdown) {
  console.log(`Blastoff in: ${step}...`);
}

console.log("\n=== 2. Infinite Unique Transaction Reference Generator ===");
function* transactionIdGenerator() {
  let counter = 1000;
  while (true) {
    const timestamp = Date.now().toString(36).toUpperCase();
    yield `TXN-${timestamp}-${counter++}`;
  }
}

const txnGen = transactionIdGenerator();
console.log("Transaction 1:", txnGen.next().value);
console.log("Transaction 2:", txnGen.next().value);
console.log("Transaction 3:", txnGen.next().value);

console.log("\n=== 3. Two-Way Data Communication with Generators ===");
function* chatBot() {
  const name = yield "Hello! What is your name?";
  const language = yield `Nice to meet you, ${name}! What is your favorite programming language?`;
  return `Awesome! ${language} is fantastic for building modern software.`;
}

const convo = chatBot();
console.log("Bot:", convo.next().value);
console.log("Bot:", convo.next("Shivang").value);
console.log("Bot:", convo.next("JavaScript").value);

console.log("\n=== 4. Generator Delegation with yield* ===");
function* frontendRoadmap() {
  yield "React";
  yield "Tailwind CSS";
}

function* backendRoadmap() {
  yield "Node.js";
  yield "PostgreSQL";
}

function* fullStackRoadmap() {
  yield "JavaScript Basics";
  yield* frontendRoadmap(); // Inlines frontend generator
  yield* backendRoadmap();  // Inlines backend generator
  yield "Docker & CI/CD";
}

console.log("Complete Roadmap Sequence:");
for (const topic of fullStackRoadmap()) {
  console.log(`- ${topic}`);
}
