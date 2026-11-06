// ========================================================
// Error Types & Custom Error Classes Demonstration
// ========================================================

console.log("=== 1. Built-in Error Types in Action ===");

// 1. TypeError
try {
  const number = 100;
  number.map(x => x * 2);
} catch (err) {
  console.log(`[${err.name}] -> ${err.message}`);
}

// 2. ReferenceError
try {
  eval("console.log(undefinedScoreVariable);");
} catch (err) {
  console.log(`[${err.name}] -> ${err.message}`);
}

// 3. SyntaxError (via JSON parse)
try {
  JSON.parse("{ badJson: true ");
} catch (err) {
  console.log(`[${err.name}] -> ${err.message}`);
}

// 4. RangeError
try {
  const badArr = new Array(-10);
} catch (err) {
  console.log(`[${err.name}] -> ${err.message}`);
}

// 5. URIError
try {
  decodeURIComponent("%");
} catch (err) {
  console.log(`[${err.name}] -> ${err.message}`);
}

console.log("\n=== 2. Custom Application Errors Hierarchy ===");

class ApplicationError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

class ValidationError extends ApplicationError {
  constructor(field, message) {
    super(message, 400);
    this.field = field;
  }
}

class AuthenticationError extends ApplicationError {
  constructor(message = "Unauthorized access attempt") {
    super(message, 401);
  }
}

// Simulation function:
function registerNewUser(payload) {
  if (!payload.email || !payload.email.includes("@")) {
    throw new ValidationError("email", "A valid email address is required");
  }
  if (!payload.password || payload.password.length < 8) {
    throw new ValidationError("password", "Password must be at least 8 characters long");
  }
  if (payload.token !== "SECRET_APP_TOKEN") {
    throw new AuthenticationError("Invalid or expired API token");
  }
  return { success: true, message: `Account created for ${payload.email}` };
}

// Testing with different error payloads:
const testCases = [
  { email: "invalid-email", password: "123", token: "SECRET_APP_TOKEN" },
  { email: "shivang@example.com", password: "123", token: "SECRET_APP_TOKEN" },
  { email: "shivang@example.com", password: "strongPassword123!", token: "WRONG_TOKEN" },
  { email: "shivang@example.com", password: "strongPassword123!", token: "SECRET_APP_TOKEN" }
];

testCases.forEach((test, idx) => {
  try {
    console.log(`\n--- Test Case #${idx + 1} ---`);
    const res = registerNewUser(test);
    console.log("Success:", res.message);
  } catch (err) {
    if (err instanceof ValidationError) {
      console.warn(`[HTTP ${err.statusCode}] Validation Error on field '${err.field}': ${err.message}`);
    } else if (err instanceof AuthenticationError) {
      console.warn(`[HTTP ${err.statusCode}] Auth Error: ${err.message}`);
    } else {
      console.error(`[HTTP 500] Unexpected crash:`, err.message);
    }
  }
});
