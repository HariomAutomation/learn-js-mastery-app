const e="05-loops-for-of-for-in",o="for-of + for-in ka use karo",n=`// 1. for-of se array ke values:
let fruits = ["apple", "banana", "mango"]
for (let fruit of fruits) {
  console.log(fruit)
}

// 2. for-of se string ke characters:
for (let char of "JS") {
  console.log(char)  // J, S
}

// 3. for-in se object keys + values:
let user = { name: "Riya", age: 25, city: "Delhi" }
for (let key in user) {
  console.log(key, user[key])
}
`,t=`let fruits = ["apple", "banana", "mango"]
for (let fruit of fruits) {
  console.log(fruit)
}
for (let char of "JS") {
  console.log(char)
}
let user = { name: "Riya", age: 25, city: "Delhi" }
for (let key in user) {
  console.log(key, user[key])
}`,r=[{input:[],expected:"apple"}],s=["for-of array/string values deta hai","for-in object keys deta hai","obj[key] se value milti hai"],a={id:e,title:o,starterCode:n,solution:t,tests:r,hints:s};export{a as default,s as hints,e as id,t as solution,n as starterCode,r as tests,o as title};
