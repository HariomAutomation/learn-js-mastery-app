const e="01-variables-declarations-variables-intro",a="Apne pehle variables banao",n=`// 1. const se apna naam aur city declare karo
// 2. let se apni age declare karo
// 3. Teeno ko console.log karo

const name = "________"
const city = "________"
let age = 0

// Yahan console.log karo
`,t=`const name = "Riya"
const city = "Delhi"
let age = 25
console.log(name, city, age)`,o=[{input:[],expected:"Riya Delhi 25"}],s=["const = jo value kabhi change nahi hogi (name, city)","let = jo value badal sakti hai (age)","console.log(name, city, age) se ek line mein print hota hai"],i={id:e,title:a,starterCode:n,solution:t,tests:o,hints:s};export{i as default,s as hints,e as id,t as solution,n as starterCode,o as tests,a as title};
