const o="01-variables-declarations-var-let-const",n="var vs let vs const ka farq check karo",e=`// Is code ko run karo aur har line ka result socho
{
  var a = 10
  let b = 20
  const c = 30
}

console.log(a)
// console.log(b) // is line ko uncomment karo
// console.log(c) // is line ko uncomment karo
`,t=`{
  var a = 10
  let b = 20
  const c = 30
}
console.log(a) // 10 — var block ke bahar bhi accessible
// console.log(b) // ReferenceError — let block scoped
// console.log(c) // ReferenceError — const block scoped`,s=[{input:[],expected:"10"}],c=["var block {} ke bahar bhi chalta hai","let aur const block ke andar hi rehte hain"],a={id:o,title:n,starterCode:e,solution:t,tests:s,hints:c};export{a as default,c as hints,o as id,t as solution,e as starterCode,s as tests,n as title};
