const n=`---
id: "07-arrays-03-array-patterns"
title: "Array Patterns & Practice"
module: "07-arrays"
order: 3
prerequisites: []
---

**Common Patterns:**

**1. Reverse an array:**
\`\`\`javascript
let arr = [1, 2, 3, 4, 5]
let reversed = []
for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i])
}
// [5, 4, 3, 2, 1]
\`\`\`

**2. Remove duplicates:**
\`\`\`javascript
let nums = [1, 2, 2, 3, 4, 4, 5]
let unique = [...new Set(nums)]
// [1, 2, 3, 4, 5]
\`\`\`

**3. Flatten array:**
\`\`\`javascript
let nested = [1, [2, 3], [4, [5]]]
console.log(nested.flat(2)) // [1, 2, 3, 4, 5]
\`\`\`

**4. Max/Min in array:**
\`\`\`javascript
let nums = [3, 7, 2, 9, 4]
Math.max(...nums) // 9
Math.min(...nums) // 2
\`\`\`

**5. Sum of even numbers:**
\`\`\`javascript
let nums = [1, 2, 3, 4, 5, 6]
let evenSum = nums
  .filter(n => n % 2 === 0)
  .reduce((a, b) => a + b, 0)
// 12
\`\`\`

**6. Object from array:**
\`\`\`javascript
let pairs = [["name", "Harsh"], ["age", 26]]
let obj = Object.fromEntries(pairs)
// { name: "Harsh", age: 26 }
\`\`\`
`;export{n as default};
