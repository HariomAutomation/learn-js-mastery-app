const t="03-operators-logical-ternary-50",o="Optional chaining with method on null",n=`const obj = null;
const result = obj?.toString();
console.log(result);`,s=`const obj = null;
const result = obj?.toString();
console.log(result);`,e=[{input:[],expected:"undefined"}],l=["?. returns undefined if object is null","No error is thrown"],r={id:t,title:o,starterCode:n,solution:s,tests:e,hints:l};export{r as default,l as hints,t as id,s as solution,n as starterCode,e as tests,o as title};
