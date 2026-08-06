---
id: "07-arrays-02-map-filter-reduce"
title: "map, filter, reduce"
module: "07-arrays"
order: 2
prerequisites: []
---

**map() — Har element ko transform karo:**
```javascript
let prices = [100, 200, 300]
let taxed = prices.map(p => p * 1.18)
// [118, 236, 354]

let names = ["harsh", "riya"]
let upper = names.map(n => n.toUpperCase())
// ["HARSH", "RIYA"]
```

**filter() — Condition match karo:**
```javascript
let nums = [1, 2, 3, 4, 5, 6]
let evens = nums.filter(n => n % 2 === 0)
// [2, 4, 6]

let scores = [45, 78, 92, 33, 60]
let passed = scores.filter(s => s >= 50)
// [78, 92, 60]
```

**reduce() — Single value mein jodo:**
```javascript
let nums = [1, 2, 3, 4, 5]
let total = nums.reduce((acc, val) => acc + val, 0)
// 15

// acc = accumulator, val = current value, 0 = initial
```

**find(), some(), every():**
```javascript
let nums = [1, 2, 3, 4]
nums.find(n => n > 2)    // 3 (pehla match)
nums.some(n => n > 5)    // false (koi ek nahi)
nums.every(n => n > 0)   // true (sab true)
```

**Chaining:**
```javascript
let prices = [100, 200, 300, 400]
let result = prices
  .filter(p => p >= 200)  // [200, 300, 400]
  .map(p => p * 1.18)     // [236, 354, 472]
  .reduce((a, b) => a + b, 0) // 1062
```
