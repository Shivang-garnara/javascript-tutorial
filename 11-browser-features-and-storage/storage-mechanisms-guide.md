# Browser Storage Master Guide: LocalStorage vs SessionStorage vs Cookies vs IndexedDB 🗄️

Modern web applications need to store data locally on the client. JavaScript in the browser offers 4 distinct storage mechanisms, each engineered for specific trade-offs.

---

## 1. Quick Comparison Table (Interview Standard)

| Feature | `localStorage` | `sessionStorage` | `Cookies` (`document.cookie`) | `IndexedDB` |
|---|---|---|---|---|
| **Capacity** | ~5MB – 10MB per origin | ~5MB per tab/origin | ~4KB per cookie | >250MB – Several GBs |
| **Lifetime / Expiry** | **Persistent** (remains until explicitly cleared) | **Tab Session** (cleared automatically when tab is closed) | Configurable via `Expires` / `Max-Age` | **Persistent** |
| **Sent to Server?** | ❌ No (Client-only) | ❌ No (Client-only) | ✅ **Yes** (sent with every HTTP request header) | ❌ No (Client-only) |
| **API Type** | Synchronous, Key-Value | Synchronous, Key-Value | Synchronous String parsing | **Asynchronous** (Promise/Event-driven) |
| **Data Types** | Strings only (use JSON) | Strings only (use JSON) | String format (`key=val;`) | Structured clone (Objects, Files, Blobs) |
| **Scope / Isolation** | Same-Origin across all windows/tabs | Same-Origin + **Current Tab only** | Same-Origin / Subdomains | Same-Origin |
| **XSS Vulnerability** | ⚠️ High (Accessible to JS) | ⚠️ High (Accessible to JS) | 🛡️ Protected if `HttpOnly` flag is set | ⚠️ High (Accessible to JS) |

---

## 2. LocalStorage (`window.localStorage`)

Stores key-value pairs that persist indefinitely—even if the user closes the browser or restarts their computer.

### Common API:
```javascript
// 1. Set item (must be string):
localStorage.setItem("theme", "dark");
localStorage.setItem("user", JSON.stringify({ name: "Shivang", role: "Dev" }));

// 2. Get item:
const theme = localStorage.getItem("theme");
const user = JSON.parse(localStorage.getItem("user") || "{}");

// 3. Remove single item:
localStorage.removeItem("theme");

// 4. Clear all storage for this origin:
localStorage.clear();
```

---

## 3. SessionStorage (`window.sessionStorage`)

Has the exact same API as `localStorage`, but data lives **only for the lifespan of that specific browser tab**.

### Key Differences:
- If you open a new tab with the same URL, it gets a **clean, isolated sessionStorage**.
- Refreshing/reloading the page preserves the sessionStorage.
- Closing the tab destroys the data immediately.

### Ideal Use Cases:
- Multi-step form wizards (checkout funnel, registration wizard).
- Temporary one-time verification tokens or search filters.

---

## 4. HTTP Cookies (`document.cookie`)

Cookies are small pieces of data intended to be sent back and forth between the browser and server on **every single HTTP request**.

### Structure:
```javascript
// Setting a client cookie:
document.cookie = "username=Shivang; max-age=604800; path=/; SameSite=Lax; Secure";
```

### Security Flags (Must Know for Web Security!):
- **`HttpOnly`**: Set by server. **JavaScript cannot read or modify this cookie!** This completely protects authentication tokens from XSS (Cross-Site Scripting) theft.
- **`Secure`**: Cookie is transmitted only over encrypted HTTPS connections.
- **`SameSite=Strict | Lax | None`**: Protects against CSRF (Cross-Site Request Forgery) attacks.

---

## 5. IndexedDB (The Heavyweight Client Database)

IndexedDB is a full, transactional, object-oriented database running inside the user's browser.

### Why use IndexedDB?
- Storing offline data in Progressive Web Apps (PWAs).
- Caching images, audio, video files (Blobs) or large datasets (10,000+ records) that would freeze the browser if parsed in LocalStorage.
- Enables high-speed indexed search queries without downloading data again.

---

## 6. Security Decision Rule (Where to store JWT / Auth Tokens?)

> 🚨 **Critical Rule:** Never store sensitive authentication tokens (like refresh tokens or password hashes) in `localStorage` if your app accepts third-party scripts or user-generated HTML, because any XSS bug allows attackers to run `localStorage.getItem("token")` and steal user sessions.
>
> **Best Practice:** Store sensitive session tokens in **`HttpOnly`, `Secure`, `SameSite=Lax` cookies** managed by your backend server.

