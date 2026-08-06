const t="01-variables-declarations-var-let-const-12",n="var global pollution",o=`var x = 1
function test() {
  var x = 2
}
test()
console.log(x)`,s=`var x = 1
function test() {
  var x = 2
}
test()
console.log(x)`,e=[{input:[],expected:"1"}],a=["function var is local"],l={id:t,title:n,starterCode:o,solution:s,tests:e,hints:a};export{l as default,a as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
