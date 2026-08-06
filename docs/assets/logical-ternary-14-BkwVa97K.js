const t="03-operators-logical-ternary-14",s="OR vs Nullish with zero",e=`const result = 0 || 'default';
console.log(result);`,o=`const result = 0 || 'default';
console.log(result);`,l=[{input:[],expected:"default"}],n=["|| treats 0 as falsy","0 is falsy, so returns 'default'"],r={id:t,title:s,starterCode:e,solution:o,tests:l,hints:n};export{r as default,n as hints,t as id,o as solution,e as starterCode,l as tests,s as title};
