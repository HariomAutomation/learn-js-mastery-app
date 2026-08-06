const t="03-operators-logical-ternary-04",s="Logical OR with first falsy",o=`const result = "" || "default";
console.log(result);`,e=`const result = "" || "default";
console.log(result);`,l=[{input:[],expected:"default"}],n=["|| short-circuits on first truthy","Empty string is falsy"],r={id:t,title:s,starterCode:o,solution:e,tests:l,hints:n};export{r as default,n as hints,t as id,e as solution,o as starterCode,l as tests,s as title};
