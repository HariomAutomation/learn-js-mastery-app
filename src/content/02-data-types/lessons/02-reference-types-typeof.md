---
id: "02-data-types-02-reference-types-typeof"
title: "Reference Types & typeof"
module: "02-data-types"
order: 2
prerequisites: []
---

**Reference Types:**
- **Object** — `{ name: "Harsh", age: 26 }`
- **Array** — `[10, 20, 30]`
- **Function** — `function greet() {}`

Ye memory mein reference (pointer) store karte hain, value nahi.

```javascript
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log(arr1) // [1, 2, 3, 4] — dono same reference!
```

**typeof Operator:**
Data type check karne ke liye use hota hai.

```javascript
typeof "Sheryians"  // "string"
typeof 99           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" ← JS bug!
typeof []           // "object"
typeof {}           // "object"
typeof function(){} // "function"
```

**⚠️ Known Bug:** `typeof null === "object"` — JS ka original bug, ab change nahi kar sakte.
