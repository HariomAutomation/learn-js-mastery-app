const n="01-variables-declarations-scope-hoisting-29",o="scope chain lookup order",t=`var x = 1
function a() {
  console.log(x)
}
function b() {
  var x = 2
  a()
}
b()`,s=`var x = 1
function a() {
  console.log(x)
}
function b() {
  var x = 2
  a()
}
b()`,e=[{input:[],expected:"1"}],i=["a looks at its own scope chain, not b's"],c={id:n,title:o,starterCode:t,solution:s,tests:e,hints:i};export{c as default,i as hints,n as id,s as solution,t as starterCode,e as tests,o as title};
