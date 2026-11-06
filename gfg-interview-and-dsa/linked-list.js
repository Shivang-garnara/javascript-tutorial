// ========================================================
// Singly Linked List Data Structure Implementation
// ========================================================

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Prepend: O(1)
  prepend(val) {
    const node = new ListNode(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Append: O(N)
  append(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  // Delete by value: O(N)
  delete(val) {
    if (!this.head) return false;
    if (this.head.value === val) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let curr = this.head;
    while (curr.next && curr.next.value !== val) {
      curr = curr.next;
    }

    if (curr.next) {
      curr.next = curr.next.next;
      this.size--;
      return true;
    }
    return false;
  }

  // In-place List Reversal: O(N) Time, O(1) Space
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      const nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
    }
    this.head = prev;
  }

  print() {
    const items = [];
    let curr = this.head;
    while (curr) {
      items.push(curr.value);
      curr = curr.next;
    }
    console.log(items.length > 0 ? items.join(" -> ") + " -> null" : "(Empty List)");
  }
}

console.log("=== 1. Building and Appending to Linked List ===");
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5); // Fast O(1) insertion at head!

console.log("Current List:");
list.print(); // 5 -> 10 -> 20 -> 30 -> null

console.log("\n=== 2. Deleting Element (20) ===");
list.delete(20);
list.print(); // 5 -> 10 -> 30 -> null

console.log("\n=== 3. Reversing the Linked List (In-Place) ===");
list.reverse();
console.log("Reversed List:");
list.print(); // 30 -> 10 -> 5 -> null
