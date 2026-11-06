// ===============================================
// Level 15: Deeper JavaScript Concepts — script.js
// ===============================================

// 1. Prototypal Inheritance
function Device(brand) {
  this.brand = brand;
}
Device.prototype.powerOn = function() {
  return `${this.brand} is turning on...`;
};

const myPhone = new Device("Google Pixel");
console.log(myPhone.powerOn());

// 2. ES6 Classes with Private Fields and Inheritance
class UserAccount {
  #hashedPassword; // Private field

  constructor(username, password) {
    this.username = username;
    this.#hashedPassword = "hash_" + password;
  }

  // Getter
  get profileName() {
    return `@${this.username}`;
  }

  // Method validating against private field
  verifyPassword(input) {
    return this.#hashedPassword === "hash_" + input;
  }
}

const user = new UserAccount("shivang", "secretKey123");
console.log("Username via getter:", user.profileName);
console.log("Password check correct:", user.verifyPassword("secretKey123")); // true
console.log("Password check wrong:", user.verifyPassword("wrong"));          // false

// 3. call(), apply(), and bind()
const speaker = {
  sound: "Beep",
  emit() {
    console.log(`Speaker emits: ${this.sound}`);
  }
};

const loudSpeaker = { sound: "BOOM!" };

// Use call to run speaker.emit with loudSpeaker's 'this'
speaker.emit.call(loudSpeaker);

// Use bind to create a permanently bound function
const boundEmit = speaker.emit.bind(loudSpeaker);
setTimeout(boundEmit, 100);

// 4. Generator function demonstration
function* ticketDispenser() {
  let ticket = 101;
  while (ticket <= 103) {
    yield `Ticket #${ticket++}`;
  }
}

const dispenser = ticketDispenser();
console.log(dispenser.next().value); // Ticket #101
console.log(dispenser.next().value); // Ticket #102
console.log(dispenser.next().value); // Ticket #103

