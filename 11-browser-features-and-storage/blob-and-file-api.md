# Blob & File API: Binary Data & Client-Side Downloads 💾

In modern web development, you often need to generate downloadable files (like CSV reports, JSON data exports, or text backups) entirely on the client without sending a request to a backend server.

---

## 1. What is a `Blob`?

A **`Blob`** (Binary Large Object) represents raw, immutable byte data. It can hold text, binary data, images, audio, or video files.

### Syntax:
```javascript
const myBlob = new Blob([arrayBufferOrString], { type: "mime/type" });
```

### Basic Example (Creating a Text Blob):
```javascript
const textData = "Hello, this is a client-side generated text file!";
const blob = new Blob([textData], { type: "text/plain;charset=utf-8" });

console.log("Blob size in bytes:", blob.size);
console.log("Blob MIME type:", blob.type);
```

---

## 2. Generating Instant Downloads with `URL.createObjectURL()`

You can turn any `Blob` into a temporary URL (pointing directly to browser memory) using `URL.createObjectURL(blob)`.

### The Proven 4-Step Client-Side Download Pattern:
```javascript
function downloadCSV(csvContent, fileName = "report.csv") {
  // Step 1: Create the Blob with proper MIME type
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Step 2: Generate temporary Object URL (e.g. blob:http://localhost/...)
  const url = URL.createObjectURL(blob);

  // Step 3: Create invisible <a> tag and trigger programmatic click
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  // Step 4: Clean up DOM and free browser RAM
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // Crucial to prevent memory leaks!
}
```

---

## 3. The `File` and `FileReader` API

A `File` object is a specialized `Blob` that includes metadata such as `name` and `lastModifiedDate`. You receive `File` objects when users interact with `<input type="file">` or drag and drop files onto the page.

### Reading User Files with `FileReader`:
```javascript
const fileInput = document.querySelector("#uploadInput");

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  // Read as plain text:
  reader.readAsText(file);

  reader.onload = function () {
    console.log("File contents:", reader.result);
  };

  reader.onerror = function () {
    console.error("Error reading file:", reader.error);
  };
});
```

### Other `FileReader` Methods:
- `reader.readAsDataURL(file)`: Converts images to Base64 data URI (`data:image/png;base64,...`) for instant preview in `<img>` tags.
- `reader.readAsArrayBuffer(file)`: Reads raw binary buffer for cryptographic hashing or WebGL textures.
