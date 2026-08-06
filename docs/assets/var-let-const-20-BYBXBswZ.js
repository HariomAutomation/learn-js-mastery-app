const t="01-variables-declarations-var-let-const-20",o="let block boundary",n=`let x = 1
{
  let x = 2
  console.log(x)
}
console.log(x)`,e=`let x = 1
{
  let x = 2
  console.log(x)
}
console.log(x)`,s=[{input:[],expected:`2
1`}],l=["Block let is separate from outer"],c={id:t,title:o,starterCode:n,solution:e,tests:s,hints:l};export{c as default,l as hints,t as id,e as solution,n as starterCode,s as tests,o as title};
