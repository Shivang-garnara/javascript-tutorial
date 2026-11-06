# MERN Stack & Placement 360 Tech Interview Roadmap (GFG)

This guide summarizes the architectural and interview concepts taught in the **GeeksforGeeks MERN Full-Stack**, **Placement 360**, and **DSA/System Design** curriculums.

---

## 1. The MERN Stack Architecture

```
  ┌─────────────────────────────────────────────────────────┐
  │                 React.js (Frontend / Client)            │
  │     - Virtual DOM, State & Props, React Hooks           │
  │     - Component Lifecycle, Redux / Context API          │
  └───────────────────────────┬─────────────────────────────┘
                              │ HTTP Requests (REST / JSON)
                              ▼
  ┌─────────────────────────────────────────────────────────┐
  │                Node.js & Express.js (Backend API)       │
  │     - Non-blocking I/O & Event Loop                     │
  │     - Routing, Middleware, Authentication (JWT/Bcrypt)  │
  └───────────────────────────┬─────────────────────────────┘
                              │ Mongoose ODM Driver
                              ▼
  ┌─────────────────────────────────────────────────────────┐
  │               MongoDB (NoSQL Document Database)         │
  │     - Collections & BSON Documents                      │
  │     - Indexing, Aggregation Pipeline, Replication       │
  └─────────────────────────────────────────────────────────┘
```

---

## 2. Top JavaScript Interview Concepts Asked in Placement Interviews

### A. Core Engine Mechanics:
1. **Event Loop & Concurrency:** Microtasks (Promise callbacks, `queueMicrotask`) have higher priority than Macrotasks (`setTimeout`, `setInterval`).
2. **Execution Context:** Creation Phase (hoisting, variable environment) vs Execution Phase.
3. **Closures:** A function enclosing its lexical scope. Frequently asked in interview coding questions (e.g. implementing `memoize` or `curry`).
4. **`this` Binding Rules:** Default binding, Implicit binding (obj method), Explicit binding (`call`, `apply`, `bind`), and Arrow function lexical binding.

---

## 3. High-Level System Design Basics in JavaScript

When building scalable web applications:
- **Stateless Server Architecture:** Store sessions in JWT or Redis rather than server memory so multiple backend instances can scale horizontally.
- **Rate Limiting:** Protect APIs from denial-of-service using token bucket algorithms.
- **Caching (Redis / Browser Cache):** Cache frequent read requests to reduce database load.
- **Debouncing & Throttling:** Throttle window scroll/resize events; debounce search auto-suggest input fields to avoid sending unnecessary network requests on every keystroke.
