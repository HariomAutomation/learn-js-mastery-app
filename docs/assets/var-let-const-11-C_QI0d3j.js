const t="01-variables-declarations-var-let-const-11",o="Loop let scope",e=`for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,s=`for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,i=[{input:[],expected:`0
1
2`}],n=["let is block-scoped per iteration"],l={id:t,title:o,starterCode:e,solution:s,tests:i,hints:n};export{l as default,n as hints,t as id,s as solution,e as starterCode,i as tests,o as title};
