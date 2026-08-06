const e="08-objects-destructuring-copying",n="Destructuring + spread se objects",o=`const user = {
  name: "Aman",
  age: 25,
  role: "developer",
  skills: ["JS", "React"]
}

// 1. Object destructuring
const { name, role, ...rest } = user
console.log(name)
console.log(role)
console.log(rest) // baaki sab

// 2. Shallow copy (spread)
const copy = { ...user }
console.log(copy.name)

// 3. Override with spread
const updated = { ...user, age: 26, role: "senior" }
console.log(updated.age, updated.role)

// 4. Nested destructuring
const { skills: [first, second] } = user
console.log(first, second)
`,s=`const user = { name: "Aman", age: 25, role: "developer", skills: ["JS", "React"] }
const { name, role, ...rest } = user
console.log(name)
console.log(role)
console.log(rest)
const copy = { ...user }
console.log(copy.name)
const updated = { ...user, age: 26, role: "senior" }
console.log(updated.age, updated.role)
const { skills: [first, second] } = user
console.log(first, second)`,t=[{input:[],expected:`Aman
developer
{"name":"Aman","age":25,"role":"developer","skills":["JS","React"]}
Aman
26 senior
JS React`}],r=["Destructuring: const { key1, key2 } = object","...rest baaki sab keys collect karta hai","Spread: { ...obj } shallow copy deta hai"],l={id:e,title:n,starterCode:o,solution:s,tests:t,hints:r};export{l as default,r as hints,e as id,s as solution,o as starterCode,t as tests,n as title};
