const t="02-data-types-reference-types-typeof-12",s="Shallow copy with Object.assign",e=`const original = { a: 1 };
const copy = ;
console.log(copy);`,o=`const original = { a: 1 };
const copy = Object.assign({}, original);
console.log(copy);`,n=[{input:[],expected:"{ a: 1 }"}],c=["Object.assign copies properties","First arg is target, rest are sources"],i={id:t,title:s,starterCode:e,solution:o,tests:n,hints:c};export{i as default,c as hints,t as id,o as solution,e as starterCode,n as tests,s as title};
