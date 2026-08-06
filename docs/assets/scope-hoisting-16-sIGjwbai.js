const o="01-variables-declarations-scope-hoisting-16",t="Hoisting order",n=`console.log(typeof a)
var a = 1
function a() {}
console.log(typeof a)`,s=`console.log(typeof a)
var a = 1
function a() {}
console.log(typeof a)`,e=[{input:[],expected:`function
number`}],i=["Function hoisted first, then var"],a={id:o,title:t,starterCode:n,solution:s,tests:e,hints:i};export{a as default,i as hints,o as id,s as solution,n as starterCode,e as tests,t as title};
