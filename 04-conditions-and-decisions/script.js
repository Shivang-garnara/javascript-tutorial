// ===============================================
// Level 4: Conditions & Decisions — Code Examples
// ===============================================

// 1. Basic if / else if / else
const examScore = 88;

if (examScore >= 90) {
  console.log("Grade: A - Outstanding!");
} else if (examScore >= 80) {
  console.log("Grade: B - Very Good!");
} else if (examScore >= 70) {
  console.log("Grade: C - Good!");
} else {
  console.log("Grade: F - Needs Improvement.");
}

// 2. Nested conditions: Login Authentication Check
const enteredUsername = "shivang";
const enteredPassword = "secret123";
const isAccountActive = true;

if (enteredUsername === "shivang" && enteredPassword === "secret123") {
  if (isAccountActive) {
    console.log("Login successful! Welcome to the dashboard.");
  } else {
    console.log("Account disabled. Please contact support.");
  }
} else {
  console.log("Invalid username or password.");
}

// 3. Switch statement
const orderStatus = "shipped";

switch (orderStatus) {
  case "pending":
    console.log("Order is being prepared.");
    break;
  case "shipped":
    console.log("Order is on the way! Track package via courier.");
    break;
  case "delivered":
    console.log("Order has been delivered. Enjoy!");
    break;
  case "cancelled":
    console.log("Order was cancelled. Refund processed.");
    break;
  default:
    console.log("Unknown order status.");
}

