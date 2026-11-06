# JavaScript Graphics: HTML5 Canvas & SVG (W3Schools)

JavaScript can draw 2D/3D shapes, charts, games, and animations dynamically on web pages using the **HTML5 `<canvas>` element** and **SVG**.

---

## 1. The `<canvas>` Element
The HTML `<canvas>` tag is a container for graphics. You must use JavaScript to actually draw on it.

### Getting the 2D Drawing Context
```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

---

## 2. Drawing Operations

### A. Drawing Rectangles
```javascript
ctx.fillStyle = "#38bdf8"; // Fill color
ctx.fillRect(20, 20, 150, 100); // x, y, width, height
```

### B. Drawing Lines
```javascript
ctx.beginPath();
ctx.moveTo(0, 0);     // Starting coordinates
ctx.lineTo(200, 100); // Ending coordinates
ctx.strokeStyle = "#facc15";
ctx.lineWidth = 4;
ctx.stroke();
```

### C. Drawing Circles & Arcs
```javascript
ctx.beginPath();
// arc(x, y, radius, startAngle, endAngle)
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#10b981";
ctx.fill();
```

### D. Drawing Text
```javascript
ctx.font = "24px Arial";
ctx.fillStyle = "#ffffff";
ctx.fillText("Hello Canvas!", 50, 120);
```

### E. Linear Gradients
```javascript
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "#ec4899");
gradient.addColorStop(1, "#8b5cf6");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 180, 80);
```

---

## 3. Smooth Animations with `requestAnimationFrame()`
To animate shapes (like a bouncing ball or video game character), call `requestAnimationFrame(animateFunction)`. The browser executes the function right before the next screen refresh (60 or 120 FPS) smoothly!
