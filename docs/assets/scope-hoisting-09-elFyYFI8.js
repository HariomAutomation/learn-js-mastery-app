const t="01-variables-declarations-scope-hoisting-09",n="Closure basics",o=`function counter() {
  let count = 0
  return () => ++count
}
const c = counter()
console.log(c(), c(), c())`,c=`function counter() {
  let count = 0
  return () => ++count
}
const c = counter()
console.log(c(), c(), c())`,s=[{input:[],expected:"1 2 3"}],e=["Closure captures outer variable"],r={id:t,title:n,starterCode:o,solution:c,tests:s,hints:e};export{r as default,e as hints,t as id,c as solution,o as starterCode,s as tests,n as title};
