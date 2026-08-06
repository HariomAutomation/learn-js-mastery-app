const n=`---
id: "06-functions-03-closures-iife"
title: "Closures & IIFE"
module: "06-functions"
order: 3
prerequisites: []
---

**Closure = Function yaad rakhna**

Jab ek function apne parent scope ke variables ko access karta hai, parent function finish hone ke baad bhi.

\`\`\`javascript
function outer() {
  let count = 0
  return function() {
    count++
    console.log(count)
  }
}

let counter = outer()
counter() // 1
counter() // 2
counter() // 3
// outer() finish ho chuka hai lekin count abhi bhi accessible hai!
\`\`\`

**Real-world use — Private variables:**
\`\`\`javascript
function createCounter() {
  let count = 0
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  }
}

let counter = createCounter()
counter.increment() // 1
counter.increment() // 2
counter.getCount()  // 2
// count directly access nahi kar sakte!
\`\`\`

**IIFE — Immediately Invoked Function Expression:**
\`\`\`javascript
(function() {
  console.log("Runs immediately!")
})()

// Use: private scope create karna, global pollution avoid karna
let result = (function(a, b) {
  return a + b
})(5, 10) // 15
\`\`\`

**Closures powerful hain** — data privacy, function factories, event handlers mein use hote hain.
`;export{n as default};
