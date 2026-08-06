const n="07-arrays-array-patterns",t="Array patterns — flatten, group, deduplicate",s=`// 1. Flat array banao (nested array se)
const nested = [[1, 2], [3, 4], [5, 6]]
const flat = nested.flat()
console.log(flat) // [1, 2, 3, 4, 5, 6]

// 2. Duplicate remove karo (Set use karo)
const arr = [1, 2, 2, 3, 3, 3, 4]
const unique = [...new Set(arr)]
console.log(unique) // [1, 2, 3, 4]

// 3. Array sort descending
const nums = [10, 5, 8, 1, 7]
nums.sort((a, b) => b - a)
console.log(nums) // ?

// 4. Find first even number
const numbers = [1, 3, 5, 8, 9, 10]
const firstEven = numbers.find(n => n % 2 === 0)
console.log(firstEven) // ?
`,e=`const nested = [[1, 2], [3, 4], [5, 6]]
const flat = nested.flat()
console.log(flat)
const arr = [1, 2, 2, 3, 3, 3, 4]
const unique = [...new Set(arr)]
console.log(unique)
const nums = [10, 5, 8, 1, 7]
nums.sort((a, b) => b - a)
console.log(nums)
const numbers = [1, 3, 5, 8, 9, 10]
const firstEven = numbers.find(n => n % 2 === 0)
console.log(firstEven)`,o=[{input:[],expected:`[1, 2, 3, 4, 5, 6]
[1, 2, 3, 4]
[10, 8, 7, 5, 1]
8`}],a=["flat() ek level flatten karta hai","Set sirf unique values rakhta hai","sort((a,b) => b-a) se descending sort hota hai"],r={id:n,title:t,starterCode:s,solution:e,tests:o,hints:a};export{r as default,a as hints,n as id,e as solution,s as starterCode,o as tests,t as title};
