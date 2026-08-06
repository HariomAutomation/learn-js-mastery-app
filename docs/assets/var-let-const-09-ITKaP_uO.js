const t="01-variables-declarations-var-let-const-09",e="let redeclaration error",o=`try {
  let x = 1
  let x = 2
} catch(e) {
  console.log("error")
}`,n=`try {
  let x = 1
  let x = 2
} catch(e) {
  console.log("error")
}`,r=[{input:[],expected:"error"}],s=["let does not allow redeclaration"],l={id:t,title:e,starterCode:o,solution:n,tests:r,hints:s};export{l as default,s as hints,t as id,n as solution,o as starterCode,r as tests,e as title};
