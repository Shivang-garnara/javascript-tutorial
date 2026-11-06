// ===============================================
// Level 17: Tools & Workflow — script.js
// ===============================================

// 1. Simulating Environment Configuration & Security Check
console.log("=== Environment & Configuration Manager ===");

const simulatedEnv = {
  NODE_ENV: "development",
  PORT: "8080",
  API_PUBLIC_KEY: "pub_live_99238491",
  DATABASE_SECRET: "super_secret_db_pass_123!" // SENSITIVE!
};

// Safe configuration exporter that prevents leaking secrets to client
function getClientSafeConfig(env) {
  return {
    environment: env.NODE_ENV,
    port: Number(env.PORT),
    publicKey: env.API_PUBLIC_KEY
    // Notice: DATABASE_SECRET is omitted!
  };
}

console.log("Safe Config for Browser:", getClientSafeConfig(simulatedEnv));

// 2. Secret Masking Utility
function maskSecret(secret) {
  if (!secret || secret.length < 6) return "******";
  const visibleStart = secret.slice(0, 3);
  const visibleEnd = secret.slice(-2);
  const maskedMiddle = "*".repeat(secret.length - 5);
  return `${visibleStart}${maskedMiddle}${visibleEnd}`;
}

console.log("Masked Database Secret for Audit Logs:", maskSecret(simulatedEnv.DATABASE_SECRET));

// 3. Simulated package.json Structure
const samplePackageJson = {
  name: "javascript-learning-app",
  version: "1.0.0",
  type: "module",
  scripts: {
    dev: "vite",
    build: "vite build",
    test: "jest"
  },
  dependencies: {
    "date-fns": "^3.0.0"
  },
  devDependencies: {
    "vite": "^5.0.0",
    "eslint": "^8.0.0"
  }
};

console.log("\nSample package.json manifest loaded:", samplePackageJson.name);
