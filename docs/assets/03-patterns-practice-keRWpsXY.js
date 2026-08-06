const n=`---
id: "05-loops-03-patterns-practice"
title: "Loop Patterns & Practice"
module: "05-loops"
order: 3
prerequisites: []
---

**Common Loop Patterns:**

**1. Sum of array:**
\`\`\`javascript
let nums = [1, 2, 3, 4, 5]
let sum = 0
for (let n of nums) {
  sum += n
}
console.log(sum) // 15
\`\`\`

**2. Reverse a string:**
\`\`\`javascript
let str = "hello"
let reversed = ""
for (let char of str) {
  reversed = char + reversed
}
console.log(reversed) // "olleh"
\`\`\`

**3. Pattern printing:**
\`\`\`javascript
// Triangle pattern
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i))
}
// *
// **
// ***
// ****
// *****
\`\`\`

**4. Find max in array:**
\`\`\`javascript
let nums = [3, 7, 2, 9, 4]
let max = nums[0]
for (let n of nums) {
  if (n > max) max = n
}
console.log(max) // 9
\`\`\`

**5. Filter without filter():**
\`\`\`javascript
let nums = [1, 2, 3, 4, 5, 6]
let evens = []
for (let n of nums) {
  if (n % 2 === 0) evens.push(n)
}
console.log(evens) // [2, 4, 6]
\`\`\`
`;export{n as default};
