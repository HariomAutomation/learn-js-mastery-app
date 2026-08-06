const t="03-operators-logical-ternary-13",o="Nullish vs OR with zero",s=`const result = 0 ?? 'default';
console.log(result);`,e=`const result = 0 ?? 'default';
console.log(result);`,n=[{input:[],expected:"0"}],l=["?? only triggers on null/undefined","0 is not null or undefined"],r={id:t,title:o,starterCode:s,solution:e,tests:n,hints:l};export{r as default,l as hints,t as id,e as solution,s as starterCode,n as tests,o as title};
