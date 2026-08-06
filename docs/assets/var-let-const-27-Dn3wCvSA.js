const t="01-variables-declarations-var-let-const-27",n="const swap impossible",s=`const a = 1, b = 2
try {
  [a, b] = [b, a]
} catch(e) {
  console.log("error")
}`,o=`const a = 1, b = 2
try {
  [a, b] = [b, a]
} catch(e) {
  console.log("error")
}`,e=[{input:[],expected:"error"}],a=["const cannot be reassigned"],c={id:t,title:n,starterCode:s,solution:o,tests:e,hints:a};export{c as default,a as hints,t as id,o as solution,s as starterCode,e as tests,n as title};
