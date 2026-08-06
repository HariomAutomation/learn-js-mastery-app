const t="01-variables-declarations-scope-hoisting-22",n="var function only",o=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,s=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,e=[{input:[],expected:"undefined"}],i=["var is confined to function"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:i};export{c as default,i as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
