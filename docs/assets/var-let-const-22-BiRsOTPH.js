const t="01-variables-declarations-var-let-const-22",o="var hoisting demo",s=`console.log(a)
var a = 10
console.log(a)`,n=`console.log(a)
var a = 10
console.log(a)`,e=[{input:[],expected:`undefined
10`}],a=["var is hoisted, let is not"],i={id:t,title:o,starterCode:s,solution:n,tests:e,hints:a};export{i as default,a as hints,t as id,n as solution,s as starterCode,e as tests,o as title};
