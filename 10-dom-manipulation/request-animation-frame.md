# DOM Animations with `requestAnimationFrame()` 🚀

When animating DOM elements or rendering HTML5 Canvas graphics in JavaScript, using `setInterval()` or `setTimeout()` produces stuttering, battery drain, and screen tearing.

The modern browser standard for silky-smooth 60 FPS / 120 FPS animations is **`window.requestAnimationFrame()`**.

---

## 1. Why `requestAnimationFrame` Beats `setInterval`

| Feature | `setInterval(fn, 16.6)` | `requestAnimationFrame(fn)` |
|---|---|---|
| **Sync with Display** | ❌ Blind timer; desynced from monitor refresh cycles | ✅ **Perfect sync** with GPU display refresh rate (60Hz / 120Hz) |
| **Tab Inactive / Background** | ❌ Continues firing, draining laptop battery | ✅ **Auto-pauses** when tab is hidden or minimized! |
| **Screen Tearing** | ⚠️ High risk of stutter and frame skipping | ✅ Zero tearing, optimal hardware acceleration |
| **Timestamp Precision** | Low resolution (`Date.now()`) | High resolution (`DOMHighResTimeStamp` down to microseconds) |

---

## 2. Standard Animation Loop Pattern

```javascript
let animationId;
let posX = 0;
const speed = 2; // pixels per frame

function animate(timestamp) {
  posX += speed;
  box.style.transform = `translateX(${posX}px)`;

  // Keep looping as long as condition holds:
  if (posX < 400) {
    animationId = requestAnimationFrame(animate);
  }
}

// Start loop:
animationId = requestAnimationFrame(animate);

// Stop loop on demand:
// cancelAnimationFrame(animationId);
```

---

## 3. Frame-Rate Independent Movement (Delta Time)

Different monitors run at 60Hz, 120Hz, or 144Hz. If you simply add `posX += 5` on every frame, your game or animation will run **twice as fast** on a 120Hz gaming screen!

To make speed uniform across all devices, multiply by **Delta Time** ($\Delta t$):

```javascript
let lastTime = performance.now();
const pixelsPerSecond = 200; // Consistent speed on any monitor!

function gameLoop(currentTime) {
  // Calculate seconds elapsed since last frame:
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  posX += pixelsPerSecond * deltaTime;
  player.style.left = `${posX}px`;

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
```
