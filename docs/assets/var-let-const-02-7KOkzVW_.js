const t="01-variables-declarations-var-let-const-02",e="let block scope",o=`if (true) {
  let x = 10
}
console.log(typeof x)`,s=`if (true) {
  let x = 10
}
console.log(typeof x)`,n=[{input:[],expected:"undefined"}],l=["let is block-scoped"],c={id:t,title:e,starterCode:o,solution:s,tests:n,hints:l};export{c as default,l as hints,t as id,s as solution,o as starterCode,n as tests,e as title};
