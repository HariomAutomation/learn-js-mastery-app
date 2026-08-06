const o="01-variables-declarations-scope-hoisting-26",t="block scope for",s=`for (var i = 0; i < 1; i++) {
  var a = i
  let b = i
  const c = i
}
console.log(a, b, c)`,n=`for (var i = 0; i < 1; i++) {
  var a = i
  let b = i
  const c = i
}
console.log(a, b, c)`,i=[{input:[],expected:"0 0 0"}],e=["All accessible after loop for var"],c={id:o,title:t,starterCode:s,solution:n,tests:i,hints:e};export{c as default,e as hints,o as id,n as solution,s as starterCode,i as tests,t as title};
