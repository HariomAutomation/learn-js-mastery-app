const n="06-functions-arrow-functions",o="Arrow functions se calculation",e=`// 1. Arrow function — double(x) jo x*2 return kare
// 2. Arrow function — isEven(n) jo true/false return kare
// 3. Single line arrow function — square(x)

const double = (x) => {
  // yahan likho
}

const isEven = (n) => {
  // yahan likho
}

const square = (x) => x * x

console.log(double(5))
console.log(isEven(4))
console.log(square(6))
`,s=`const double = (x) => x * 2
const isEven = (n) => n % 2 === 0
const square = (x) => x * x

console.log(double(5))
console.log(isEven(4))
console.log(square(6))`,t=[{input:[],expected:`10
true
36`}],r=["Arrow: (params) => expression ya (params) => { return expression }","Single expression mein return keyword zaroori nahi","n % 2 === 0 se check hota hai even"],i={id:n,title:o,starterCode:e,solution:s,tests:t,hints:r};export{i as default,r as hints,n as id,s as solution,e as starterCode,t as tests,o as title};
