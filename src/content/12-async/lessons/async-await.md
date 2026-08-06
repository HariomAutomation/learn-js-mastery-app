---
id: "12-async-02-async-await"
title: "Async / Await"
module: "12-async"
order: 2
prerequisites: ["12-async-01-callbacks-promises"]
---

# Async / Await

`async/await` Promises ka syntactic sugar hai — code aur bhi clean lagta hai.

## Basic Syntax

```js
// async function hamesha Promise return karti hai
async function getData() {
  return "Hello!"  // Promise<{Hello!}>
}

// await sirf async function ke andar use ho sakta hai
async function showData() {
  let data = await getData()
  console.log(data)  // "Hello!"
}
```

## Real Example

```js
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Riya" }), 500)
  })
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 500)
  })
}

// ✅ Async/Await — synchronous jaisa lagta hai
async function loadUserProfile() {
  try {
    let user = await fetchUser(1)
    console.log("User:", user.name)

    let posts = await fetchPosts(user.id)
    console.log("Posts:", posts)
  } catch (err) {
    console.log("Error:", err)
  }
}

loadUserProfile()
```

## Error Handling

```js
// Try/Catch se errors handle karo
async function riskyOperation() {
  try {
    let result = await someAsyncCall()
    return result
  } catch (error) {
    console.log("Failed:", error.message)
    return null
  } finally {
    console.log("Cleanup here")
  }
}
```

## Parallel Execution

```js
// ❌ Serial — slow (1 second total)
async function serial() {
  let a = await fetch("/api/a")  // 500ms
  let b = await fetch("/api/b")  // 500ms
}

// ✅ Parallel — fast (500ms total)
async function parallel() {
  let [a, b] = await Promise.all([
    fetch("/api/a"),
    fetch("/api/b")
  ])
}
```

## Key Takeaways

- `async` function hamesha Promise return karti hai
- `await` Promise resolve hone tak wait karta hai
- `try/catch` se error handling clean hoti hai
- `Promise.all()` se parallel async calls karo
- Code synchronous jaisa dikhta hai but async hota hai
