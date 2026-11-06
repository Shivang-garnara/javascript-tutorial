// ========================================================
// Prototypal Inheritance & Chain Inspection Demo
// ========================================================

console.log("=== 1. Prototypal Delegation via Object.create() ===");
const vehicle = {
  fuel: "Electric",
  startEngine() {
    return `${this.brand} engine started using ${this.fuel}!`;
  }
};

const car = Object.create(vehicle);
car.brand = "Tata Nexon EV";
car.wheels = 4;

console.log("Own Brand:", car.brand);
console.log("Inherited fuel property:", car.fuel);
console.log("Inherited startEngine method:", car.startEngine());

console.log("\n=== 2. Inspecting the Prototype Chain ===");
const carProto = Object.getPrototypeOf(car);
console.log("car prototype is vehicle:", carProto === vehicle); // true

const vehicleProto = Object.getPrototypeOf(carProto);
console.log("vehicle prototype is Object.prototype:", vehicleProto === Object.prototype); // true

const topProto = Object.getPrototypeOf(vehicleProto);
console.log("Object.prototype's prototype is:", topProto); // null (Chain Terminator!)

console.log("\n=== 3. Own Properties vs Prototype Properties ===");
console.log("car has own property 'brand' :", Object.prototype.hasOwnProperty.call(car, "brand")); // true
console.log("car has own property 'fuel'  :", Object.prototype.hasOwnProperty.call(car, "fuel"));  // false (inherited)
console.log("'fuel' in car (checks chain):", "fuel" in car); // true

console.log("\n=== 4. Constructor Function with Shared Prototype Methods ===");
function UserAccount(username, email) {
  this.username = username;
  this.email = email;
}

// Storing method on prototype means all 10,000 instances share 1 single function in memory!
UserAccount.prototype.getContactCard = function() {
  return `${this.username} <${this.email}>`;
};

const user1 = new UserAccount("shivang", "shivang@example.com");
const user2 = new UserAccount("admin", "admin@internal.net");

console.log("User 1 card:", user1.getContactCard());
console.log("User 2 card:", user2.getContactCard());
console.log("Both instances share the exact same method reference:", user1.getContactCard === user2.getContactCard); // true

