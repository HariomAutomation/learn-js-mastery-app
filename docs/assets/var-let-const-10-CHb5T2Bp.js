const t="01-variables-declarations-var-let-const-10",s="Loop var vs let",o=`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,e=`for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)
}`,i=[{input:[],expected:`3
3
3`}],n=["var is shared across iterations"],r={id:t,title:s,starterCode:o,solution:e,tests:i,hints:n};export{r as default,n as hints,t as id,e as solution,o as starterCode,i as tests,s as title};
