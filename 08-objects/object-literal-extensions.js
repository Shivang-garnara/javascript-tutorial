// ========================================================
// Object Literal Syntax Extensions Demonstration
// ========================================================

console.log("=== 1. Property and Method Shorthands ===");
const username = "shivang_dev";
const status = "ONLINE";

const userSession = {
  username, // Shorthand property
  status,   // Shorthand property
  lastSeen: Date.now(),

  // Shorthand method definition:
  logout() {
    this.status = "OFFLINE";
    return `${this.username} logged out.`;
  }
};

console.log("User Session Object:", userSession);
console.log("Calling shorthand method:", userSession.logout());

console.log("\n=== 2. Computed Property Names in Action ===");
const dynamicField = "preferences";
const category = "theme";

const appProfile = {
  id: "P10",
  // Computed property keys:
  [`user_${dynamicField}`]: { mode: "dark", lang: "en" },
  [`setting_${category.toUpperCase()}`]: "midnight_blue"
};

console.log("Computed Object Output:", appProfile);

console.log("\n=== 3. Simulating Generic Form State Reducer ===");
let formState = { email: "", password: "", rememberMe: false };

function updateFormField(fieldName, fieldValue) {
  formState = {
    ...formState,
    [fieldName]: fieldValue // Computed property name update
  };
}

updateFormField("email", "shivang@example.com");
updateFormField("rememberMe", true);

console.log("Updated Form State:", formState);

