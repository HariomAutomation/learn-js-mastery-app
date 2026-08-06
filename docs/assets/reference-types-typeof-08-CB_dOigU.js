const e="02-data-types-reference-types-typeof-08",t="Object comparison by reference",n=`const a = { x: 1 };
const b = { x: 1 };
console.log();`,s=`const a = { x: 1 };
const b = { x: 1 };
console.log(a === b);`,o=[{input:[],expected:"false"}],c=["Different objects are never ===","Even with same content"],r={id:e,title:t,starterCode:n,solution:s,tests:o,hints:c};export{r as default,c as hints,e as id,s as solution,n as starterCode,o as tests,t as title};
