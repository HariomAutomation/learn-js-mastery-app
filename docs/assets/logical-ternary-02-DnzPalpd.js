const t="03-operators-logical-ternary-02",s="Logical AND with falsy first",o=`const result = 0 && 42;
console.log(result);`,e=`const result = 0 && 42;
console.log(result);`,l=[{input:[],expected:"0"}],n=["&& short-circuits on first falsy","0 is falsy"],r={id:t,title:s,starterCode:o,solution:e,tests:l,hints:n};export{r as default,n as hints,t as id,e as solution,o as starterCode,l as tests,s as title};
