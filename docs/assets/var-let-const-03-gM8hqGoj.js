const t="01-variables-declarations-var-let-const-03",n="const reassignment error",o=`const x = 1
try {
  x = 2
} catch(e) {
  console.log("error")
}`,s=`const x = 1
try {
  x = 2
} catch(e) {
  console.log("error")
}`,e=[{input:[],expected:"error"}],r=["const cannot be reassigned"],c={id:t,title:n,starterCode:o,solution:s,tests:e,hints:r};export{c as default,r as hints,t as id,s as solution,o as starterCode,e as tests,n as title};
