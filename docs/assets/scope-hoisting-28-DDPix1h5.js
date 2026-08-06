const t="01-variables-declarations-scope-hoisting-28",e="TDZ reference error",o=`try {
  x = 1
  let x
} catch(e) {
  console.log("error")
}`,n=`try {
  x = 1
  let x
} catch(e) {
  console.log("error")
}`,s=[{input:[],expected:"error"}],r=["let is in TDZ before declaration"],c={id:t,title:e,starterCode:o,solution:n,tests:s,hints:r};export{c as default,r as hints,t as id,n as solution,o as starterCode,s as tests,e as title};
