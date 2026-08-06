---
id: "12-async-01-callbacks-promises"
title: "Callbacks & Promises"
module: "12-async"
order: 1
prerequisites: ["06-functions-01-function-basics"]
---

# Callbacks & Promises

JavaScript synchronous hai lekin kabhi-kabhi async kaam karna hota hai — API calls, file reading, timers.

## Synchronous vs Asynchronous

```js
// Sync — ek ek karke
console.log("1")
console.log("2")
console.log("3")
// Output: 1, 2, 3

// Async — callback queue mein jaata hai
console.log("1")
setTimeout(() => console.log("2"), 1000)
console.log("3")
// Output: 1, 3, 2
```

## Callbacks

```js
// Callback function jo doosre function ko pass hota hai
function fetchData(callback) {
  setTimeout(() => {
    let data = { name: "Riya", age: 22 }
    callback(data)
  }, 1000)
}

fetchData((data) => {
  console.log(data)  // { name: "Riya", age: 22 }
})
```

## Callback Hell

```js
// ❌ Nested callbacks = unreadable code
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      console.log(details)
    })
  })
})
```

## Promises — Solution

```js
// Promise object — success ya failure ka result
let myPromise = new Promise((resolve, reject) => {
  let success = true
  if (success) {
    resolve("Data mil gaya!")
  } else {
    reject("Error ho gaya!")
  }
})

myPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```

## Promise Chaining

```js
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Riya" }), 500)
  })
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1 }, { id: 2 }]), 500)
  })
}

// ✅ Clean chaining
getUser(1)
  .then(user => getOrders(user.id))
  .then(orders => console.log(orders))
  .catch(err => console.log(err))
```

## Key Takeaways

- Callbacks purana tarika hai — Promises better hain
- Promise 3 states: pending, fulfilled, rejected
- `.then()` success ke liye, `.catch()` error ke liye
- Promise chaining se flat code likh sakte ho
