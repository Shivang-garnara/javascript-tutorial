# Level 13 — Working with APIs and JSON

---

### A. Topic
- **Roadmap Location:** Level 13 (Topics 1 to 14)
- **Topics Covered:**
  1. What is an API (Application Programming Interface)?
  2. HTTP Protocol basics (Request & Response)
  3. HTTP Methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
  4. HTTP Status Codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)
  5. The modern `fetch()` API
  6. Parsing JSON response (`response.json()`)
  7. Checking network response status (`response.ok`)
  8. Sending headers and JSON request bodies (`POST`)
  9. CORS (Cross-Origin Resource Sharing) overview
  10. Managing Loading, Error, and Success UI states

---

### B. Simple Explanation

#### 1. What is an API?
An **API** is a digital messenger that allows your frontend JavaScript application to talk to a backend server.
Think of a restaurant waiter:
- **Client (Frontend):** You sitting at the table.
- **Waiter (The API):** Takes your order (`GET /menu`, `POST /order`).
- **Kitchen (Backend Database):** Prepares the food and gives it to the waiter.
- **Response:** The waiter brings your food back formatted as **JSON**.

#### 2. The `fetch()` Function
JavaScript has a built-in `fetch()` function to send HTTP requests:
```javascript
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
const data = await response.json();
console.log(data);
```

#### 3. Handling States: Loading, Success, Error
In any real application:
1. **Loading state:** Show a spinner while the request is in flight.
2. **Success state:** Display the data.
3. **Error state:** Show a user-friendly message if the network fails or server returns 404/500.

---

### C. Why Do We Need APIs?
Modern web applications rarely store their own data in the browser. Social networks, banking apps, weather tools, and e-commerce stores all fetch real-time data from APIs.

---

### D. Syntax

```javascript
// POST Request sending JSON data to an API
async function createPost(newPost) {
  const response = await fetch("https://api.example.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_TOKEN"
    },
    body: JSON.stringify(newPost)
  });
  return await response.json();
}
```

---

### E. Basic Example

Check `script.js` in this folder:
```javascript
async function loadUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) throw new Error("Could not fetch user");
    const user = await res.json();
    console.log(`User: ${user.name} | Email: ${user.email}`);
  } catch (err) {
    console.error("Network error:", err.message);
  }
}
```

---

### F. Expected Output
```text
User: Leanne Graham | Email: Sincere@april.biz
```

---

### G. Real-World Usage: Live Weather / Product Fetcher
```javascript
async function fetchCurrentWeather(city) {
  const apiKey = "YOUR_API_KEY";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    tempC: data.current.temp_c,
    condition: data.current.condition.text
  };
}
```

---

### H. Common Mistakes
1. **Assuming `fetch()` rejects on 404 or 500:**
   `fetch()` only rejects on actual **network failures** (like no internet). It resolves normally on 404 or 500! You must check `if (!response.ok)` yourself!
2. **Forgetting `await response.json()`:**
   `.json()` returns a Promise too! You must `await` it.
3. **Forgetting `"Content-Type": "application/json"` on POST:**
   Without this header, the server won't know how to parse your request body!

---

### I. Practice Exercises
Check `practice.js` in this folder:
1. **🟢 Beginner 1:** Use `fetch()` to get post #1 from `https://jsonplaceholder.typicode.com/posts/1` and log the title.
2. **🟢 Beginner 2:** Add an `if (!response.ok)` check to handle HTTP errors properly.
3. **🟡 Intermediate 3:** Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with `{ title: "My New Post", body: "Hello World", userId: 1 }`.
4. **🔴 Real-World Challenge 4:** Create a function `fetchWithRetry(url, maxRetries)` that automatically retries the API request up to 3 times before finally throwing an error.

---

### J. Lesson Recap
- APIs communicate via HTTP (`GET`, `POST`, `PUT`, `DELETE`).
- Check `response.ok` (status 200-299) before reading `.json()`.
- Use `POST` with headers & `JSON.stringify(body)` to submit data.
- Always implement loading and error states for great user experience.

---

### K. Progress
- ✅ Level 13 Completed
- 🔜 Next: Level 14 — Modern JavaScript (ES6+)
