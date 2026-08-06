const t="01-variables-declarations-var-let-const-39",o="const reassign object",n=`const obj = { a: 1 }
try {
  obj = { b: 2 }
} catch(e) {
  console.log("error")
}`,s=`const obj = { a: 1 }
try {
  obj = { b: 2 }
} catch(e) {
  console.log("error")
}`,e=[{input:[],expected:"error"}],r=["const cannot reassign variable"],c={id:t,title:o,starterCode:n,solution:s,tests:e,hints:r};export{c as default,r as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
