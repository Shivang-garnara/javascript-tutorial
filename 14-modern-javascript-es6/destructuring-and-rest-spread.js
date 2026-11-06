// ========================================================
// Destructuring, Rest & Spread Operators in Action
// ========================================================

console.log("=== 1. Variable Swapping via Array Destructuring ===");
let primaryColor = "Blue";
let secondaryColor = "Gold";

console.log(`Before: Primary = ${primaryColor}, Secondary = ${secondaryColor}`);
[primaryColor, secondaryColor] = [secondaryColor, primaryColor];
console.log(`After:  Primary = ${primaryColor}, Secondary = ${secondaryColor}`);

console.log("\n=== 2. Complex Nested Object Destructuring ===");
const serverConfig = {
  host: "127.0.0.1",
  port: 8080,
  ssl: {
    enabled: true,
    certPath: "/etc/ssl/cert.pem"
  },
  database: {
    engine: "PostgreSQL",
    auth: {
      user: "dbadmin"
    }
  }
};

const {
  host,
  port: serverPort, // Alias
  ssl: { enabled: isSslSecure },
  database: { auth: { user: dbUser } },
  environment = "production" // Default value
} = serverConfig;

console.log(`Server running at ${host}:${serverPort} [SSL: ${isSslSecure}]`);
console.log(`DB User: ${dbUser} | Environment: ${environment}`);

console.log("\n=== 3. Rest Operator: Omit Sensitive Information Pattern ===");
const userPayload = {
  userId: "USR-9921",
  username: "shivang_coder",
  email: "shivang@example.com",
  hashedSecret: "$2b$10$e89as7df89as7df98as",
  twoFactorToken: "982312"
};

// Strip secrets out cleanly using rest destructuring:
const { hashedSecret, twoFactorToken, ...publicUserCard } = userPayload;
console.log("Public Card (Safe for Client):", publicUserCard);

console.log("\n=== 4. Rest in Variadic Functions vs Spread in Arguments ===");
function findStatistics(...numbers) {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const min = Math.min(...numbers); // Spread inside Math.min!
  const max = Math.max(...numbers); // Spread inside Math.max!
  const avg = sum / numbers.length;
  return { sum, min, max, avg };
}

const testScores = [88, 92, 79, 95, 84];
console.log("Stats calculated using Rest + Spread:", findStatistics(...testScores));

console.log("\n=== 5. Immutable State Updates with Object Spread ===");
const state = {
  counter: 10,
  settings: { darkMode: true },
  lastUpdated: "2026-11-01"
};

// Correct immutable update pattern (like Redux / React useState):
const updatedState = {
  ...state,
  counter: state.counter + 1,
  lastUpdated: new Date().toISOString().split("T")[0]
};

console.log("Original state:", state);
console.log("Updated state :", updatedState);

