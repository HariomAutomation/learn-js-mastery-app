const t="03-operators-logical-ternary-49",s="Nullish vs OR with false",e=`const result = false ?? 'default';
console.log(result);`,l=`const result = false ?? 'default';
console.log(result);`,o=[{input:[],expected:"false"}],n=["?? only triggers on null/undefined","false is not null or undefined"],r={id:t,title:s,starterCode:e,solution:l,tests:o,hints:n};export{r as default,n as hints,t as id,l as solution,e as starterCode,o as tests,s as title};
