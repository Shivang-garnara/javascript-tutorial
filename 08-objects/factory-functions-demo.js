// ========================================================
// Factory Functions vs ES6 Classes Demonstration
// ========================================================

console.log("=== 1. Factory Function Pattern (Safe from 'this' loss) ===");
function createCartItem(title, unitPrice) {
  let quantity = 1; // Encapsulated private variable

  return {
    title,
    unitPrice,
    addQuantity(count = 1) {
      quantity += count;
    },
    getTotal() {
      return quantity * unitPrice;
    },
    getSummary() {
      return `${quantity}x ${title} = ₹${this.getTotal()}`;
    }
  };
}

const itemA = createCartItem("USB-C Hub", 1499);
itemA.addQuantity(2); // 3 items
console.log(itemA.getSummary());

// Notice: itemA.quantity is undefined (Private via closure!)
console.log("Direct access to private quantity:", itemA.quantity); // undefined

console.log("\n=== 2. ES6 Class Equivalent (Prototype Memory Sharing) ===");
class CartItemClass {
  #quantity = 1; // Private class field

  constructor(title, unitPrice) {
    this.title = title;
    this.unitPrice = unitPrice;
  }

  addQuantity(count = 1) {
    this.#quantity += count;
  }

  getTotal() {
    return this.#quantity * this.unitPrice;
  }
}

const itemB1 = new CartItemClass("Mouse", 800);
const itemB2 = new CartItemClass("Keyboard", 2500);

console.log("Classes share method on prototype:", itemB1.getTotal === itemB2.getTotal); // true (Memory efficient!)
console.log("Factory functions create separate methods:", itemA.getTotal === createCartItem("x", 1).getTotal); // false
