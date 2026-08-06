---
id: "06-functions-01-function-basics"
title: "Function Declarations & Expressions"
module: "06-functions"
order: 1
prerequisites: []
---

**Function Declaration:**
Hoisted hota hai — pehle call kar sakte hain, baad mein define.

```javascript
greet() // ✅ Works (hoisted)

function greet() {
  console.log("Welcome to Sheryians!")
}
```

**Parameters vs Arguments:**
```javascript
function greet(name) {  // name = parameter
  console.log("Hello " + name)
}
greet("Harsh")  // "Harsh" = argument
```

**Return Value:**
Function se result wapas milta hai.

```javascript
function sum(a, b) {
  return a + b
}
let total = sum(5, 10) // total = 15
```

**Function Expression:**
Variable mein function store karna. NOT hoisted.

```javascript
const greet = function() {
  console.log("Hello!")
}
greet() // ✅ Works

// greet2() ❌ Error (not hoisted)
const greet2 = function() { console.log("Hi!") }
```

**Mindset:** Functions = reusable logic blocks. Define once, use many times.
