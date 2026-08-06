const t="01-variables-declarations-scope-hoisting-03",o="Block scope",e=`if (true) {
  let x = 10
}
console.log(typeof x)`,s=`if (true) {
  let x = 10
}
console.log(typeof x)`,n=[{input:[],expected:"undefined"}],i=["let is block-scoped"],c={id:t,title:o,starterCode:e,solution:s,tests:n,hints:i};export{c as default,i as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
