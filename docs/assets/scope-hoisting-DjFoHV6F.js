const n="01-variables-declarations-scope-hoisting",o="Hoisting ka output predict karo",e=`// Pehle predict karo, phir run karo:
console.log(x)      // ?
var x = 5

// console.log(y)  // ? — uncomment karo
let y = 10

console.log(z)      // ?
function z() {}
`,t=`console.log(x)  // undefined — var hoisted with undefined
var x = 5
// console.log(y) // ReferenceError — let TDZ mein hai
let y = 10
console.log(z)  // function hoisted hai, poora define ho jaata hai
function z() {}`,i=[{input:[],expected:"undefined"}],s=["var hoisted hota hai with undefined value","let/const hoisted hain lekin TDZ mein — ReferenceError","Function declaration poora hoisted hota hai"],a={id:n,title:o,starterCode:e,solution:t,tests:i,hints:s};export{a as default,s as hints,n as id,t as solution,e as starterCode,i as tests,o as title};
