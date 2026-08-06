const o="01-variables-declarations-scope-hoisting-20",t="const block scope",s=`if (true) {
  const x = 10
  console.log(x)
}
console.log(typeof x)`,n=`if (true) {
  const x = 10
  console.log(x)
}
console.log(typeof x)`,e=[{input:[],expected:`10
undefined`}],c=["const is block-scoped"],i={id:o,title:t,starterCode:s,solution:n,tests:e,hints:c};export{i as default,c as hints,o as id,n as solution,s as starterCode,e as tests,t as title};
