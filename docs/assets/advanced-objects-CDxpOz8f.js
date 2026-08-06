const n="08-objects-advanced-objects",e="Advanced objects — optional chaining + computed",o=`// 1. Optional chaining (?.)
const data = {
  user: {
    name: "Riya",
    address: {
      city: "Delhi"
    }
  }
}
console.log(data.user?.address?.city) // Delhi
console.log(data.user?.phone?.mobile) // ? (undefined, error nahi)

// 2. Computed property names
const field = "age"
const obj = {
  name: "Aman",
  [field]: 25
}
console.log(obj)

// 3. Object.fromEntries — array se object
const pairs = [["a", 1], ["b", 2], ["c", 3]]
const fromPairs = Object.fromEntries(pairs)
console.log(fromPairs)

// 4. Deep copy (structuredClone)
const original = { a: 1, b: { c: 2 } }
const deep = structuredClone(original)
deep.b.c = 99
console.log(original.b.c, deep.b.c)
`,s=`const data = { user: { name: "Riya", address: { city: "Delhi" } } }
console.log(data.user?.address?.city)
console.log(data.user?.phone?.mobile)
const field = "age"
const obj = { name: "Aman", [field]: 25 }
console.log(obj)
const pairs = [["a", 1], ["b", 2], ["c", 3]]
const fromPairs = Object.fromEntries(pairs)
console.log(fromPairs)
const original = { a: 1, b: { c: 2 } }
const deep = structuredClone(original)
deep.b.c = 99
console.log(original.b.c, deep.b.c)`,a=[{input:[],expected:`Delhi
undefined
{"name":"Aman","age":25}
{"a":1,"b":2,"c":3}
2 99`}],t=["?. se null/undefined pe error nahi aata","[variable] se dynamic key ban sakta hai","structuredClone() deep copy deta hai — nested objects bhi alag hote hain"],c={id:n,title:e,starterCode:o,solution:s,tests:a,hints:t};export{c as default,t as hints,n as id,s as solution,o as starterCode,a as tests,e as title};
