// ==========================================
// Level 1 — Lesson 01: Introduction to JavaScript
// File: script.js
// ==========================================

// 1. Outputting text to the console
console.log("Hello from Lesson 1!");
console.log("JavaScript is now running on your machine!");

// 2. Performing simple calculations
console.log("Calculations demonstration:");
console.log(10 + 5);   // Addition -> prints 15
console.log(20 - 4);   // Subtraction -> prints 16
console.log(6 * 7);    // Multiplication -> prints 42
console.log(50 / 2);   // Division -> prints 25

// 3. Notice the difference between text (strings) and numbers
console.log("Notice the difference:");
console.log("10 + 5"); // Treated as literal text -> prints "10 + 5"
console.log(10 + 5);   // Treated as a mathematical operation -> prints 15

// 4. Interactive logic connecting to index.html
// This function runs when the user clicks the button on index.html
let cartCount = 0;

function handleAddToCart() {
  cartCount = cartCount + 1;
  
  // Update the cart counter on the web page
  const cartBadge = document.getElementById("cartCount");
  if (cartBadge) {
    cartBadge.textContent = cartCount;
  }
  
  // Provide feedback in the browser console
  console.log("Item added! Total items in cart:", cartCount);
  
  // Update button text temporarily
  const btn = document.getElementById("addBtn");
  if (btn) {
    btn.textContent = "Added to Cart! ✓";
    setTimeout(() => {
      btn.textContent = "Add More to Cart";
    }, 1200);
  }
}

