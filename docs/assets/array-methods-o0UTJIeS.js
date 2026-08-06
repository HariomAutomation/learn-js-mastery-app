const n="07-arrays-array-methods",s="Array methods ka combo",o=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. push + unshift se naye elements jodo
nums.push(11)
nums.unshift(0)
console.log(nums.length) // 12

// 2. pop + shift se elements nikalo
nums.pop()
nums.shift()
console.log(nums) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 3. slice vs splice:
const sliced = nums.slice(2, 5)
console.log(sliced) // ?

nums.splice(2, 2, 20, 30)
console.log(nums) // ?
`,e=`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.push(11)
nums.unshift(0)
console.log(nums.length) // 12
nums.pop()
nums.shift()
console.log(nums) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sliced = nums.slice(2, 5)
console.log(sliced) // [3, 4, 5]
nums.splice(2, 2, 20, 30)
console.log(nums) // [1, 2, 20, 30, 5, 6, 7, 8, 9]`,t=[{input:[],expected:`12
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[3, 4, 5]
[1, 2, 20, 30, 5, 6, 7, 8, 9]`}],l=["push/unshift = end/start mein add","pop/shift = end/start se remove","slice = copy without modify, splice = modify original"],i={id:n,title:s,starterCode:o,solution:e,tests:t,hints:l};export{i as default,l as hints,n as id,e as solution,o as starterCode,t as tests,s as title};
