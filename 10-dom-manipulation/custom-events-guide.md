# JavaScript Custom Events (GeeksforGeeks Guide)

In addition to built-in DOM events like `"click"`, `"submit"`, and `"keydown"`, JavaScript allows developers to define, dispatch, and listen to **Custom Events**.

Custom Events enable a clean **Event-Driven Architecture (Pub/Sub)**, decoupling different components of your application.

---

## 1. Creating and Dispatching a Custom Event

The syntax uses `new CustomEvent(eventName, options)` and `element.dispatchEvent()`:

```javascript
// 1. Create a custom event with arbitrary payload data in `detail`
const orderPlacedEvent = new CustomEvent("orderPlaced", {
  detail: {
    orderId: "ORD-9912",
    totalAmount: 149.99,
    timestamp: new Date().toISOString()
  },
  bubbles: true,   // Allows event to bubble up the DOM tree
  cancelable: true // Allows event.preventDefault()
});

// 2. Dispatch the event on any DOM element (e.g. document or a specific container)
document.dispatchEvent(orderPlacedEvent);
```

---

## 2. Listening for the Custom Event

Any other part of your application can listen for this event just like a standard click event:

```javascript
document.addEventListener("orderPlaced", (event) => {
  const { orderId, totalAmount } = event.detail;
  console.log(`Notification: Order ${orderId} placed for $${totalAmount}!`);
  updateCartBadge();
  sendAnalyticsEvent(orderId);
});
```

---

## 3. Real-World Use Case: Decoupled Multi-Widget Dashboard

Imagine an app with:
- A user balance widget in the header.
- A purchase button inside a shop modal.

Instead of the modal having to know about the header's DOM element directly:
1. The modal simply triggers:
   ```javascript
   window.dispatchEvent(new CustomEvent("balanceUpdated", { detail: { newBalance: 450 } }));
   ```
2. The header independently listens:
   ```javascript
   window.addEventListener("balanceUpdated", (e) => {
     document.getElementById("userBalance").textContent = `$${e.detail.newBalance}`;
   });
   ```
This makes your code modular, maintainable, and easy to test!

