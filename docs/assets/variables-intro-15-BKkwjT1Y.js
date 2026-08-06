const t="01-variables-declarations-variables-intro-15",n="Block scope shadowing",o=`let x = "outer"
if (true) {
  let x = "inner"
  console.log(x)
}
console.log(x)`,e=`let x = "outer"
if (true) {
  let x = "inner"
  console.log(x)
}
console.log(x)`,s=[{input:[],expected:`inner
outer`}],l=["let is block-scoped"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:l};export{i as default,l as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
