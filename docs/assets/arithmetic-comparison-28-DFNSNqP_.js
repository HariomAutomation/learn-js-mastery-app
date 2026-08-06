const t="03-operators-arithmetic-comparison-28",o="Number.EPSILON for float comparison",s=`const result = 0.1 + 0.2 === 0.3;
console.log(result);`,e=`const result = 0.1 + 0.2 === 0.3;
console.log(result);`,n=[{input:[],expected:"false"}],i=["Floating point math is imprecise","0.1+0.2 is not exactly 0.3"],r={id:t,title:o,starterCode:s,solution:e,tests:n,hints:i};export{r as default,i as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
