const n=`---
id: "12-async-03-fetch-api"
title: "Fetch API & HTTP Requests"
module: "12-async"
order: 3
prerequisites: ["12-async-02-async-await"]
---

# Fetch API & HTTP Requests

Web se data laane ke liye Fetch API use hota hai.

## Basic GET Request

\`\`\`js
// Fetch Promise return karta hai
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())    // response ko JSON mein convert
  .then(data => console.log(data))
  .catch(err => console.log(err))
\`\`\`

## With Async/Await

\`\`\`js
async function getUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1")

    if (!res.ok) {
      throw new Error(\`HTTP error! Status: \${res.status}\`)
    }

    let data = await res.json()
    console.log(data.name)
  } catch (err) {
    console.log("Fetch failed:", err.message)
  }
}
\`\`\`

## POST Request

\`\`\`js
async function createPost() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "New Post",
      body: "Hello World",
      userId: 1
    })
  })

  let data = await res.json()
  console.log(data)
}
\`\`\`

## Other Methods

\`\`\`js
// PUT — full update
await fetch(url, { method: "PUT", body: JSON.stringify(data) })

// PATCH — partial update
await fetch(url, { method: "PATCH", body: JSON.stringify(data) })

// DELETE
await fetch(url, { method: "DELETE" })
\`\`\`

## Practical Example: Todo App API

\`\`\`js
const API = "https://jsonplaceholder.typicode.com/todos"

async function getTodos() {
  let res = await fetch(\`\${API}?_limit=5\`)
  return await res.json()
}

async function addTodo(title) {
  let res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false })
  })
  return await res.json()
}

async function deleteTodo(id) {
  await fetch(\`\${API}/\${id}\`, { method: "DELETE" })
}

// Usage
let todos = await getTodos()
console.log(todos)
\`\`\`

## Key Takeaways

- \`fetch()\` se GET request automatically hoti hai
- \`.json()\` se response parse hota hai — ye bhi Promise hai
- \`res.ok\` check karo — false ho to error throw karo
- \`method\`, \`headers\`, \`body\` se POST/PUT/DELETE configure karo
- \`JSON.stringify()\` se object ko string banao body ke liye
`;export{n as default};
