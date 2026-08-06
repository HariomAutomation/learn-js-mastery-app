const t="01-variables-declarations-scope-hoisting-25",n="block scope if",o=`if (true) {
  var a = 1
  let b = 2
  const c = 3
}
console.log(a, typeof b, typeof c)`,e=`if (true) {
  var a = 1
  let b = 2
  const c = 3
}
console.log(a, typeof b, typeof c)`,s=[{input:[],expected:"1 undefined undefined"}],c=["var leaks, let/const stay in block"],i={id:t,title:n,starterCode:o,solution:e,tests:s,hints:c};export{i as default,c as hints,t as id,e as solution,o as starterCode,s as tests,n as title};
