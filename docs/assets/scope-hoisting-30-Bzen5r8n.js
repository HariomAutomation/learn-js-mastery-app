const n="01-variables-declarations-scope-hoisting-30",t="lexical environment",o=`function outer() {
  const x = 10
  return function inner() {
    console.log(x)
  }
}
const fn = outer()
fn()`,e=`function outer() {
  const x = 10
  return function inner() {
    console.log(x)
  }
}
const fn = outer()
fn()`,s=[{input:[],expected:"10"}],i=["Lexical scope = where function is defined"],c={id:n,title:t,starterCode:o,solution:e,tests:s,hints:i};export{c as default,i as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
