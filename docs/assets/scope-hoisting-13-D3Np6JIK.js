const o="01-variables-declarations-scope-hoisting-13",t="Loop var vs let",n=`for (var i = 0; i < 2; i++) {}
console.log(i)
for (let j = 0; j < 2; j++) {}
try {
  console.log(j)
} catch(e) {
  console.log("error")
}`,s=`for (var i = 0; i < 2; i++) {}
console.log(i)
for (let j = 0; j < 2; j++) {}
try {
  console.log(j)
} catch(e) {
  console.log("error")
}`,e=[{input:[],expected:`2
error`}],r=["var leaks, let stays in block"],l={id:o,title:t,starterCode:n,solution:s,tests:e,hints:r};export{l as default,r as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
