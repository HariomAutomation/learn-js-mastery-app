const t="01-variables-declarations-var-let-const-23",o="let block boundary for",e=`for (let i = 0; i < 2; i++) {
  let x = i * 10
  console.log(x)
}`,s=`for (let i = 0; i < 2; i++) {
  let x = i * 10
  console.log(x)
}`,n=[{input:[],expected:`0
10`}],l=["let is scoped to loop block"],i={id:t,title:o,starterCode:e,solution:s,tests:n,hints:l};export{i as default,l as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
