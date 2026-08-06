const e="02-data-types-reference-types-typeof-13",t="Deep copy with structuredClone",o=`const original = { a: { b: 1 } };
const copy = ;
console.log(copy.a.b);`,s=`const original = { a: { b: 1 } };
const copy = structuredClone(original);
console.log(copy.a.b);`,n=[{input:[],expected:"1"}],c=["structuredClone creates deep copies","Nested objects are fully cloned"],r={id:e,title:t,starterCode:o,solution:s,tests:n,hints:c};export{r as default,c as hints,e as id,s as solution,o as starterCode,n as tests,t as title};
