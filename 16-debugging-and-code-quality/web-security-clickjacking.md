# Web Security: Clickjacking & Frame Busting Prevention 🛡️

**Clickjacking** (also known as a **UI Redress Attack**) is a malicious technique where an attacker tricks a user into clicking on a hidden, invisible element on a compromised site, while the user believes they are clicking on something completely innocuous.

---

## 1. How a Clickjacking Attack Works

1. The attacker creates an enticing web page (e.g., "Click here to claim your free ₹10,000 gift card!").
2. Inside that page, they embed your legitimate banking or social media website inside an `<iframe>`.
3. They use CSS to position the `<iframe>` directly over their fake button and make it completely invisible:
   `opacity: 0.0001; pointer-events: auto; z-index: 999;`
4. When the authenticated victim clicks the "Claim Gift Card" button, they are actually clicking the hidden **"Transfer ₹5,000"** or **"Delete Account"** button inside your legitimate site!

---

## 2. Defensive Measures: How to Prevent Clickjacking

### Defense 1: Content Security Policy (CSP) `frame-ancestors` (The Modern Standard)
The most robust and recommended defense is setting the `Content-Security-Policy` HTTP header from your server:

```http
# Disallow ALL websites (even your own) from framing your page:
Content-Security-Policy: frame-ancestors 'none';

# Or allow framing only by your own domain:
Content-Security-Policy: frame-ancestors 'self';

# Or allow framing only by trusted partner domains:
Content-Security-Policy: frame-ancestors 'self' https://trusted-partner.com;
```

### Defense 2: `X-Frame-Options` HTTP Header (Legacy Fallback)
Supported by older browsers before CSP was standardized:
```http
# Complete block:
X-Frame-Options: DENY

# Allow only same origin:
X-Frame-Options: SAMEORIGIN
```

### Defense 3: JavaScript Frame-Busting Code (Defense-in-Depth)
Before HTTP security headers existed, developers used client-side JavaScript "frame busting" to break out of iframes:

```javascript
// Check if the current window is inside an iframe:
if (top !== self) {
  // Break out by forcing top-level window to redirect to this page:
  top.location = self.location;
}
```

#### Why HTTP Headers are Superior to JS Frame Busting:
An attacker can easily neutralize client-side JS frame busting by applying the HTML5 `sandbox` attribute to the iframe:
`<iframe src="https://victim.com" sandbox="allow-forms allow-scripts">`
The `sandbox` attribute prevents the framed page from navigating top-level windows (`top.location`), disabling the frame buster. Therefore, **CSP `frame-ancestors` is always the primary line of defense**!

---

## 3. Web Security Checklist for JavaScript Developers
- [x] Configure `Content-Security-Policy: frame-ancestors 'none'` on all authenticated endpoints.
- [x] Set `SameSite=Lax` or `SameSite=Strict` on session cookies to prevent CSRF in framed requests.
- [x] Require user re-authentication or password confirmation before high-risk actions (e.g., changing passwords or transferring funds).
