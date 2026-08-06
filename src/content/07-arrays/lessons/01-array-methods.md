---
id: "07-arrays-01-array-methods"
title: "Array Creation & Methods"
module: "07-arrays"
order: 1
prerequisites: []
---

**Array kya hai?**
Index-based collection of values.

```javascript
let fruits = ["apple", "banana", "mango"]
console.log(fruits[0]) // "apple"
fruits[1] = "grape"    // Update
```

**Modifiers (Original array change karte hain):**
```javascript
let arr = [1, 2, 3, 4]
arr.push(5)      // End mein add: [1,2,3,4,5]
arr.pop()        // Last remove: [1,2,3,4]
arr.shift()      // First remove: [2,3,4]
arr.unshift(0)   // Start mein add: [0,2,3,4]
arr.reverse()    // Reverse: [4,3,2,0]
arr.splice(1, 2) // Index 1 se 2 items remove: [4,2]
```

**Extractors (Original change nahi karte):**
```javascript
let arr = [1, 2, 3, 4]
let sliced = arr.slice(1, 3) // [2, 3] (copy)
arr.sort() // Lexical sort — numbers ke liye galat!
```

**⚠️ sort() trap:**
```javascript
[10, 2, 3].sort() // [10, 2, 3] ❌ (string comparison)
[10, 2, 3].sort((a, b) => a - b) // [2, 3, 10] ✅
```

**Destructuring:**
```javascript
let [first, second] = ["a", "b", "c"]
// first = "a", second = "b"
```

**Spread:**
```javascript
let nums = [1, 2, 3]
let newArr = [...nums, 99] // [1, 2, 3, 99]
```
