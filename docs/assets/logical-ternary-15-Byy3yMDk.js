const t="03-operators-logical-ternary-15",s="Nullish vs OR with empty string",n=`const result = '' ?? 'default';
console.log(result);`,e=`const result = '' ?? 'default';
console.log(result);`,o=[{input:[],expected:""}],l=["?? only triggers on null/undefined","Empty string is not null or undefined"],r={id:t,title:s,starterCode:n,solution:e,tests:o,hints:l};export{r as default,l as hints,t as id,e as solution,n as starterCode,o as tests,s as title};
