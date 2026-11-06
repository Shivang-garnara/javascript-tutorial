# Classic AJAX (`XMLHttpRequest`) & CORS Architecture 🌐

Before the modern `fetch()` API and Promises existed, all asynchronous web data communication in JavaScript was powered by **AJAX** using the **`XMLHttpRequest` (XHR)** object. Understanding XHR and **CORS** remains essential for web security and legacy codebase maintenance.

---

## 1. The `XMLHttpRequest` (XHR) Lifecycle

### The 5 ReadyState Phases:
| `readyState` | Constant | Description |
|:---:|---|---|
| **0** | `UNSENT` | Client created, `open()` not called yet |
| **1** | `OPENED` | `open()` has been called |
| **2** | `HEADERS_RECEIVED` | `send()` called, response headers and status available |
| **3** | `LOADING` | Downloading response body (`responseText` has partial data) |
| **4** | `DONE` | Operation complete! Entire response downloaded |

### Classic XHR GET Request:
```javascript
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // DONE
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log("Success:", data);
    } else {
      console.error("HTTP Request Failed with status:", xhr.status);
    }
  }
};

xhr.onerror = function () {
  console.error("Network level connection error!");
};

xhr.send();
```

---

## 2. Converting Legacy XHR to Modern Promises ("Promisification")

A very common technical interview challenge is: **"Write a wrapper function that turns `XMLHttpRequest` into a Promise"**:

```javascript
function makeRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText || "{}"));
      } else {
        reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => reject(new Error("Network Error"));
    xhr.ontimeout = () => reject(new Error("Request Timed Out"));

    if (body) {
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  });
}
```

---

## 3. CORS (Cross-Origin Resource Sharing)

The browser's **Same-Origin Policy (SOP)** prohibits a script on `https://my-app.com` from fetching data from `https://api.external.com` unless the server explicitly grants permission via **CORS HTTP headers**.

An Origin is defined by 3 components: **Protocol + Domain + Port**:
`https://example.com:443`

### The Preflight `OPTIONS` Request:
For non-simple HTTP requests (e.g., using `PUT`, `DELETE`, or sending `Content-Type: application/json` or custom headers like `Authorization`):
1. The browser automatically pauses your request.
2. It sends an initial lightweight **`OPTIONS` preflight request** to the server asking: *"Do you allow requests from my origin with these methods and headers?"*
3. If the server responds with matching `Access-Control-*` headers, the browser sends the actual payload.

### Essential Server CORS Headers:
```http
# Which domains can access the resource:
Access-Control-Allow-Origin: https://my-frontend.com

# Allowed HTTP verbs:
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS

# Allowed request headers:
Access-Control-Allow-Headers: Content-Type, Authorization

# Allow sending cookies/credentials:
Access-Control-Allow-Credentials: true
```

> ⚠️ **Common Junior Developer Mistake:** You cannot "fix" a CORS error from client-side JavaScript. CORS is enforced by the **browser**, and permissions must be configured on the **backend server**!
