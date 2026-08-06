const n="01-variables-declarations-scope-hoisting-04",t="Lexical scope",o=`function outer() {
  const x = 10
  return function inner() {
    return x
  }
}
console.log(outer()())`,e=`function outer() {
  const x = 10
  return function inner() {
    return x
  }
}
console.log(outer()())`,s=[{input:[],expected:"10"}],c=["Inner functions access outer variables"],i={id:n,title:t,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,n as id,e as solution,o as starterCode,s as tests,t as title};
