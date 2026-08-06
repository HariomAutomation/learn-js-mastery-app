const t="01-variables-declarations-var-let-const-29",o="let block if",e=`if (true) {
  let x = 5
  console.log(x)
}
console.log(typeof x)`,n=`if (true) {
  let x = 5
  console.log(x)
}
console.log(typeof x)`,s=[{input:[],expected:`5
undefined`}],l=["let is block-scoped"],c={id:t,title:o,starterCode:e,solution:n,tests:s,hints:l};export{c as default,l as hints,t as id,n as solution,e as starterCode,s as tests,o as title};
