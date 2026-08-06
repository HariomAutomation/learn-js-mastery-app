const n=`---
id: "06-functions-04-higher-order-functions"
title: "Higher-Order Functions"
module: "06-functions"
order: 4
prerequisites: []
---

**Higher-Order Function (HOF) = Function jo function le ya return kare**

**Function as argument:**
\`\`\`javascript
function shout(msg) {
  return msg.toUpperCase()
}

function processMessage(fn) {
  return fn("hello")
}

processMessage(shout) // "HELLO"
\`\`\`

**Function factory — function return karna:**
\`\`\`javascript
function createMultiplier(x) {
  return function(y) {
    return x * y
  }
}

let double = createMultiplier(2)
let triple = createMultiplier(3)

console.log(double(5)) // 10
console.log(triple(5)) // 15
\`\`\`

**Callbacks:**
\`\`\`javascript
function greet(name, formatter) {
  return formatter(name)
}

greet("sheryians", str => str.toUpperCase()) // "SHERYIANS"
greet("SHERYIANS", str => str.toLowerCase()) // "sheryians"
\`\`\`

**Real-world pattern:**
\`\`\`javascript
function withLogging(fn) {
  return function(...args) {
    console.log("Calling with:", args)
    const result = fn(...args)
    console.log("Result:", result)
    return result
  }
}

const addLogged = withLogging((a, b) => a + b)
addLogged(3, 4) // Logs input + output
\`\`\`

**HOF se abstraction aati hai** — logic ko separate kar sakte hain.
`;export{n as default};
