const t="03-operators-arithmetic-comparison-27",s="Comparison chaining",o=`const result = 1 < 2 && 2 < 3;
console.log(result);`,e=`const result = 1 < 2 && 2 < 3;
console.log(result);`,n=[{input:[],expected:"true"}],i=["&& requires both sides to be true","1<2 is true AND 2<3 is true"],r={id:t,title:s,starterCode:o,solution:e,tests:n,hints:i};export{r as default,i as hints,t as id,e as solution,o as starterCode,n as tests,s as title};
