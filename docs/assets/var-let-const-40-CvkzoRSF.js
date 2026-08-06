const t="01-variables-declarations-var-let-const-40",o="var in for let in for",i=`for (var i = 0; i < 2; i++) {}
for (let i = 0; i < 2; i++) {}
console.log(typeof i)`,e=`for (var i = 0; i < 2; i++) {}
for (let i = 0; i < 2; i++) {}
console.log(typeof i)`,s=[{input:[],expected:"number"}],n=["var i leaks out"],r={id:t,title:o,starterCode:i,solution:e,tests:s,hints:n};export{r as default,n as hints,t as id,e as solution,i as starterCode,s as tests,o as title};
