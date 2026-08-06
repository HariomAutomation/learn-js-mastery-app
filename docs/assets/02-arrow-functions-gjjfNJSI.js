const n=`---
id: "06-functions-02-arrow-functions"
title: "Arrow Functions & Parameters"
module: "06-functions"
order: 2
prerequisites: []
---

**Arrow Functions — Modern syntax:**

\`\`\`javascript
// Regular
const add = function(a, b) {
  return a + b
}

// Arrow (full)
const add = (a, b) => {
  return a + b
}

// Arrow (concise — implicit return)
const add = (a, b) => a + b

// Single param (no parentheses needed)
const double = x => x * 2
\`\`\`

**Default Parameters:**
\`\`\`javascript
function multiply(a = 1, b = 1) {
  return a * b
}
multiply(5)    // 5 (b defaults to 1)
multiply(5, 3) // 15
\`\`\`

**Rest Parameter:**
\`\`\`javascript
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0)
}
sum(1, 2, 3, 4) // 10
\`\`\`

**Spread Operator:**
\`\`\`javascript
let nums = [1, 2, 3]
console.log(sum(...nums)) // 6 (array ko spread kiya)

// Copy arrays
let copy = [...nums] // [1, 2, 3]

// Merge arrays
let merged = [...nums, 4, 5] // [1, 2, 3, 4, 5]
\`\`\`

**Arrow ka \`this\` lexical hota hai** — parent scope se leta hai, khud ka nahi banata.
`;export{n as default};
