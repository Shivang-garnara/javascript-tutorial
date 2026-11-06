# W3Schools JavaScript Examples Collection (Try-It-Yourself)

This folder contains hands-on interactive implementations of the official **W3Schools JavaScript Examples Catalog** (`https://www.w3schools.com/js/js_examples.asp`).

---

## 📂 Examples Included in this Collection

| Example | Focus / Concept | File Link |
| :--- | :--- | :---: |
| **1. The Famous Lightbulb** | Changing HTML Image Attributes (`src`), state toggling | [01-lightbulb.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/01-lightbulb.html) |
| **2. Dynamic Content & Styles** | `innerHTML`, `style.fontSize`, `style.color`, `display: none/block` | [index.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/index.html) |
| **3. HTML Form & Range Validation** | Checking empty inputs, numeric ranges (1 to 10), email format | [02-form-validation.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/02-form-validation.html) |
| **4. Live Digital Clock & Timers** | `setInterval()`, `new Date().toLocaleTimeString()`, AM/PM format | [03-digital-clock.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/03-digital-clock.html) |
| **5. Accordions & Dropdowns** | Dynamic class toggling, collapsible drawers, DOM traversal | [04-accordion-and-modals.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/04-accordion-and-modals.html) |
| **6. Dynamic Table Builder** | `createElement()`, `appendChild()`, `table.insertRow()`, row deletion | [05-dynamic-table.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/05-dynamic-table.html) |
| **7. Master Interactive Hub** | **All-In-One "Try-It-Yourself" Live Showcase App** | [index.html](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/index.html) |

---

## 💡 Key W3Schools Learning Takeaways

### 1. Changing HTML Attribute Values:
The most famous beginner JavaScript example in history:
```javascript
// Turn Lightbulb ON
document.getElementById('myImage').src = 'pic_bulbon.gif';

// Turn Lightbulb OFF
document.getElementById('myImage').src = 'pic_bulboff.gif';
```

### 2. Changing CSS Styles Dynamically:
```javascript
const text = document.getElementById("demo");
text.style.fontSize = "28px";
text.style.color = "#38bdf8";
text.style.display = "none"; // Hide element
text.style.display = "block"; // Show element
```

### 3. HTML Input Validation:
```javascript
function validateInput() {
  const x = document.getElementById("numb").value;
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid (must be a number 1-10)";
  } else {
    text = "Input OK!";
  }
  document.getElementById("feedback").innerHTML = text;
}
```

### 4. Continuous Timing with `setInterval`:
```javascript
setInterval(() => {
  const d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}, 1000);
```

---

## 🚀 How to Run
Simply double-click [`index.html`](file:///C:/Users/Shivang/Downloads/javascript%20basic/w3schools-examples/index.html) to open the unified W3Schools showcase in your web browser!

