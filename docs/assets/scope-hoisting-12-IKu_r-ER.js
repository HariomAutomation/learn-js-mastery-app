const t="01-variables-declarations-scope-hoisting-12",n="Function block scope",o=`if (true) {
  function test() { return 10 }
}
try {
  console.log(test())
} catch(e) {
  console.log("error")
}`,e=`if (true) {
  function test() { return 10 }
}
try {
  console.log(test())
} catch(e) {
  console.log("error")
}`,s=[{input:[],expected:"error"}],r=["Function hoisting varies by environment"],c={id:t,title:n,starterCode:o,solution:e,tests:s,hints:r};export{c as default,r as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
