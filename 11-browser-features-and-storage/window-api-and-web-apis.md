# JavaScript Window API & Modern Web APIs (W3Schools)

The **BOM (Browser Object Model)** allows JavaScript to interact with the browser beyond the web page document.

---

## 1. The `window` Object Hierarchy
The `window` object represents the browser's window and is the global object for client-side JavaScript.

### A. Window Size
- `window.innerWidth`: Viewport width (excluding browser chrome).
- `window.innerHeight`: Viewport height.

### B. `window.screen`
Holds information about the visitor's physical screen/monitor:
- `screen.width` & `screen.height`: Total screen resolution (e.g. 1920x1080).
- `screen.availWidth` & `screen.availHeight`: Usable screen space (excluding the Windows taskbar).
- `screen.colorDepth`: Color depth (typically 24-bit).

### C. `window.location`
Used to get the current URL address or redirect the browser to a new URL:
- `location.href`: The complete URL (e.g. `https://www.example.com/shop?id=5#top`).
- `location.hostname`: Domain name (`www.example.com`).
- `location.pathname`: Path (`/shop`).
- `location.protocol`: Protocol (`https:`).
- `location.assign("https://google.com")`: Navigates to a new webpage.
- `location.reload()`: Refreshes the current page.

### D. `window.history`
Allows moving backward and forward through the user's session history:
- `history.back()`: Equivalent to clicking the browser's Back button.
- `history.forward()`: Equivalent to clicking Forward.
- `history.go(-2)`: Moves back 2 pages.

### E. `window.navigator`
Contains details about the visitor's browser and operating system:
- `navigator.language`: Browser language (e.g. `"en-US"`).
- `navigator.onLine`: Boolean indicating if browser is connected to internet.
- `navigator.cookieEnabled`: True if cookies are enabled.
- `navigator.userAgent`: Browser identifier string.

---

## 2. Popup Dialog Boxes
1. **`alert(message)`:** Informational dialog with an "OK" button.
2. **`confirm(question)`:** Confirmation dialog returning `true` (OK) or `false` (Cancel).
   ```javascript
   if (confirm("Are you sure you want to delete this file?")) {
     deleteFile();
   }
   ```
3. **`prompt(text, defaultValue)`:** User input prompt returning the entered string or `null` if cancelled.
   ```javascript
   const name = prompt("Please enter your name:", "Harry");
   ```

---

## 3. Web APIs Overview
Beyond DOM and Storage, modern browsers expose powerful Web APIs:
- **Fetch API:** Modern network requests (`fetch()`).
- **Geolocation API:** Access device coordinates with user permission (`navigator.geolocation.getCurrentPosition()`).
- **Notifications API:** Send desktop push notifications (`new Notification("Alert!")`).
- **Web Workers API:** Run background scripts on separate CPU threads without blocking the UI.
- **Fullscreen API:** Request full-screen viewing (`element.requestFullscreen()`).

