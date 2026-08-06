const t="01-variables-declarations-var-let-const-31",n="var inside function",s=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,o=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,e=[{input:[],expected:"undefined"}],i=["var is function-scoped"],c={id:t,title:n,starterCode:s,solution:o,tests:e,hints:i};export{c as default,i as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
