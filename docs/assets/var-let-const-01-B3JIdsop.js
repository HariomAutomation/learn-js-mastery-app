const t="01-variables-declarations-var-let-const-01",n="var function scope",o=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,s=`function test() {
  var x = 1
}
test()
console.log(typeof x)`,e=[{input:[],expected:"undefined"}],c=["var is function-scoped"],i={id:t,title:n,starterCode:o,solution:s,tests:e,hints:c};export{i as default,c as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
