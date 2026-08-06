const t="01-variables-declarations-var-let-const-13",n="const initialization",o=`try {
  const x
} catch(e) {
  console.log("error")
}`,s=`try {
  const x
} catch(e) {
  console.log("error")
}`,e=[{input:[],expected:"error"}],c=["const must be initialized"],i={id:t,title:n,starterCode:o,solution:s,tests:e,hints:c};export{i as default,c as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
