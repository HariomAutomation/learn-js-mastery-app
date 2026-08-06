---
id: "08-objects-02-destructuring-copying"
title: "Destructuring & Copying"
module: "08-objects"
order: 2
prerequisites: []
---

**Destructuring — Values nikalna:**
```javascript
let student = { name: "Ravi", age: 21, course: "JS" }

let { name, age } = student
// name = "Ravi", age = 21

// Rename karna
let { name: studentName } = student
// studentName = "Ravi"

// Default values
let { grade = "A" } = student
// grade = "A" (key nahi hai to default)

// Nested destructuring
let user = { name: "Amit", address: { city: "Delhi" } }
let { address: { city } } = user
// city = "Delhi"
```

**Shallow Copy (1 level deep):**
```javascript
let original = { name: "Ravi", details: { age: 21 } }
let copy1 = { ...original }
let copy2 = Object.assign({}, original)
// Nested objects same reference rahenge!
```

**Deep Copy (saari levels):**
```javascript
let deepCopy = JSON.parse(JSON.stringify(user))
// ⚠️ Functions, undefined, Date lose ho jaate hain
```

**Looping through Objects:**
```javascript
let user = { name: "Harsh", age: 26, city: "Delhi" }

for (let key in user) {
  console.log(key, user[key])
}

Object.keys(user)    // ["name", "age", "city"]
Object.values(user)  // ["Harsh", 26, "Delhi"]
Object.entries(user) // [["name","Harsh"], ["age",26], ...]
```
