---
id: "05-loops-02-for-of-for-in"
title: "for-of & for-in"
module: "05-loops"
order: 2
prerequisites: []
---

**for-of — Arrays & Strings ke liye:**
Iterables par iterate karta hai (arrays, strings, etc.).

```javascript
let fruits = ["apple", "banana", "mango"]
for (let fruit of fruits) {
  console.log(fruit)
}

// String par bhi kaam karta hai
for (let char of "Sheryians") {
  console.log(char) // S, h, e, r, y...
}
```

**for-in — Objects ke liye:**
Object keys par iterate karta hai.

```javascript
let user = { name: "Harsh", age: 26, city: "Delhi" }
for (let key in user) {
  console.log(key, user[key])
  // "name Harsh", "age 26", "city Delhi"
}
```

**⚠️ for-in arrays mein use mat karo** — unexpected keys aa sakte hain.

**Quick Reference:**
- Array values → `for-of`
- Array indexes → `for`
- Object keys → `for-in`
- Array with index+value → `forEach` ya `entries()`
