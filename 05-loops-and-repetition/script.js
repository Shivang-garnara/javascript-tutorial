// ===============================================
// Level 5: Loops & Repetition — Code Examples
// ===============================================

// 1. Classic for loop
console.log("--- 1. Counting up with for ---");
for (let i = 1; i <= 3; i++) {
  console.log(`Round ${i}`);
}

// 2. while loop
console.log("--- 2. while loop countdown ---");
let battery = 30;
while (battery > 0) {
  battery -= 10;
  console.log(`Battery at ${battery}%`);
}

// 3. do...while (always runs at least once)
console.log("--- 3. do...while ---");
let attempts = 0;
do {
  attempts++;
  console.log(`Attempt ${attempts}`);
} while (attempts < 1);

// 4. break and continue
console.log("--- 4. break and continue ---");
for (let i = 1; i <= 6; i++) {
  if (i === 3) {
    console.log("Skipping 3 with continue!");
    continue;
  }
  if (i === 5) {
    console.log("Stopping at 5 with break!");
    break;
  }
  console.log(`Value: ${i}`);
}

// 5. for...of loop with array
console.log("--- 5. for...of with an array ---");
const cart = ["T-Shirt", "Jeans", "Sneakers"];
for (const item of cart) {
  console.log(`Cart item: ${item}`);
}

