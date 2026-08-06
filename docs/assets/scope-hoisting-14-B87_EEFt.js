const t="01-variables-declarations-scope-hoisting-14",n="Global pollution",o=`var x = 1
function test() {
  x = 99
}
test()
console.log(x)`,s=`var x = 1
function test() {
  x = 99
}
test()
console.log(x)`,e=[{input:[],expected:"99"}],i=["Global var is modified everywhere"],l={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{l as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
