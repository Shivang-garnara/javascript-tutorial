# Singly Linked List Implementation in JavaScript 🔗

A **Linked List** is a fundamental linear data structure where elements are not stored at contiguous memory locations. Instead, each element (called a **Node**) contains a value and a pointer (reference) to the next node in sequence.

---

## 1. Linked List vs Array Comparison

| Operation | Array | Singly Linked List |
|---|:---:|:---:|
| **Access by Index (`list[i]`)** | ⚡ $\mathcal{O}(1)$ (Instant) | 🐢 $\mathcal{O}(N)$ (Must walk from head) |
| **Insert / Delete at Beginning (`prepend`)** | 🐢 $\mathcal{O}(N)$ (Must shift all elements) | ⚡ $\mathcal{O}(1)$ (Just update head pointer!) |
| **Insert / Delete at End (`append`)** | $\mathcal{O}(1)$ amortized | $\mathcal{O}(1)$ with tail pointer |
| **Memory Allocation** | Contiguous static / dynamic buffer | Nodes allocated anywhere in heap |

---

## 2. Structure of a Node and Linked List

```
[ Head ] ──► [ Node: 10 | next ] ──► [ Node: 20 | next ] ──► [ Node: 30 | null ]
```

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Points to next Node or null
  }
}
```

---

## 3. Complete JavaScript Implementation

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 1. Insert at Beginning - O(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // 2. Insert at End - O(N)
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // 3. Delete by Value - O(N)
  delete(value) {
    if (!this.head) return false;

    // If head is the target node:
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next; // Bypass the node
      this.size--;
      return true;
    }
    return false; // Not found
  }

  // 4. Reverse Linked List (Top Interview Question!) - O(N) Time, O(1) Space
  reverse() {
    let prev = null;
    let current = this.head;
    let nextNode = null;

    while (current !== null) {
      nextNode = current.next; // Save next node
      current.next = prev;     // Reverse pointer
      prev = current;          // Move prev forward
      current = nextNode;      // Move current forward
    }
    this.head = prev;          // Update head to new front
  }

  // Utility to print as string
  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }
}
```

---

## 4. Classic Interview Challenges with Linked Lists
1. **Detecting a Cycle in a Linked List (Floyd's Tortoise and Hare Algorithm):**
   Use two pointers moving at different speeds (slow moves 1 step, fast moves 2 steps). If fast and slow ever meet, a cycle exists!
2. **Finding the Middle Element:**
   When fast reaches the end, slow is exactly at the middle node!

