const t="01-variables-declarations-var-let-const-28",e="var vs let scope",s=`if (true) {
  var a = 1
  let b = 2
}
console.log(a, typeof b)`,n=`if (true) {
  var a = 1
  let b = 2
}
console.log(a, typeof b)`,o=[{input:[],expected:"1 undefined"}],a=["var leaks, let stays in block"],l={id:t,title:e,starterCode:s,solution:n,tests:o,hints:a};export{l as default,a as hints,t as id,n as solution,s as starterCode,o as tests,e as title};
