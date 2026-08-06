const e="02-data-types-reference-types-typeof-14",o="Spread doesn't deep copy",t=`const original = { a: { b: 1 } };
const copy = { ...original };
copy.a.b = 99;
console.log();`,s=`const original = { a: { b: 1 } };
const copy = { ...original };
copy.a.b = 99;
console.log(original.a.b);`,n=[{input:[],expected:"99"}],c=["Spread is only shallow","Nested objects still share references"],i={id:e,title:o,starterCode:t,solution:s,tests:n,hints:c};export{i as default,c as hints,e as id,s as solution,t as starterCode,n as tests,o as title};
