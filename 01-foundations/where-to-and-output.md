# JavaScript: Where To & Output Methods (W3Schools Alignment)

---

## 1. JavaScript "Where To": Script Placement

In HTML, JavaScript code can be placed in three locations:
1. In the `<head>` section.
2. In the `<body>` section.
3. In an external file (`.js`) linked with `<script src="...">`.

### A. Inside `<head>` vs `<body>`
```html
<!DOCTYPE html>
<html>
<head>
  <!-- 1. Placed in HEAD: Useful for scripts that must be ready before page loads -->
  <script>
    function myHeadFunction() {
      console.log("Running from head!");
    }
  </script>
</head>
<body>
  <h1>My Web Page</h1>

  <!-- 2. Placed at the bottom of BODY: Best practice for fast page rendering -->
  <script>
    console.log("Page HTML is already parsed!");
  </script>
</body>
</html>
```

> 💡 **Best Practice:** Place scripts at the **bottom of the `<body>` element**. This improves display speed because HTML document parsing isn't blocked by script loading.

---

### B. External JavaScript Files
Separating HTML and code makes files easier to maintain and allows browsers to cache `.js` files for faster loading.

```html
<!-- Relative path -->
<script src="myScript.js"></script>

<!-- Folder path -->
<script src="/js/myScript.js"></script>

<!-- Full URL (CDN) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

### C. `async` vs `defer` Attributes

When linking external scripts in `<head>`:
- `<script src="script.js">`: **Blocks** HTML parsing while downloading and executing.
- `<script async src="script.js">`: Downloads in the background, executes **immediately when downloaded** (order not guaranteed; great for independent analytics like Google Analytics).
- `<script defer src="script.js">`: Downloads in the background and executes **only after the HTML document is completely parsed** in strict order (best for DOM-dependent code!).

---

## 2. JavaScript Output: The 4 Ways to Display Data

JavaScript can "display" data in 4 distinct ways:

### 1. Writing into an HTML Element: `innerHTML` or `textContent`
```javascript
// Changes the visible HTML content
document.getElementById("demo").innerHTML = "<b>Hello World!</b>";
document.getElementById("demo").textContent = "Hello World!";
```

### 2. Writing into the HTML Output: `document.write()`
```javascript
document.write(5 + 6);
```
> ⚠️ **Warning:** Using `document.write()` after an HTML document is loaded will **completely overwrite the entire HTML page**! It should only be used for testing.

### 3. Writing into an Alert Box: `window.alert()`
```javascript
window.alert("Welcome to the website!");
// or simply:
alert("Welcome!");
```

### 4. Writing into the Browser Console: `console.log()`
```javascript
console.log("Debugging information for developers");
```

### 5. Bonus: Printing the Page: `window.print()`
JavaScript has a built-in method to trigger the browser's print dialog:
```html
<button onclick="window.print()">Print This Page 🖨️</button>
```

