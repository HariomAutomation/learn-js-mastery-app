const t="02-data-types-reference-types-typeof-11",o="Shallow copy with spread operator",e=`const original = { a: 1, b: 2 };
const copy = ;
console.log(copy);`,s=`const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);`,n=[{input:[],expected:"{ a: 1, b: 2 }"}],c=["... spreads the properties","Creates a new object"],r={id:t,title:o,starterCode:e,solution:s,tests:n,hints:c};export{r as default,c as hints,t as id,s as solution,e as starterCode,n as tests,o as title};
