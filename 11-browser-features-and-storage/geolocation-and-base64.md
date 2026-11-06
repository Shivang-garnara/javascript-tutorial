# Geolocation API & Base64 Encoding (`btoa`, `atob`) 🌍🔤

---

## 1. The Geolocation API (`navigator.geolocation`)

The Geolocation API allows web applications to access the user's geographical coordinates (latitude and longitude) with explicit user consent.

> 🔒 **Security Prerequisite:** The Geolocation API works **exclusively over HTTPS** (or `localhost` during development). Browsers strictly block geolocation on insecure `http://` sites.

### A. One-Time Location Lookup: `getCurrentPosition()`
```javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const accuracyMeters = position.coords.accuracy;
      console.log(`User coordinates: ${lat}, ${lon} (within ±${accuracyMeters}m)`);
    },
    (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.warn("User refused location permission.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.warn("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.warn("Location request timed out.");
          break;
      }
    },
    {
      enableHighAccuracy: true, // Use GPS if available
      timeout: 10000,          // 10 second timeout
      maximumAge: 60000        // Accept cached position up to 1 min old
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}
```

### B. Real-Time Tracking: `watchPosition()`
Useful for maps or delivery driver tracking. Continues invoking the callback as the device moves:
```javascript
const watchId = navigator.geolocation.watchPosition((pos) => {
  console.log("Live position update:", pos.coords.latitude, pos.coords.longitude);
});

// Stop tracking when done:
// navigator.geolocation.clearWatch(watchId);
```

---

## 2. Base64 Encoding & Decoding (`btoa` and `atob`)

**Base64** is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It is widely used for embedding small images directly into HTML/CSS (`data:image/png;base64,...`) and transmitting authorization headers (`Basic <credentials>`).

### Built-in Global Functions:
- **`btoa(string)`** &rarr; **B**inary **to** **A**SCII (Encodes string to Base64)
- **`atob(base64)`** &rarr; **A**SCII **to** **B**inary (Decodes Base64 back to string)

```javascript
const original = "Shivang:secret_token_123";

// Encoding:
const encoded = btoa(original);
console.log(encoded); // "U2hpdmFuZzpzZWNyZXRfdG9rZW5fMTIz"

// Decoding:
const decoded = atob(encoded);
console.log(decoded); // "Shivang:secret_token_123"
```

### ⚠️ The Unicode Gotcha (Handling Emojis & Hindi / Special Characters):
`btoa()` throws an `InvalidCharacterError` if given characters outside the Latin1 range (like `₹` or `🚀` or `नमस्ते`):

```javascript
// ❌ Fails:
// btoa("JavaScript 🚀 ₹100"); // Throws InvalidCharacterError!

// ✅ Safe Unicode Base64 Helper:
function toBase64Unicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
    return String.fromCharCode("0x" + p1);
  }));
}

function fromBase64Unicode(base64) {
  return decodeURIComponent(Array.prototype.map.call(atob(base64), (c) => {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}

const safeEncoded = toBase64Unicode("Shivang ₹5,000 🚀");
console.log("Decoded cleanly:", fromBase64Unicode(safeEncoded));
```

