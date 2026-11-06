// ===============================================
// Level 13: Working with APIs & JSON — script.js
// ===============================================

// 1. GET Request Example
async function fetchSinglePost() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  console.log("Fetching post from:", url);

  try {
    const response = await fetch(url);

    // CRITICAL: Check if HTTP status is 200-299
    if (!response.ok) {
      throw new Error(`Server returned error status: ${response.status}`);
    }

    const post = await response.json();
    console.log("Post Title:", post.title);
    console.log("Post Body:", post.body);
  } catch (error) {
    console.error("API Fetch Error:", error.message);
  }
}

// 2. POST Request Example (Creating a new resource)
async function createNewPost(postData) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  console.log("Submitting new post...");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(`Failed to create post. Status: ${response.status}`);
    }

    const createdRecord = await response.json();
    console.log("Post Created Successfully! ID assigned:", createdRecord.id);
  } catch (err) {
    console.error("Creation Error:", err.message);
  }
}

// Execute demo functions
fetchSinglePost();
createNewPost({
  title: "Mastering JavaScript",
  body: "Learning Level 13: APIs and JSON with real examples!",
  userId: 101
});

