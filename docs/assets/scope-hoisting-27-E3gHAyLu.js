const t="01-variables-declarations-scope-hoisting-27",n="hoisting preview",o=`console.log(a)
var a = 1
function a() { return 2 }
console.log(a)`,s=`console.log(a)
var a = 1
function a() { return 2 }
console.log(a)`,e=[{input:[],expected:`function a() { return 2 }
1`}],i=["Function hoisted first"],a={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{a as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
