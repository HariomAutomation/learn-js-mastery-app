const t="01-variables-declarations-scope-hoisting-17",e="TDZ reference",n=`try {
  let x = x
} catch(e) {
  console.log("TDZ")
}`,o=`try {
  let x = x
} catch(e) {
  console.log("TDZ")
}`,s=[{input:[],expected:"TDZ"}],c=["Cannot use let before declaration"],i={id:t,title:e,starterCode:n,solution:o,tests:s,hints:c};export{i as default,c as hints,t as id,o as solution,n as starterCode,s as tests,e as title};
